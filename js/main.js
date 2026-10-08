// Mobile menu toggle
function toggleMenu() {
  document.getElementById('navMenu')?.classList.toggle('max-md:right-0');
}

// Scroll animations
function animateOnScroll() {
  document.querySelectorAll('.feature-card, .service-card').forEach((el, i) => {
    const visible = el.getBoundingClientRect().top < window.innerHeight - 100;
    if (visible && !el.classList.contains('visible')) {
      setTimeout(() => {
        el.classList.add('visible');
        el.classList.remove('opacity-0', 'translate-y-10');
      }, i * 100);
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Header shrink on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.remove('py-4');
    header.classList.add('py-2', 'shadow-[0_5px_30px_rgba(35,36,132,0.15)]');
  } else {
    header.classList.add('py-4');
    header.classList.remove('py-2', 'shadow-[0_5px_30px_rgba(35,36,132,0.15)]');
  }
});

// Project filter
function filterProjects(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('bg-gradient-to-br','from-[#232484]','to-[#05ABF2]','text-white','border-transparent');
    b.classList.add('border-[#232484]','text-[#232484]');
  });
  if (btn) {
    btn.classList.add('bg-gradient-to-br','from-[#232484]','to-[#05ABF2]','text-white','border-transparent');
    btn.classList.remove('border-[#232484]','text-[#232484]');
  }

  document.querySelectorAll('.project-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8)';
      setTimeout(() => { card.style.display = 'none'; }, 300);
    }
  });
}

// Contact form
function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status?.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => status?.classList.add('hidden'), 4000);
}