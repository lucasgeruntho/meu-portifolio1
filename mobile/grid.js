/* ===== Animação no Scroll ===== */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".incg-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("incg-show");
        observer.unobserve(entry.target); // anima só 1x
      }
    });
  }, { threshold: 0.2 }); // dispara quando 20% do card aparece

  cards.forEach(card => observer.observe(card));
});