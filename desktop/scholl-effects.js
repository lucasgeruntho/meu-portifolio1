const boxes = document.querySelectorAll('.grid-desk');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 }); 

boxes.forEach(box => observer.observe(box));
