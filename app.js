// app.js - interaksi modal dan tanggal otomatis
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const yearEl = document.getElementById("year");
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function openModal() {
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // mobile nav toggle
  function toggleNav() {
    if (!siteNav) return;
    const isOpen = siteNav.classList.toggle("open");
    navToggle && navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  navToggle && navToggle.addEventListener("click", toggleNav);

  contactBtn && contactBtn.addEventListener("click", openModal);
  modalClose && modalClose.addEventListener("click", closeModal);
  modal &&
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

  // keyboard accessibility
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
