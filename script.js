const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();


const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

// O navegador só começa a tocar depois de o visitante carregar em Ouvir.
musicToggle.addEventListener('click', async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicToggle.textContent = '❚❚ Pausar';
      musicToggle.setAttribute('aria-pressed', 'true');
    } catch (error) {
      musicToggle.textContent = 'Não foi possível tocar';
      console.error('Erro ao reproduzir o áudio:', error);
    }
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = '▶ Ouvir';
    musicToggle.setAttribute('aria-pressed', 'false');
  }
});

backgroundMusic.addEventListener('ended', () => {
  musicToggle.textContent = '▶ Ouvir';
  musicToggle.setAttribute('aria-pressed', 'false');
});
