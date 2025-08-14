// Typing animation with blinking cursor
const typedEl = document.getElementById('typed');
const phrases = ["Chalani Asanka", "Web Developer", "Designer"];
let pIndex = 0,
  charIndex = 0,
  forward = true;

function typeLoop() {
  if (!typedEl) return;

  const current = phrases[pIndex];

  if (forward) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      forward = false;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      forward = true;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, forward ? 80 : 20);
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();

  // Smooth scrolling for navbar links
  document.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Contact form submission handler with validation and success feedback
function handleSubmit(e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Demo alert - replace with real submission logic if desired
  alert(`Thanks for your message, ${name}! I'll get back to you soon.`);

  e.target.reset();
  return false;
}

function validateEmail(email) {
  // Simple email validation regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
