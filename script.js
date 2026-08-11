/* =========================================================
   DATA — EDIT DI SINI SAJA
   =========================================================
   Untuk menambah proyek baru: salin (copy-paste) satu objek
   di dalam array PROJECTS di bawah, lalu ubah isinya.
   Tidak perlu mengubah index.html atau styles.css.

   Field:
   - title       : nama proyek
   - period      : rentang waktu pengerjaan, contoh "Jul 2025 – Mei 2026"
   - category    : label singkat di pojok gambar, contoh "Web App", "Machine Learning"
   - description : 1–2 kalimat ringkas tentang proyek
   - tech        : array teknologi yang dipakai, contoh ["React", "Node.js"]
   - highlight   : (opsional) angka/skor pencapaian, contoh "94.17% akurasi". Kosongkan "" jika tidak ada.
   - image       : (opsional) path ke gambar/screenshot proyek, contoh "assets/proyek-1.jpg".
                   Kosongkan "" untuk memakai placeholder otomatis.
   - links.demo  : URL demo/live site. Kosongkan "" jika belum ada — tombol akan otomatis nonaktif.
   - links.repo  : URL kode sumber (GitHub, dst). Kosongkan "" jika belum ada.
   ========================================================= */

const PROJECTS = [
    {
    title: "Klasifikasi Penyakit Daun Pepaya (CNN)",
    period: "Jul 2025 – Mei 2026",
    category: "Machine Learning",
    description:
      "Aplikasi web yang mengintegrasikan model CNN EfficientNetB0 untuk mendeteksi penyakit daun pepaya secara real-time, lengkap dengan endpoint API dan tampilan hasil diagnosis interaktif.",
    tech: ["Python", "Flask", "EfficientNetB0", "REST API", "JavaScript"],
    highlight: "94.17% akurasi",
    image: "assets/papayavision-full.png",
    links: { demo: "", repo: "" }
  },
    {
    title: "Rino Rent Car — Dashboard Admin Rental Mobil",
    period: "april 2024 – Agu 2024",
    category: "Web App",
    description:
      "Dashboard admin untuk manajemen rental mobil dengan fitur booking real-time, kalkulasi otomatis harga sewa berdasarkan durasi dan diskon sopir, serta manajemen unit kendaraan yang terintegrasi dengan REST API.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST API"],
    highlight: "CRUD booking real-time",
    image: "assets/mpti-rent-car-aesthetic.png",
    links: { demo: "", repo: "" }
    },
  {
    title: "Company Profile — PT. Duta Madinah Kubah",
    period: "Jun 2025 – Agu 2025",
    category: "Web App",
    description:
      "Aplikasi company profile berarsitektur MVC dengan fitur CRUD penuh untuk manajemen konten dan portofolio perusahaan, serta autentikasi admin yang aman.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Alpine.js"],
    highlight: "",
    image: "assets/duta-madinah-kubah-4-gambar.png",
    links: { demo: "", repo: "" }
  },

  // Contoh templat kosong — hapus komentar di bawah dan isi untuk menambah proyek baru:
  // {
  //   title: "Nama Proyek Baru",
  //   period: "Bulan Tahun – Bulan Tahun",
  //   category: "Web App",
  //   description: "Deskripsi singkat proyek dalam satu atau dua kalimat.",
  //   tech: ["Teknologi1", "Teknologi2"],
  //   highlight: "",
  //   image: "",
  //   links: { demo: "https://...", repo: "https://github.com/..." }
  // },
];

/* =========================================================
   DATA — PENGALAMAN
   =========================================================
   Untuk menambah pengalaman baru: salin (copy-paste) satu objek
   di dalam array EXPERIENCE di bawah, lalu ubah isinya.
   Urutan array = urutan tampil (paling atas = paling baru).
   Tidak perlu mengubah index.html atau styles.css.

   Field:
   - period      : rentang waktu, contoh "Mar 2026 — Apr 2026"
   - role        : jabatan/posisi
   - org         : nama organisasi/perusahaan, contoh "DJKA Kemenhub, Yogyakarta"
   - description : 1–2 kalimat ringkas tentang tanggung jawab/pencapaian
   ========================================================= */

const EXPERIENCE = [
  {
    period: "Mar 2026 — Apr 2026",
    role: "Staff Administrasi",
    org: "DJKA Kemenhub, Yogyakarta",
    description:
      "Mengelola dan mengarsipkan data customer & kendaraan, administrasi pendaftaran, serta menyusun laporan harian operasional."
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Web Developer Intern",
    org: "PT. Duta Madinah Kubah, Trenggalek",
    description:
      "Membangun aplikasi company profile berbasis Laravel (MVC) lengkap dengan CRUD, autentikasi admin, dan deployment ke shared hosting."
  },
  {
    period: "Sep 2024 — Oct 2024",
    role: "Backend Developer",
    org: "Proyek MPTI — Rent Car Dashboard",
    description:
      "Mengembangkan REST API untuk manajemen data booking dan unit kendaraan, mencakup logika kalkulasi otomatis harga sewa berdasarkan durasi dan diskon sopir, serta integrasi endpoint dengan sistem frontend."
},

  // Contoh templat kosong — hapus komentar di bawah dan isi untuk menambah pengalaman baru:
  // {
  //   period: "Bulan Tahun — Bulan Tahun",
  //   role: "Nama Posisi",
  //   org: "Nama Organisasi, Kota",
  //   description: "Deskripsi singkat tanggung jawab atau pencapaian."
  // },
];

/* Kosongkan string di bawah untuk menyembunyikan tautan yang belum ada di footer/kontak. */
const SOCIAL_LINKS = {
  github: "",
  linkedin: ""
};

const CONTACT = {
  email: "dwaxx12@gmail.com",
  phone: "+62 813-2918-7077",
  phoneHref: "+6281329187077",
  location: "Yogyakarta, Indonesia"
};

/* =========================================================
   RENDER: PROJECTS
   ========================================================= */
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  if (PROJECTS.length === 0) {
    grid.innerHTML =
      '<p class="project-empty">Proyek akan segera ditambahkan di sini.</p>';
    return;
  }

  grid.innerHTML = PROJECTS.map((p) => {
    const techItems = p.tech
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("");

    const demoLink = p.links && p.links.demo
      ? `<a href="${escapeAttr(p.links.demo)}" target="_blank" rel="noopener">Demo ↗</a>`
      : `<span class="is-disabled">Demo segera hadir</span>`;

    const repoLink = p.links && p.links.repo
      ? `<a href="${escapeAttr(p.links.repo)}" target="_blank" rel="noopener">Kode ↗</a>`
      : "";

    const media = p.image
      ? `<img src="${escapeAttr(p.image)}" alt="Tangkapan layar ${escapeAttr(p.title)}">`
      : "";

    const highlightPill = p.highlight
      ? `<span class="tag-pill" style="position:relative;z-index:1;margin-left:8px;">${escapeHtml(p.highlight)}</span>`
      : "";

    return `
      <article class="project-card">
        <div class="project-media bracket-frame">
          <i class="corner corner-tr" aria-hidden="true"></i>
          <i class="corner corner-bl" aria-hidden="true"></i>
          ${media}
          <span class="tag-pill project-category">${escapeHtml(p.category || "Proyek")}</span>
          ${highlightPill}
        </div>
        <div class="project-body">
          <div class="project-top-row">
            <h3>${escapeHtml(p.title)}</h3>
          </div>
          <p class="project-period">${escapeHtml(p.period || "")}</p>
          <p>${escapeHtml(p.description || "")}</p>
          <ul class="project-tech">${techItems}</ul>
          <div class="project-links">
            ${demoLink}
            ${repoLink}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* =========================================================
   RENDER: EXPERIENCE (timeline)
   ========================================================= */
function renderExperience() {
  const list = document.getElementById("timeline");
  if (!list) return;

  if (EXPERIENCE.length === 0) {
    list.innerHTML = '<p class="project-empty">Pengalaman akan segera ditambahkan di sini.</p>';
    return;
  }

  list.innerHTML = EXPERIENCE.map((exp) => `
    <li class="timeline-item">
      <div class="timeline-date">${escapeHtml(exp.period || "")}</div>
      <div class="timeline-content">
        <h3>${escapeHtml(exp.role || "")}</h3>
        <p class="timeline-org">${escapeHtml(exp.org || "")}</p>
        <p>${escapeHtml(exp.description || "")}</p>
      </div>
    </li>
  `).join("");
}

/* =========================================================
   RENDER: CONTACT LINKS
   ========================================================= */
function renderContact() {
  const wrap = document.getElementById("contact-links");
  if (!wrap) return;

  const items = [];

  if (CONTACT.email) {
    items.push(`
      <a class="contact-link" href="mailto:${escapeAttr(CONTACT.email)}">
        ${iconMail()} ${escapeHtml(CONTACT.email)}
      </a>`);
  }
  if (CONTACT.phone) {
    items.push(`
      <a class="contact-link" href="tel:${escapeAttr(CONTACT.phoneHref || CONTACT.phone)}">
        ${iconPhone()} ${escapeHtml(CONTACT.phone)}
      </a>`);
  }
  if (CONTACT.location) {
    items.push(`
      <span class="contact-link" style="cursor:default;">
        ${iconPin()} ${escapeHtml(CONTACT.location)}
      </span>`);
  }
  if (SOCIAL_LINKS.github) {
    items.push(`
      <a class="contact-link" href="${escapeAttr(SOCIAL_LINKS.github)}" target="_blank" rel="noopener">
        ${iconGithub()} GitHub
      </a>`);
  }
  if (SOCIAL_LINKS.linkedin) {
    items.push(`
      <a class="contact-link" href="${escapeAttr(SOCIAL_LINKS.linkedin)}" target="_blank" rel="noopener">
        ${iconLinkedin()} LinkedIn
      </a>`);
  }

  wrap.innerHTML = items.join("");
}

/* =========================================================
   ICONS (inline SVG, no external dependency)
   ========================================================= */
function iconMail(){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`; }
function iconPhone(){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>`; }
function iconPin(){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`; }
function iconGithub(){ return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`; }
function iconLinkedin(){ return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.48V21H3.4V8.75Zm6.2 0h3.33v1.68h.05c.46-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.48v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9.6V8.75Z"/></svg>`; }

/* =========================================================
   UTIL
   ========================================================= */
function escapeHtml(str){
  const safe = (str === undefined || str === null) ? "" : str;
  return String(safe).replace(/[&<>"']/g, (c) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[c]));
}
function escapeAttr(str){ return escapeHtml(str); }

/* =========================================================
   PROJECT CAROUSEL (mobile: geser / klik panah kiri-kanan)
   ========================================================= */
function initProjectCarousel(){
  const grid = document.getElementById("project-grid");
  const prevBtn = document.getElementById("project-prev");
  const nextBtn = document.getElementById("project-next");
  const dotsWrap = document.getElementById("project-dots");
  if (!grid || !prevBtn || !nextBtn || !dotsWrap) return;

  const getCards = () => Array.prototype.slice.call(grid.children);

  function buildDots(){
    const cards = getCards();
    dotsWrap.innerHTML = cards
      .map((_, i) => `<button class="carousel-dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Ke proyek ${i + 1}"></button>`)
      .join("");
  }

  function getActiveIndex(){
    const cards = getCards();
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - grid.scrollLeft);
      if (dist < minDist){ minDist = dist; closest = i; }
    });
    return closest;
  }

  function scrollToIndex(i){
    const cards = getCards();
    const clamped = Math.max(0, Math.min(i, cards.length - 1));
    const card = cards[clamped];
    if (!card) return;
    grid.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }

  function updateUI(){
    const cards = getCards();
    const idx = getActiveIndex();
    Array.prototype.forEach.call(dotsWrap.children, (dot, i) => {
      dot.classList.toggle("is-active", i === idx);
    });
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= cards.length - 1;
  }

  buildDots();
  updateUI();

  prevBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() - 1));
  nextBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() + 1));

  dotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".carousel-dot");
    if (!dot) return;
    scrollToIndex(Number(dot.dataset.index));
  });

  let rafId = null;
  grid.addEventListener("scroll", () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateUI);
  }, { passive: true });

  window.addEventListener("resize", updateUI);
}

/* =========================================================
   NAV TOGGLE (mobile)
   ========================================================= */
function initNav(){
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
    document.body.classList.toggle("nav-open", isOpen);
  });

  Array.prototype.forEach.call(nav.querySelectorAll("a"), (link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
      document.body.classList.remove("nav-open");
    });
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    Array.prototype.forEach.call(items, (el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  Array.prototype.forEach.call(items, (el) => observer.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
  renderContact();
  initNav();
  initReveal();
  initProjectCarousel();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});