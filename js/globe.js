/* Offline Earth renderer. Geographic geometry: public-domain Natural Earth.
   Points are projected from a 3D sphere; both rotation axes remain unrestricted. */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('locationGlobe');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let yaw = -73.0479 * Math.PI / 180, pitch = 33.6844 * Math.PI / 180;
  let pointer = null, frame = null, previous = 0, paused = false, visible = true;
  const land = window.globeLand || [];
  // Sample evenly across the sphere, then retain points inside geographic land rings.
  function inside(lon, lat, ring) {
    let hit = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }
  const bounds = land.map(r => ({r, minX:Math.min(...r.map(p=>p[0])), maxX:Math.max(...r.map(p=>p[0])), minY:Math.min(...r.map(p=>p[1])), maxY:Math.max(...r.map(p=>p[1]))}));
  const dots = [];
  for (let lat = -80; lat <= 83; lat += 1.7) {
    const step = 1.7 / Math.cos(lat * Math.PI / 180);
    for (let lon = -180; lon < 180; lon += step) {
      if (bounds.some(b => lon>=b.minX && lon<=b.maxX && lat>=b.minY && lat<=b.maxY && inside(lon,lat,b.r))) dots.push([lat,lon]);
    }
  }
  function point(lat, lon) {
    const a = lat * Math.PI / 180, b = lon * Math.PI / 180 + yaw;
    const x = Math.cos(a)*Math.sin(b), y = Math.sin(a), z = Math.cos(a)*Math.cos(b);
    return {x:360+x*265, y:360-(y*Math.cos(pitch)-z*Math.sin(pitch))*265, z:y*Math.sin(pitch)+z*Math.cos(pitch)};
  }
  function draw() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = Math.max(1, Math.round(canvas.getBoundingClientRect().width*dpr));
    if (canvas.width !== size) {canvas.width=size;canvas.height=size;}
    ctx.setTransform(size/720,0,0,size/720,0,0);
    ctx.clearRect(0,0,720,720);
    const aura=ctx.createRadialGradient(360,360,220,360,360,306);
    aura.addColorStop(0,'rgba(94,178,196,.035)');aura.addColorStop(.65,'rgba(114,165,211,.045)');aura.addColorStop(1,'rgba(65,92,122,0)');
    ctx.fillStyle=aura;ctx.beginPath();ctx.arc(360,360,306,0,Math.PI*2);ctx.fill();
    const shade=ctx.createRadialGradient(260,250,0,370,370,330);
    shade.addColorStop(0,'#1a303c');shade.addColorStop(.55,'#10212e');shade.addColorStop(1,'#080f18');
    ctx.fillStyle=shade;ctx.beginPath();ctx.arc(360,360,265,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(145,208,226,.2)';ctx.lineWidth=.8;ctx.stroke();
    // Quiet geographic grid, behind the continental dots.
    ctx.strokeStyle='rgba(127,166,193,.09)';ctx.lineWidth=.65;
    function line(points){ctx.beginPath();let started=false;points.forEach(([lat,lon])=>{const p=point(lat,lon);if(p.z<0){started=false;return;}if(started)ctx.lineTo(p.x,p.y);else ctx.moveTo(p.x,p.y);started=true;});ctx.stroke();}
    for(let lat=-60;lat<=60;lat+=30)line(Array.from({length:181},(_,i)=>[lat,i*2-180]));
    for(let lon=-180;lon<180;lon+=30)line(Array.from({length:91},(_,i)=>[i*2-90,lon]));
    for(const [lat,lon] of dots){const p=point(lat,lon);if(p.z<=0)continue;ctx.fillStyle=`rgba(151,206,218,${.22+p.z*.64})`;ctx.beginPath();ctx.arc(p.x,p.y,1.1+p.z*.6,0,Math.PI*2);ctx.fill();}
    const p=point(33.6844,73.0479);
    if(p.z>0){ctx.fillStyle='rgba(248,105,117,.12)';ctx.beginPath();ctx.arc(p.x,p.y,15,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(255,127,135,.5)';ctx.lineWidth=1;ctx.stroke();ctx.fillStyle='#ff777f';ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();ctx.font='500 13px Arial';ctx.fillStyle='#e1eaf2';ctx.fillText('Islamabad',p.x+22,p.y-8);}
    canvas.dataset.yaw=String(yaw);canvas.dataset.pitch=String(pitch);
  }
  function tick(time){frame=null;if(!visible||document.hidden)return;if(!reduced&&!paused&&!pointer){if(previous)yaw+=Math.min(time-previous,40)*.000025;draw();}previous=time;if(!reduced&&!paused)frame=requestAnimationFrame(tick);}
  function resume(){previous=0;if(!frame&&!reduced&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
  function reset(){yaw=-73.0479*Math.PI/180;pitch=33.6844*Math.PI/180;draw();}
  canvas.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY};paused=true;canvas.setPointerCapture(e.pointerId);canvas.focus({preventScroll:true});});
  canvas.addEventListener('pointermove',e=>{if(!pointer)return;yaw+=(e.clientX-pointer.x)*.008;pitch+=(e.clientY-pointer.y)*.008;pointer={x:e.clientX,y:e.clientY};draw();});
  ['pointerup','pointercancel','lostpointercapture'].forEach(t=>canvas.addEventListener(t,()=>{pointer=null;}));
  canvas.addEventListener('focus',()=>{paused=true;});canvas.addEventListener('blur',()=>{paused=false;resume();});
  canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();paused=true;if(e.key==='Home')return reset();yaw+=e.key==='ArrowLeft'?-.12:e.key==='ArrowRight'?.12:0;pitch+=e.key==='ArrowUp'?-.12:e.key==='ArrowDown'?.12:0;draw();});
  document.getElementById('globeReset')?.addEventListener('click',reset);
  new ResizeObserver(draw).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible&&frame){cancelAnimationFrame(frame);frame=null;}else resume();}).observe(canvas);
  document.addEventListener('visibilitychange',resume);
  draw();resume();
});
