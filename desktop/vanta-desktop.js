// Garante que o Vanta não “vaze” para outras partes da página
  (function(){
    const el = document.getElementById('vanta-desktop-second');
    if(!el) return;

    // Define cor de fundo base (igual ao Vanta) para blends suaves
    

     VANTA.DOTS({
      el: el,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      color2: 0xffffff,
      backgroundColor: 0x161ecf,
      size: 2.00,
      spacing: 63.00
    });

    // Boa prática: destruir ao sair (em SPAs)
    window.addEventListener('beforeunload', function(){
      if(effect && effect.destroy) effect.destroy();
    });
  })();



  