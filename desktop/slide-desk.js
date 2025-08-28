// Duplica só via JS para continuidade, mantendo um HTML "limpo" (apenas uma lista)
  (function () {
    const track = document.getElementById('techTrack');
    if (!track) return;

    const children = Array.from(track.children);
    const frag = document.createDocumentFragment();

    children.forEach(node => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.classList.add('is-clone');
      frag.appendChild(clone);
    });

    track.appendChild(frag); // agora o track tem 2x o conteúdo; a animação move -50%
  })();