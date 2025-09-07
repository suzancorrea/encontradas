document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling para todos os links que começam com #
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute('href');

      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const targetPosition = (target as HTMLElement).offsetTop - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- CÓDIGO DO VÍDEO ---
  const videoPlaceholder = document.querySelector<HTMLDivElement>("#video-placeholder");
  if (videoPlaceholder) {
    const videoId = 'ZzZdicEx60Y';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    videoPlaceholder.style.backgroundImage = `url('${thumbnailUrl}')`;
    videoPlaceholder.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&mod