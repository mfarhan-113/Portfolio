const projectDetails = {
  facial: {badge: "Computer Vision", title: "Facial Emotion Recognition", subtitle: "CNN-based facial expression classification.", overview: "A real-time CNN system classifying facial expressions from images or a live camera feed.", features: ["Image and webcam inference.", "Preprocessing and augmentation of grayscale face images.", "Multi-class emotion prediction with softmax output."], tech: ["CNN", "OpenCV"], role: "Built the facial emotion recognition system."},
  booklender: {badge: "Project", title: "BookLender", subtitle: "", overview: "", features: [], tech: [], role: ""},
  silverback: {badge: "Project", title: "Silverback Capital", subtitle: "", overview: "", features: [], tech: [], role: ""},
  braidscope: {
    badge: "AI Marketing Intelligence",
    title: "Braidscope",
    subtitle: "Multi-tenant marketing analytics platform with AI chat over connected data.",
    overview:
      "Braidscope brings marketing, CRM, ecommerce, and analytics tools into one client workspace. I worked on end-to-end development.",
    features: [
      "Multi-client workspace architecture with Supabase authentication and RLS.",
      "OAuth integrations for GA4, Google Ads, Meta Ads, Klaviyo, HubSpot, Shopify, OpenRouter, OpenAI, and Claude BYOK.",
      "Ask AI flow that selects the right platform tools and formats readable answers from live client data.",
      "Dedicated dashboards for KPIs, trends, campaign performance, acquisition channels, CRM records, and marketing activity.",
      "Redis stale-while-revalidate caching to reduce repeated external API calls and keep dashboards fast.",
      "Secure server-side token storage, encrypted API keys, Docker Compose deployment, Caddy HTTPS, and GitHub Actions CI/CD."
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "MCP"],
    role: "End-to-end development."
  },
  stratum: {
    badge: "Healthcare RCM Platform",
    title: "Stratum / Gemini Derm",
    subtitle: "Dermatology billing and operations platform for intake, eligibility, checkout, and RCM visibility.",
    overview:
      "Stratum / Gemini Derm is an internal healthcare operations platform that helps a dermatology practice reduce front-desk errors, improve eligibility verification, manage provider workflows, track referrals and authorizations, and prepare cleaner billing data for future EMR integration.",
    features: [
      "Patient profiles with insurance, referral/auth, scheduling readiness, waitlist, and follow-up fields.",
      "AI/OCR face-sheet intake from Google Drive with staged review and missing-field warnings.",
      "pVerify eligibility checks with payer remapping, Medicare/Medicaid logic, copay, deductible, and out-of-pocket extraction.",
      "Payer rules, fee schedules, CPT/modifier logic, visit value calculator, and audit-risk indicators.",
      "Encounter queue, checkout collections, MA code review, provider metrics, audit trail, and RCM command center foundations.",
      "Integration foundations for NPI lookup, Keragon/ModMed, RingCentral, Astrana CPT authorization, and SMS notifications."
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind", "Google Gemini", "pVerify", "Docker"],
    role:
      "Built product workflows across frontend, backend, database modeling, insurance eligibility, operational dashboards, and billing intelligence."
  },
  medcenter: {
    badge: "Realtime Voice AI",
    title: "MedCenter Volta AI Telephone Assistant",
    subtitle: "Deepgram-powered clinic phone agent for multilingual patient calls and appointment booking.",
    overview:
      "This AI telephone assistant receives patient calls through Azure Communication Services, streams live audio to a voice agent, handles patient conversation, verifies existing patients silently, books appointments through EPAAD/OneDoc APIs, stores transcripts, and sends German call summaries or handoff emails after calls end.",
    features: [
      "Azure Communication Services call intake with FastAPI WebSocket audio routing.",
      "Deepgram Voice Agent for realtime ASR, turn-taking, and speech synthesis.",
      "Silent phonebook lookup using caller number, first name, and last name without exposing record status to callers.",
      "Appointment booking flow with doctor selection, availability checks, EPAAD field validation, and missing-field recovery.",
      "Guardrails for spelling loops, doctor ambiguity, guessed calendar IDs, safety escalation, and false transfer detection.",
      "Multilingual ASR tuning with language hints, clinic keyterms, transcript cleanup, and post-call email handoff."
    ],
    tech: ["Python", "FastAPI", "WebSockets", "Azure Communication Services", "Deepgram", "Azure OpenAI", "EPAAD API", "OneDoc API", "SMTP"],
    role:
      "Implemented realtime audio orchestration, business-logic tools, booking safeguards, transcript handling, and production call-quality improvements."
  },
  eeknova: {
    badge: "Computer Vision Trainer",
    title: "Eeknova AI Trainer",
    subtitle: "AI fitness and learning platform for yoga, Zumba, chess, 3D coaching, and progress tracking.",
    overview:
      "Eeknova AI Trainer is a full-stack coaching platform that combines YOLO pose estimation, real-time yoga correction, Zumba movement analysis, chess lessons, 3D avatar demos, voice assistant support, authentication, and user progress dashboards.",
    features: [
      "Real-time yoga posture correction from webcam frames using YOLOv11 pose, OpenCV, and reference-angle comparison.",
      "WebSocket pose analysis with live accuracy scoring, skeleton feedback, warm-up, pose-hold, release, cooldown, and summaries.",
      "Three.js / React Three Fiber 3D avatar coach using GLB animation phases.",
      "Zumba choreography mapping across songs and difficulty modes with movement analysis foundations.",
      "Interactive chess learning modules with legal moves, exercises, session APIs, and module progress.",
      "JWT auth, SQLite persistence, dashboard stats, streaks, TTS/STT assistant routes, and session history."
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Three.js", "FastAPI", "YOLOv11", "OpenCV", "SQLite", "SQLAlchemy", "JWT"],
    role:
      "Built the full-stack architecture connecting webcam analysis, backend pose intelligence, 3D coaching, auth, dashboards, and multi-domain training modules."
  },
  legal: {
    badge: "Legal RAG Assistant",
    title: "AI-Powered Legal Document Assistant for WhatsApp",
    subtitle: "WhatsApp legal AI that searches large document collections and returns source-backed answers.",
    overview:
      "This production-style assistant connects WhatsApp to an Azure-based RAG backend so legal teams can ask natural-language questions, search internal and external repositories, retrieve source-backed answers, and receive secure document links directly in WhatsApp.",
    features: [
      "WhatsApp chatbot using GreenAPI with text and voice note support.",
      "Azure AI Search hybrid retrieval across keyword and vector search indexes.",
      "OCR and indexing for PDFs, images, Word, Excel, CSV, text, and email files.",
      "Multi-agent RAG flow with query rewriting, retrieval validation, reranking, cautious answer generation, and source references.",
      "Secure SAS/short-link document access, email sharing workflow, and Cosmos DB conversation memory.",
      "Metadata classification for document type, people, organizations, projects, dates, and summaries."
    ],
    tech: ["Python", "FastAPI", "Azure OpenAI", "Azure AI Search", "Azure Blob Storage", "Azure Document Intelligence", "LangGraph", "Cosmos DB", "GreenAPI", "SMTP"],
    role:
      "Designed and implemented the backend RAG pipeline, WhatsApp integration, OCR/indexing scripts, metadata enrichment, secure source links, and retrieval quality improvements."
  },
  colorization: {
    badge: "Generative AI",
    title: "Sketch & Image Colorization",
    subtitle: "Deep learning pipeline for automatic image and sketch colorization.",
    overview:
      "A generative computer-vision project that converts grayscale sketches and images into colorized outputs using neural image translation techniques and model evaluation workflows.",
    features: [
      "Prepared preprocessing pipelines for grayscale and paired image datasets.",
      "Experimented with generative architectures for automatic color prediction.",
      "Evaluated output quality across different image categories and edge cases.",
      "Packaged the work as a portfolio-ready AI demo."
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "GANs"],
    role: "Built the data pipeline, model experiments, and visual demo workflow."
  },
  nextnrgie: {
    badge: "Energy Platform",
    title: "NextNRGIE",
    subtitle: "Full-stack platform for energy-related workflows and digital operations.",
    overview:
      "A web platform focused on modernizing energy service workflows with clean interfaces, structured user journeys, and reliable backend functionality.",
    features: [
      "Designed responsive frontend pages for business workflows.",
      "Implemented backend routes and data-handling logic.",
      "Improved user experience with organized content and clean navigation.",
      "Prepared the project for practical deployment."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    role: "Worked across frontend implementation, backend APIs, and deployment readiness."
  },
  myeyes: {
    badge: "Assistive AI",
    title: "My Eyes — Assistive Vision App",
    subtitle: "Mobile computer-vision assistant for visually impaired users.",
    overview:
      "My Eyes is an assistive mobile app that uses object detection and speech feedback to help visually impaired users understand their surroundings in real time.",
    features: [
      "Real-time object detection using YOLO-based computer vision.",
      "Text-to-speech feedback for detected surroundings.",
      "Mobile-first Flutter interface for accessibility.",
      "Recognized with an HEC stipend for practical impact."
    ],
    tech: ["Flutter", "Python", "YOLO", "OpenCV", "TTS", "Mobile AI"],
    role: "Built the AI-assisted mobile experience and integrated detection with spoken feedback."
  },
  roadlayer: {
    badge: "Civil AI",
    title: "Road Layer Detection",
    subtitle: "Computer-vision and point-cloud workflow for construction progress analysis.",
    overview:
      "A construction analytics project that helps analyze road-layer progress by measuring layer thickness, volume, and construction state from visual and point-cloud data.",
    features: [
      "Processed road layer visual data for progress tracking.",
      "Analyzed thickness and volume estimates from point-cloud-style measurements.",
      "Created reporting logic for construction monitoring.",
      "Explored computer vision use cases in civil engineering workflows."
    ],
    tech: ["Python", "OpenCV", "Point Cloud Processing", "NumPy", "Data Analysis"],
    role: "Developed the analysis workflow and portfolio-facing proof of concept."
  },
  braintumor: {
    badge: "Medical Imaging",
    title: "Brain Tumor Detection",
    subtitle: "CNN-based MRI classification system for brain tumor detection.",
    overview:
      "A medical imaging project that classifies MRI scans using convolutional neural networks and transfer learning models to support brain tumor detection research.",
    features: [
      "Prepared MRI image datasets with preprocessing and augmentation.",
      "Trained CNN and transfer-learning models such as VGG16 and ResNet.",
      "Reached about 92% classification accuracy in project testing.",
      "Created a clear medical AI demo for portfolio presentation."
    ],
    tech: ["Python", "TensorFlow", "Keras", "VGG16", "ResNet", "OpenCV", "Medical Imaging"],
    role: "Handled preprocessing, model training, evaluation, and presentation."
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderCaseStudy(projectId) {
  qs('#caseStudy')?.remove();
  if (projectId !== 'braidscope') return;
  const slides = [
    ['Homepage hero', 'Braidscope', 'Marketing analytics and AI in one workspace.'],
    ['Problem', 'Connected tools, one workspace', 'Bringing marketing, CRM, ecommerce, and analytics tools together.'],
    ['Demo workspace', 'One workspace. Connected tools.', 'Marketing, CRM, ecommerce, and analytics tools in one client workspace.'],
    ['Dashboard', 'A clearer view of performance.', 'An overview of KPIs, trends, and campaign performance.'],
    ['Integrations', 'Connected platforms', 'GA4, Google Ads, Meta Ads, Klaviyo, and HubSpot.'],
    ['Branding preview', 'Braidscope', 'Marketing analytics and AI in one workspace.'],
    ['Closing', 'End-to-end development', 'Next.js · FastAPI · PostgreSQL · Redis · MCP']
  ];
  const panel = document.createElement('section');
  panel.id = 'caseStudy'; panel.className = 'case-study';
  panel.setAttribute('aria-label', 'Braidscope seven-slide case study');
  panel.innerHTML = '<p class="case-study-label"></p><div class="case-study-frame"><h3></h3><p></p></div><div class="carousel-controls"><button type="button" class="btn btn-outline">Previous</button><span role="status" aria-live="polite"></span><button type="button" class="btn btn-outline">Next</button></div>';
  panel.insertAdjacentHTML('beforeend', '<p class="case-study-disclaimer">Editorial case study · Text layouts, not product screenshots.</p>');
  qs('.modal-body').prepend(panel);
  let index = 0;
  const buttons = qsa('button', panel);
  function show() {
    qs('.case-study-label', panel).textContent = slides[index][0];
    qs('.case-study-frame', panel).dataset.slide = String(index + 1).padStart(2, '0');
    qs('h3', panel).textContent = slides[index][1];
    qs('.case-study-frame p', panel).textContent = slides[index][2];
    qs('[role="status"]', panel).textContent = `${index + 1} / 7`;
  }
  buttons[0].onclick = () => {index = (index + 6) % 7; show();};
  buttons[1].onclick = () => {index = (index + 1) % 7; show();};
  panel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); index = (index + (event.key === 'ArrowLeft' ? 6 : 1)) % 7; show();
    }
  });
  show();
}

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function initPreloader() {
  const preloader = qs("#preloader");
  if (!preloader) return;
  window.addEventListener("load", () => {
    window.setTimeout(() => preloader.classList.add("hidden"), 350);
  });
}

function initCursor() {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const dot = qs("#cursorDot");
  const ring = qs("#cursorRing");
  if (!dot || !ring) return;

  let ringX = window.innerWidth / 2;
  let ringY = window.innerHeight / 2;
  let mouseX = ringX;
  let mouseY = ringY;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  qsa("a, button, input, textarea, .project-card, .service-card").forEach((element) => {
    element.addEventListener("mouseenter", () => ring.classList.add("hover"));
    element.addEventListener("mouseleave", () => ring.classList.remove("hover"));
  });
}

function initNavigation() {
  const navbar = qs("#navbar");
  const toggle = qs("#navToggle");
  const mobileMenu = qs("#mobileMenu");
  const navLinks = qsa(".nav-link, .mobile-menu a");

  const onScroll = () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  mobileMenu?.setAttribute("inert", "");
  toggle?.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("active");
    mobileMenu?.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
    if (mobileMenu) mobileMenu.inert = !isOpen;
    if (isOpen) qs("a", mobileMenu)?.focus();
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle?.classList.remove("active");
      mobileMenu?.classList.remove("active");
      document.body.classList.remove("menu-open");
      toggle?.setAttribute("aria-expanded", "false");
      mobileMenu?.setAttribute("aria-hidden", "true");
      if (mobileMenu) mobileMenu.inert = true;
    });
  });

  document.addEventListener('keydown', event => {
    if (!mobileMenu?.classList.contains('active')) return;
    if (event.key === 'Escape') {
      toggle.click(); toggle.focus();
    }
    if (event.key === 'Tab') {
      const links = qsa('a[href]', mobileMenu);
      if (event.shiftKey && document.activeElement === links[0]) {event.preventDefault(); links.at(-1).focus();}
      else if (!event.shiftKey && document.activeElement === links.at(-1)) {event.preventDefault(); links[0].focus();}
    }
  });
  const sections = qsa("section[id]").filter(section => qsa(".nav-link").some(link => link.hash === `#${section.id}`));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        qsa(".nav-link").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

function initTypewriter() {
  const target = qs("#typedText");
  if (!target) return;
  const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "Computer Vision Specialist",
    "Production RAG Builder"
  ];

  if (prefersReducedMotion) {
    target.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const text = roles[roleIndex];
    target.textContent = text.slice(0, charIndex);

    if (!deleting && charIndex < text.length) {
      charIndex += 1;
      setTimeout(tick, 75);
      return;
    }

    if (!deleting && charIndex === text.length) {
      deleting = true;
      setTimeout(tick, 1400);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 35);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(tick, 250);
  }

  tick();
}

function initRevealAnimations() {
  const elements = qsa(".reveal-up");
  if (!elements.length) return;

  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    observer.observe(element);
  });
}

function initCounters() {
  const counters = qsa("[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.count || 0);
        const suffix = counter.dataset.suffix || "+";
        const duration = prefersReducedMotion ? 1 : 1200;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = `${value}${suffix}`;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(counter);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initProjectFilters() {
  const buttons = qsa(".filter-btn");
  const cards = qsa(".project-card");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => {item.classList.remove("active");item.setAttribute("aria-pressed", "false");});
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });
}

function initProjectModal() {
  const modal = qs("#projectModal");
  const closeButton = qs("#modalClose");
  if (!modal || !closeButton) return;

  const fields = {
    badge: qs("#modalBadge"),
    title: qs("#modalTitle"),
    subtitle: qs("#modalSubtitle"),
    overview: qs("#modalOverview"),
    features: qs("#modalFeatures"),
    tech: qs("#modalTech"),
    role: qs("#modalRole"),
    roleSection: qs("#modalRoleSection")
  };

  function openModal(projectId) {
    const detail = projectDetails[projectId];
    if (!detail) return;

    fields.badge.textContent = detail.badge;
    fields.title.textContent = detail.title;
    fields.subtitle.textContent = detail.subtitle;
    fields.overview.textContent = detail.overview;
    fields.features.innerHTML = detail.features.map((feature) => `<li>${feature}</li>`).join("");
    fields.tech.innerHTML = detail.tech.map((tech) => `<span>${tech}</span>`).join("");
    fields.role.textContent = detail.role || "";
    fields.roleSection.style.display = detail.role ? "" : "none";

    qsa(".modal-section", modal).forEach(section => {
      const content = section.querySelector("p, ul, .modal-tech");
      section.hidden = content ? !content.textContent.trim() : false;
    });
    qs('.modal-pending', modal)?.remove();
    if (projectId === 'booklender' || projectId === 'silverback') {
      const note = document.createElement('p'); note.className = 'modal-pending';
      note.textContent = 'Project details will be added after confirmation.';
      qs('.modal-body', modal).append(note);
    }
    renderCaseStudy(projectId);
    modal.inert = false;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
    modal.dataset.returnFocus = projectId;
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    qs(`[data-project="${modal.dataset.returnFocus}"]`)?.focus();
    modal.inert = true;
  }

  qsa(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card.dataset.project);
      }
    });
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `View ${qs('h3', card).textContent} details`);
    const detailButton = qs('.project-detail-btn', card);
    if (detailButton) {detailButton.tabIndex = -1;detailButton.setAttribute('aria-label', card.getAttribute('aria-label'));}
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) closeModal();
    if (event.key === "Tab" && modal.classList.contains("active")) {
      const items = qsa('button:not([disabled]), a[href], [tabindex="0"]', modal).filter(el => !el.closest('[hidden]'));
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
    }
  });
}

function initContactForm() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "Portfolio inquiry").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out the required fields.";
      status.className = "form-status error";
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `mailto:officialforwork113@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    status.textContent = "Your email app should open now. You can also email me directly at officialforwork113@gmail.com.";
    status.className = "form-status success";
    form.reset();
  });
}

function initBackToTop() {
  const button = qs("#backToTop");
  if (!button) return;

  const toggle = () => button.classList.toggle("visible", window.scrollY > 500);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  // Use the native pointer; retain lightweight scroll reveals.

  initNavigation();

  initRevealAnimations();
  initCounters();
  qsa('.project-card').forEach((card, index) => {
    const number = document.createElement('span'); number.className = 'project-number';
    number.textContent = String(index + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true');
    qs('.project-card-header', card)?.insertBefore(number, qs('.project-card-header', card).children[1]);
  });
  initProjectFilters();
  initProjectModal();
  initContactForm();
  initBackToTop();
  const stages = qsa('.pipeline li');
  let stage = -1, timer = null;
  function step() {
    stage = (stage + 1) % stages.length;
    stages.forEach((item, index) => item.classList.toggle('active', index === stage));
    qs('#labStatus').textContent = `Stage ${stage + 1}: ${stages[stage].textContent}`;
  }
  qs('#labStep')?.addEventListener('click', step);
  qs('#labPlay')?.addEventListener('click', () => {
    if (timer) {clearInterval(timer); timer = null; qs('#labPlay').textContent = 'Play sequence'; return;}
    step(); timer = setInterval(step, 1200); qs('#labPlay').textContent = 'Pause sequence';
  });
});
