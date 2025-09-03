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



// ====== Inicialização do Vanta HALO no background ======
  (function () {
    if (!window.VANTA || !window.VANTA.HALO) return;

    var el = document.getElementById("vanta-hero");

    // Evita inicializar duas vezes (caso de navegações PJAX, etc.)
    if (el._vanta) { try { el._vanta.destroy(); } catch (e) {} }

    el._vanta = VANTA.HALO({
      el: el,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      amplitudeFactor: 3.00,
      xOffset: -0.04,
      yOffset: -0.02,
      size: 3.00
      // Você pode ajustar outras opções do HALO aqui se quiser
    });

    // Limpeza opcional caso o elemento seja removido
    window.addEventListener("beforeunload", function () {
      if (el && el._vanta) { try { el._vanta.destroy(); } catch (e) {} }
    });
  })();


