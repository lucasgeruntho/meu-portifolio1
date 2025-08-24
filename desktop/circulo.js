window.addEventListener('scroll', function() {
  const circulo = document.querySelector('.circulo-desk span');
  const rotation = window.scrollY % 360;
  circulo.style.transform = `rotate(${rotation}deg)`;
});
