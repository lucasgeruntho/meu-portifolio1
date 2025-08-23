const btn = document.querySelector('.whatsapp-btn');
  const borda = document.querySelector('.bordinha-2');

  if (btn && borda) {
    const on = () => borda.classList.add('hover');
    const off = () => borda.classList.remove('hover');

    btn.addEventListener('mouseenter', on);
    btn.addEventListener('mouseleave', off);
    btn.addEventListener('focus', on);
    btn.addEventListener('blur', off);
    // suporte em mobile
    btn.addEventListener('touchstart', on, {passive: true});
    btn.addEventListener('touchend', off);
  }