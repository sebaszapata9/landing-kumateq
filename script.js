const SITE_CONFIG = {
  whatsappNumber: "51930741767",
  contactEmail: "info@kumateq.com",
  demoUrl: "https://web-production-35fb24.up.railway.app/",
};

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const dialog = document.querySelector("[data-contact-dialog]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  primaryNav?.classList.toggle("is-open", !open);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  });
});

const openDialog = () => {
  if (!dialog) return;
  dialog.showModal();
  document.body.classList.add("dialog-open");
};

const closeDialog = () => {
  dialog?.close();
  document.body.classList.remove("dialog-open");
};

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openDialog();
  });
});

document.querySelector("[data-close-contact]")?.addEventListener("click", closeDialog);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const normalizePhone = (value) => value.replace(/\D/g, "");
const buildWhatsAppUrl = (message) => {
  const phone = normalizePhone(SITE_CONFIG.whatsappNumber);
  return phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
};

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = buildWhatsAppUrl("Hola, quisiera conversar sobre cómo mejorar la presencia digital de mi empresa.");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${SITE_CONFIG.contactEmail}`;
  link.textContent = SITE_CONFIG.contactEmail;
});

const demoLink = document.querySelector("[data-demo-link]");
if (demoLink) {
  if (SITE_CONFIG.demoUrl) {
    demoLink.href = SITE_CONFIG.demoUrl;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
  } else {
    demoLink.addEventListener("click", (event) => {
      event.preventDefault();
      openDialog();
    });
    demoLink.textContent = "Solicitar una demostración";
  }
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Hola, quisiera conversar con Kumateq sobre la presencia digital de mi empresa.",
    "",
    `Nombre: ${data.get("name")}`,
    `Empresa: ${data.get("company")}`,
    `Me gustaría mejorar: ${data.get("need")}`,
    data.get("message") ? `Contexto: ${data.get("message")}` : "",
  ].filter(Boolean).join("\n");

  if (!SITE_CONFIG.whatsappNumber) {
    formNote.textContent = "Configura el número de WhatsApp en script.js. Por ahora se abrirá WhatsApp para que elijas el contacto.";
    formNote.classList.add("is-warning");
  }

  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
