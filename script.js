// ===== Settings: to get real email delivery, paste a form endpoint here =====
// e.g. "https://formspree.io/f/xxxxxxx". Leave empty to use the mailto fallback.
const FORM_ENDPOINT = "";
const MY_EMAIL = "mohammadyusuf.ka509@gmail.com";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// Footer year
$("#yr").textContent = new Date().getFullYear();

// Mobile menu
const burger = $("#burger"), links = $("#links");
function setMenu(open) {
  links.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  $("i", burger).className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Nav background + back-to-top button on scroll
const nav = $("#nav"), backToTop = $("#top");
function onScroll() {
  nav.classList.toggle("solid", scrollY > 20);
  backToTop.classList.toggle("show", scrollY > 600);
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
backToTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Active nav link highlighting
const navLinks = $$(".links a");
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

// Scroll reveal (section titles, cards, and blocks)
const rev = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); }
}), { threshold: .12 });
$$(".sec .title, .card, .about, .stats, .contact").forEach(el => { el.classList.add("reveal"); rev.observe(el); });

// Project filters
$$(".chip").forEach(chip => chip.addEventListener("click", () => {
  $$(".chip").forEach(c => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); }); chip.classList.add("active"); chip.setAttribute("aria-pressed", "true");
  const f = chip.dataset.f;
  $$(".proj").forEach(p => p.classList.toggle("hide", f !== "all" && !p.dataset.c.split(" ").includes(f)));
}));

// Contact form: validation + send
const form = $("#form"), status = $("#status");
const rules = {
  name: v => v.trim().length >= 2 || "Enter your name (at least 2 characters).",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address, like name@example.com.",
  subject: v => v.trim().length >= 3 || "Enter a subject (at least 3 characters).",
  message: v => v.trim().length >= 10 || "Write a message of at least 10 characters."
};
function check(id) {
  const el = $("#" + id), r = rules[id](el.value);
  el.classList.toggle("bad", r !== true); el.setAttribute("aria-invalid", r !== true);
  $("#e-" + id).textContent = r === true ? "" : r;
  return r === true;
}
Object.keys(rules).forEach(id => $("#" + id).addEventListener("blur", () => check(id)));
form.addEventListener("submit", async e => {
  e.preventDefault(); status.textContent = "";
  const ok = Object.keys(rules).map(check).every(Boolean);
  if (!ok) { status.style.color = "#ff8a9b"; status.textContent = "Fix the highlighted fields and try again."; return; }
  const data = Object.fromEntries(new FormData(form));
  status.style.color = "#6ee7a7";
  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      form.reset(); status.textContent = "Message sent. Thank you!";
    } catch { status.style.color = "#ff8a9b"; status.textContent = "Sending failed. Email me directly at " + MY_EMAIL + "."; }
  } else {
    // Fallback: open the visitor's email app with the message filled in
    location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + "\n\n" + data.name + " (" + data.email + ")")}`;
    status.textContent = "Opening your email app to send this message.";
  }
});
