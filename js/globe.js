// A perspective-projected sphere, with an actual latitude/longitude marker.
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('locationGlobe');
  const ctx = canvas.getContext('2d');
  let yaw = -73.0479 * Math.PI / 180, pitch = 33.6844 * Math.PI / 180;
  let pointer = null;
  function point(lat, lon) {
    const a = lat * Math.PI / 180, b = lon * Math.PI / 180 + yaw;
    const x = Math.cos(a) * Math.sin(b), y = Math.sin(a), z = Math.cos(a) * Math.cos(b);
    const yy = y * Math.cos(pitch) - z * Math.sin(pitch);
    const zz = y * Math.sin(pitch) + z * Math.cos(pitch);
    const scale = 210 * 3 / (3 - zz * .25);
    return {x: 300 + x * scale, y: 240 - yy * scale, z: zz};
  }
  function line(points) {
    ctx.beginPath(); let visible = false;
    points.forEach(([a,b]) => {const p=point(a,b); if(p.z < 0) {visible=false;return;} if(visible)ctx.lineTo(p.x,p.y); else ctx.moveTo(p.x,p.y); visible=true;}); ctx.stroke();
  }
  function draw() {
    ctx.clearRect(0,0,600,480);
    const fill=ctx.createRadialGradient(250,180,20,300,240,225);fill.addColorStop(0,'#173549');fill.addColorStop(1,'#080f1b');
    ctx.fillStyle=fill;ctx.beginPath();ctx.arc(300,240,225,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(103,232,249,.3)';ctx.lineWidth=1;
    for(let lat=-75;lat<=75;lat+=15)line(Array.from({length:181},(_,i)=>[lat,i*2-180]));
    for(let lon=-180;lon<180;lon+=15)line(Array.from({length:91},(_,i)=>[i*2-90,lon]));
    const p=point(33.6844,73.0479);
    if(p.z>=0){ctx.fillStyle='#ff4545';ctx.beginPath();ctx.arc(p.x,p.y,6,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='15px system-ui';ctx.fillText('Islamabad',p.x+12,p.y-12);}
  }
  function reset(){yaw=-73.0479*Math.PI/180;pitch=33.6844*Math.PI/180;draw();}
  canvas.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.focus();});
  canvas.addEventListener('pointermove',e=>{if(!pointer)return;yaw+=(e.clientX-pointer.x)*.008;pitch+=(e.clientY-pointer.y)*.008;pointer={x:e.clientX,y:e.clientY};draw();});
  ['pointerup','pointercancel','lostpointercapture'].forEach(type=>canvas.addEventListener(type,()=>pointer=null));
  canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home')return reset();yaw+=e.key==='ArrowLeft'?-.12:e.key==='ArrowRight'?.12:0;pitch+=e.key==='ArrowUp'?-.12:e.key==='ArrowDown'?.12:0;draw();});
  document.getElementById('globeReset').addEventListener('click',reset);draw();
});
