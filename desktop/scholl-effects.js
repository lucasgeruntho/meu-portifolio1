// abertura do primary grid ideias

const primaryideias = document.querySelectorAll('.publicacao');

const primarydesk = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 }); 

primaryideias.forEach(box => primarydesk.observe(box));


// abertura do segundo grid 
const second = document.querySelectorAll('.ideias-second-desktop');

const observar = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shoow');
    }
  });
}, { threshold: 0.4 }); 

second.forEach(box => observar.observe(box));








const boxes = document.querySelectorAll('.grid-desk');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 }); 

boxes.forEach(box => observer.observe(box));


