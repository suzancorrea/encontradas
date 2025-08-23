const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = "<div></div>";
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link, .footer-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const header = document.querySelector('.header') as HTMLElement;
          const headerHeight = header?.offsetHeight || 0;
          const targetPosition = (target as HTMLElement).offsetTop - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- INÍCIO DO CÓDIGO DO VÍDEO ---
  // Encontra o elemento do vídeo usando o ID
  const videoPlaceholder = document.querySelector<HTMLDivElement>("#video-placeholder");

  if (videoPlaceholder) {
    // Defina o ID do seu vídeo do YouTube aqui
    const videoId = 'ZzZdicEx60Y'; // <-- CONFIRME SE O ID ESTÁ CORRETO

    // Gera a URL da thumbnail de alta qualidade do YouTube
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

    // Define a thumbnail como imagem de fundo do placeholder
    videoPlaceholder.style.backgroundImage = `url('${thumbnailUrl}')`;

    // Adiciona o evento de clique
    videoPlaceholder.addEventListener('click', () => {
      // Cria o iframe do YouTube
      const iframe = document.createElement('iframe');
      
      // AQUI ESTÁ A CORREÇÃO FINAL: Usando o domínio 'youtube-nocookie.com'
      iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`);
      
      iframe.setAttribute('frameborder', '0');
      // Atributo 'allow' com as permissões essenciais para o vídeo funcionar
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', 'true');
      
      // Estilos para fazer o iframe preencher o container
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      // Limpa o placeholder (remove o botão de play e o texto)
      videoPlaceholder.innerHTML = '';
      // Adiciona o iframe do vídeo
      videoPlaceholder.appendChild(iframe);
    }, { once: true });
  }
  // --- FIM DO CÓDIGO DO VÍDEO ---

  // CTA buttons handlers
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-purchase');
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Aqui você pode integrar com um sistema de pagamento
      window.open('https://checkout.exemplo.com', '_blank');
    });
  });

  // Secondary button handler
  const secondaryButtons = document.querySelectorAll('.btn-secondary');
  secondaryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoSection = document.querySelector('.video-section');
      if (videoSection) {
        const header = document.querySelector('.header') as HTMLElement;
        const headerHeight = header?.offsetHeight || 0;
        const targetPosition = (videoSection as HTMLElement).offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header background on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header') as HTMLElement;
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
      }
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionElement = section as HTMLElement;
    sectionElement.style.opacity = '0';
    sectionElement.style.transform = 'translateY(30px)';
    sectionElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // FAQ interaction (if you want to make them expandable)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
});

// Add some CSS for expanded FAQ state
const style = document.createElement('style');
style.textContent = `
  .faq-item {
    cursor: pointer;
  }

  .faq-item.expanded {
    background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
    border-color: #f59e0b;
  }

  .faq-item:hover {
    transform: translateY(-2px);
  }
`;
document.head.appendChild(style);