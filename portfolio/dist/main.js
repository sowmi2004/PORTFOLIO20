import { portfolioContent } from './data.js';
const SECTION_IDS = {
    hero: 'hero',
    about: 'about',
    skills: 'skills',
    experience: 'experience',
    projects: 'projects',
    future: 'future-vision',
    contact: 'contact',
};
function createNav() {
    const items = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'future', label: 'Future Vision' },
        { id: 'contact', label: 'Contact' },
    ];
    const links = items
        .map((item) => `
      <button
        class="relative px-3 py-2 text-sm md:text-[0.9rem] text-slate-300 hover:text-accent transition-colors"
        data-nav-target="${SECTION_IDS[item.id]}"
        type="button"
      >
        ${item.label}
      </button>
    `)
        .join('');
    return `
    <header class="fixed top-0 inset-x-0 z-40 border-b border-slate-800/60 backdrop-blur-xl bg-slate-950/70">
      <nav class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-emerald-500/70 shadow-lg shadow-emerald-500/25">
            <span class="font-semibold text-slate-950 text-lg">SD</span>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-xs uppercase tracking-[0.2em] text-slate-400">Frontend</span>
            <span class="text-sm font-medium text-slate-50">Sowmiya Devi</span>
          </div>
        </div>
        <div class="hidden md:flex items-center gap-2">
          ${links}
        </div>
        <div class="flex md:hidden">
          <button id="nav-toggle" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-accent focus:outline-none">
            <span class="sr-only">Open navigation</span>
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-nav" class="md:hidden max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out border-t border-slate-800/60">
        <div class="mx-auto max-w-6xl px-4 pb-3 flex flex-col gap-1">
          ${links}
        </div>
      </div>
    </header>
  `;
}
function createHero() {
    const { name, title, heroTagline, heroIntro, socials, resumeUrl } = portfolioContent;
    const socialLinks = socials
        .map((social) => `
      <a
        href="${social.href}"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-accent transition-colors"
      >
        <span class="h-[1px] w-6 bg-slate-600/60"></span>
        <span>${social.label}</span>
      </a>
    `)
        .join('');
    const intro = heroIntro
        .map((paragraph) => `
      <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
        ${paragraph}
      </p>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.hero}" class="relative pt-28 md:pt-32 pb-20 sm:pb-24">
      <div class="hero-orb animate-float"></div>
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] items-center">
          <div class="relative z-10 animate-hero">
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 badge-pulse relative overflow-hidden">
              <span class="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>
              <span>Angular Frontend Developer</span>
            </div>
            <h1 class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              ${name}
            </h1>
            <p class="mt-2 text-lg sm:text-xl font-medium text-accent">
              ${title}
            </p>
            <p class="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              ${heroTagline}
            </p>
            <div class="mt-6 space-y-3 max-w-2xl">
              ${intro}
            </div>
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#${SECTION_IDS.projects}"
                class="inline-flex items-center justify-center rounded-full bg-accent hover:bg-emerald-400 text-slate-950 font-medium text-sm px-5 py-2.5 shadow-lg shadow-emerald-500/40 transition-transform duration-150 hover:-translate-y-[1px]"
              >
                View Projects
              </a>
              <a
                href="${resumeUrl}"
                class="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 hover:border-accent hover:text-accent text-slate-200 font-medium text-sm px-5 py-2.5 transition-colors"
              >
                Download Resume
              </a>
            </div>
            <div class="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              ${socialLinks}
            </div>
          </div>
          <div class="relative z-10">
            <div class="glass-panel p-6 sm:p-7 lg:p-8 animate-hero">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-400">Experience</p>
                  <p class="mt-1 text-3xl font-semibold text-slate-50">4+ yrs</p>
                  <p class="mt-1 text-xs text-slate-400">Angular-focused frontend delivery</p>
                </div>
                <div class="h-14 w-px bg-gradient-to-b from-transparent via-slate-600/70 to-transparent"></div>
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-400">Product</p>
                  <p class="mt-1 text-sm font-medium text-slate-50">Healthcare & Enterprise</p>
                  <p class="mt-1 text-xs text-slate-400">Building for real-world complexity</p>
                </div>
              </div>
              <div class="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
                <p>
                  I thrive in product teams where frontend decisions directly shape customer experience and long-term maintainability.
                </p>
                <p>
                  My work balances design detail with architectural discipline, ensuring that today&apos;s features never slow down tomorrow&apos;s roadmap.
                </p>
              </div>
              <div class="mt-5 flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 border border-slate-700/60">
                  Angular 8–12+ migrations
                </span>
                <span class="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 border border-slate-700/60">
                  Performance & lazy loading
                </span>
                <span class="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 border border-slate-700/60">
                  Enterprise UI systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
function createAbout() {
    const { summary } = portfolioContent;
    return `
    <section id="${SECTION_IDS.about}" class="py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] items-start reveal-on-scroll">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</h2>
            <p class="mt-4 text-2xl sm:text-3xl font-semibold text-slate-50">
              A frontend developer who treats every screen as a product, not just a page.
            </p>
          </div>
          <div class="space-y-4 text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed">
            <p>${summary}</p>
            <p>
              I naturally moved into frontend because it sits at the intersection of problem-solving and human experience. I enjoy
              transforming complex requirements into clear, focused interfaces that help people move faster and make better decisions.
            </p>
            <p>
              Working in product-based teams has shaped the way I think: every refactor should make future features easier to build,
              and every UI decision should reduce cognitive load for the user. I pay attention to details—loading states, error
              feedback, layout consistency—because they compound into trust.
            </p>
            <p>
              My growth so far has been driven by Angular migrations and performance-focused work. Going forward, I&apos;m leaning even
              more into architecture, scalability, and mentoring, while staying very close to the code and the end user.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
function createSkills() {
    const { skills } = portfolioContent;
    const cards = skills
        .map((category) => `
      <article class="glass-soft p-5 sm:p-6 reveal-on-scroll transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)]">
        <h3 class="text-sm font-semibold text-slate-100 flex items-center justify-between">
          <span>${category.category}</span>
          <span class="text-[11px] text-slate-400">${category.items.length} skills</span>
        </h3>
        <div class="mt-4 flex flex-wrap gap-2">
          ${category.items
        .map((item) => `
              <span class="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200 hover:border-accent hover:text-accent transition-colors shadow-sm">
                ${item}
              </span>
            `)
        .join('')}
        </div>
      </article>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.skills}" class="py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Skills</h2>
            <p class="mt-3 text-xl sm:text-2xl font-semibold text-slate-50">
              A focused Angular skillset with production depth.
            </p>
          </div>
          <p class="hidden md:block text-xs text-slate-400 max-w-xs text-right">
            Built around real product constraints: migrations, performance budgets, design systems, and long-lived codebases.
          </p>
        </div>
        <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
function createExperience() {
    const { experience } = portfolioContent;
    const timelineItems = experience
        .map((item, index) => `
      <article class="relative pl-6 sm:pl-8 reveal-on-scroll">
        <div class="absolute left-[7px] sm:left-[9px] top-1 w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_16px_rgba(74,222,128,0.8)]"></div>
        ${index < experience.length - 1
        ? '<div class="absolute left-[10px] sm:left-[12px] top-4 bottom-0 w-px bg-slate-800"></div>'
        : ''}
        <div class="glass-soft px-4 py-4 sm:px-5 sm:py-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-sm font-semibold text-slate-100">${item.role}</h3>
              <p class="text-xs text-slate-400">${item.company} · ${item.location}</p>
            </div>
            <p class="text-[11px] uppercase tracking-[0.16em] text-slate-400">${item.period}</p>
          </div>
          <p class="mt-2 text-xs text-accent/90">${item.focus}</p>
          <ul class="mt-3 space-y-2 text-xs sm:text-[0.8rem] text-slate-300 leading-relaxed">
            ${item.achievements
        .map((achievement) => `<li class="flex gap-2"><span class="mt-[6px] h-[3px] w-[14px] rounded-full bg-accent/70 flex-shrink-0"></span><span>${achievement}</span></li>`)
        .join('')}
          </ul>
        </div>
      </article>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.experience}" class="py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Experience</h2>
            <p class="mt-3 text-xl sm:text-2xl font-semibold text-slate-50">
              A path shaped by Angular migrations, performance, and product thinking.
            </p>
          </div>
          <p class="text-xs text-slate-400 max-w-sm">
            Each role has pushed me further—from learning Angular foundations to taking ownership of migrations and architectural decisions.
          </p>
        </div>
        <div class="relative">
          ${timelineItems}
        </div>
      </div>
    </section>
  `;
}
function createProjects() {
    const { projects } = portfolioContent;
    const projectCards = projects
        .map((project) => `
      <article class="group glass-soft p-5 sm:p-6 flex flex-col justify-between reveal-on-scroll transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(15,23,42,1)]">
        <div>
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-sm sm:text-[0.95rem] font-semibold text-slate-50 group-hover:text-accent transition-colors">
              ${project.title}
            </h3>
            ${project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="text-xs text-slate-400 hover:text-accent transition-colors flex items-center gap-1">
                    <span>GitHub</span>
                    <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 4h8m0 0v8m0-8L7 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>`
        : ''}
          </div>
          <p class="mt-3 text-xs sm:text-[0.8rem] text-slate-300 leading-relaxed">
            ${project.description}
          </p>
        </div>
        <div class="mt-4 space-y-3">
          <div class="flex flex-wrap gap-1.5">
            ${project.techStack
        .map((tech) => `
                <span class="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-700/70 px-2.5 py-1 text-[10px] text-slate-200">
                  ${tech}
                </span>
              `)
        .join('')}
          </div>
          <p class="text-[11px] text-accent/90">
            ${project.highlight}
          </p>
        </div>
      </article>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.projects}" class="py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Projects</h2>
            <p class="mt-3 text-xl sm:text-2xl font-semibold text-slate-50">
              Work that reflects growth, not just features shipped.
            </p>
          </div>
          <p class="hidden md:block text-xs text-slate-400 max-w-xs text-right">
            A mix of enterprise products, modernization projects, and personal experiments that push my skills forward.
          </p>
        </div>
        <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
}
function createFutureVision() {
    const { futureVision } = portfolioContent;
    const pillars = futureVision.pillars
        .map((pillar) => `
      <article class="glass-soft p-4 sm:p-5 reveal-on-scroll transition-transform duration-200 hover:-translate-y-1">
        <h3 class="text-xs font-semibold text-slate-100">${pillar.label}</h3>
        <p class="mt-2 text-xs sm:text-[0.8rem] text-slate-300 leading-relaxed">
          ${pillar.description}
        </p>
      </article>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.future}" class="py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] items-start">
          <div class="reveal-on-scroll">
            <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">${futureVision.title}</h2>
            <p class="mt-4 text-xl sm:text-2xl font-semibold text-slate-50">
              Looking ahead to Angular architectures that scale with ambition.
            </p>
            <p class="mt-4 text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed">
              ${futureVision.narrative}
            </p>
            <p class="mt-3 text-xs sm:text-[0.85rem] text-slate-400 leading-relaxed">
              My next chapter is about owning more of the frontend architecture: designing module boundaries, performance strategies,
              and UI systems that help teams move quickly without losing quality.
            </p>
          </div>
          <div class="grid gap-4 sm:gap-5 sm:grid-cols-2">
            ${pillars}
          </div>
        </div>
      </div>
    </section>
  `;
}
function createContact() {
    const { email, socials } = portfolioContent;
    const socialLinks = socials
        .map((social) => `
      <a
        href="${social.href}"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-accent transition-colors"
      >
        <span>${social.label}</span>
        <svg class="h-3 w-3" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4h8m0 0v8m0-8L7 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    `)
        .join('');
    return `
    <section id="${SECTION_IDS.contact}" class="py-16 sm:py-20 border-t border-slate-800/70">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 class="mt-4 text-xl sm:text-2xl font-semibold text-slate-50">
          Ready to contribute to ambitious, remote-first frontend teams.
        </h2>
        <p class="mt-3 text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed">
          If you&apos;re building Angular products that need clean architecture, UX-aware implementation, and a steady hand on migrations,
          I&apos;d love to talk.
        </p>
        <div class="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:${email}"
            class="inline-flex items-center justify-center rounded-full bg-accent hover:bg-emerald-400 text-slate-950 font-medium text-sm px-6 py-2.5 shadow-lg shadow-emerald-500/40 transition-transform duration-150 hover:-translate-y-[1px]"
          >
            Email Me
          </a>
          <div class="flex flex-wrap items-center justify-center gap-5">
            ${socialLinks}
          </div>
        </div>
        <p class="mt-8 text-[11px] text-slate-500">
          Built with Angular experience, but no frameworks here—just TypeScript, Tailwind, and a focus on clarity.
        </p>
      </div>
    </section>
  `;
}
function createLayout() {
    const { location } = portfolioContent;
    return `
    <div class="min-h-screen flex flex-col">
      ${createNav()}
      <main class="flex-1">
        <div class="pt-4 pb-10">
          ${createHero()}
          ${createAbout()}
          ${createSkills()}
          ${createExperience()}
          ${createProjects()}
          ${createFutureVision()}
          ${createContact()}
        </div>
      </main>
      <footer class="border-t border-slate-800/70 py-5">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>&copy; ${new Date().getFullYear()} ${portfolioContent.name}. Based in ${location}.</p>
          <p>Designed for remote-ready collaboration and continuous learning.</p>
        </div>
      </footer>
    </div>
  `;
}
function setupSmoothScrolling(root) {
    const navButtons = root.querySelectorAll('[data-nav-target]');
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section)
            return;
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight + 16 : 72;
        const rect = section.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - headerOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    };
    navButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-nav-target');
            if (targetId) {
                scrollToSection(targetId);
                const mobileNav = document.getElementById('mobile-nav');
                const navToggle = document.getElementById('nav-toggle');
                if (mobileNav && navToggle && mobileNav.style.maxHeight) {
                    mobileNav.style.maxHeight = '';
                }
            }
        });
    });
}
function setupMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (!navToggle || !mobileNav)
        return;
    navToggle.addEventListener('click', () => {
        const isOpen = Boolean(mobileNav.style.maxHeight);
        if (isOpen) {
            mobileNav.style.maxHeight = '';
        }
        else {
            mobileNav.style.maxHeight = `${mobileNav.scrollHeight}px`;
        }
    });
}
function setupActiveNavHighlight() {
    const navButtons = Array.from(document.querySelectorAll('button[data-nav-target]'));
    const sectionElements = Object.values(SECTION_IDS)
        .map((id) => document.getElementById(id))
        .filter((el) => Boolean(el));
    if (!sectionElements.length || !navButtons.length) {
        return;
    }
    const setActive = (id) => {
        navButtons.forEach((btn) => {
            const targetId = btn.getAttribute('data-nav-target');
            if (!targetId)
                return;
            if (targetId === id) {
                btn.classList.add('nav-link-active');
            }
            else {
                btn.classList.remove('nav-link-active');
            }
        });
    };
    const observer = new IntersectionObserver((entries) => {
        const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.target.offsetTop - b.target.offsetTop);
        const topEntry = visibleEntries[0];
        if (!topEntry)
            return;
        const id = topEntry.target.id;
        if (id && id !== SECTION_IDS.hero) {
            setActive(id);
        }
        else if (id === SECTION_IDS.hero) {
            navButtons.forEach((btn) => btn.classList.remove('nav-link-active'));
        }
    }, {
        threshold: 0.35,
    });
    sectionElements.forEach((section) => observer.observe(section));
}
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length)
        return;
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });
    revealElements.forEach((el) => observer.observe(el));
}
function bootstrap() {
    const root = document.getElementById('app-root');
    if (!root) {
        // eslint-disable-next-line no-console
        console.error('Missing root element #app-root');
        return;
    }
    root.innerHTML = createLayout();
    setupSmoothScrolling(root);
    setupMobileNav();
    setupActiveNavHighlight();
    setupScrollReveal();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
}
else {
    bootstrap();
}
