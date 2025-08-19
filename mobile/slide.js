const track = document.getElementById("track");

// duplica os itens para preencher o fluxo
track.innerHTML += track.innerHTML;

let offset = 0;
const speed = 0.5; // pixels por frame (~60px/s)

function animate() {
  offset -= speed;
  const resetPoint = track.scrollWidth / 2;
  
  // cálculo modular → nunca reseta, só reaproveita a posição
  const x = offset % resetPoint;
  
  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}
animate();