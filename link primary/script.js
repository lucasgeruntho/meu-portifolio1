// Sempre iniciar ESCURO (sem ler/gravar preferências)
    const root = document.documentElement; // <html>
    root.classList.remove('theme-light');  // garante escuro na primeira carga

    // Alternância manual claro/escuro (sem persistência)
    const btnTheme = document.getElementById('toggleTheme');
    const iconTheme = document.getElementById('themeIcon');
    const textTheme = document.getElementById('themeText');

    function updateThemeLabel(){
      const light = root.classList.contains('theme-light');
      iconTheme.textContent = light ? '🌞' : '🌙';
      textTheme.textContent = light ? 'Modo claro' : 'Modo escuro';
      btnTheme.setAttribute('aria-pressed', String(!light));
    }
    updateThemeLabel();

    btnTheme.addEventListener('click', ()=>{
      root.classList.toggle('theme-light'); // liga/desliga claro; escuro é padrão
      updateThemeLabel();
    });

    // Compartilhar / copiar URL
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', async ()=>{
      try{
        const data = { title: document.title, text: 'Confere meus links 👇', url: location.href };
        if(navigator.share){ await navigator.share(data) }
        else { await navigator.clipboard.writeText(location.href); shareBtn.textContent='Link copiado!'; setTimeout(()=>shareBtn.textContent='Compartilhar',1200) }
      }catch(e){ console.error(e) }
    });

    // Rodapé utilidades
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('copyLink').addEventListener('click', async (e)=>{
      e.preventDefault();
      try{ await navigator.clipboard.writeText(location.href); e.target.textContent='Copiado ✔'; setTimeout(()=>e.target.textContent='Copiar URL',1200) }catch{}
    });

    // Respeitar "reduzir movimento"
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      document.querySelectorAll('.link, .social a, .btn').forEach(el=> el.style.transition='none');
    }