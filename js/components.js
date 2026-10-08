/**
 * Auto-loads common header & footer into every page
 */

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed: ${file}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error('Component load error:', err);
    el.innerHTML = `<div class="p-5 text-center text-[#232484]">
      ⚠️ Could not load <b>${file}</b>. Please run via local server.<br>
      <code>python -m http.server 8000</code>
    </div>`;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header-placeholder', 'components/header.html');
  await loadComponent('footer-placeholder', 'components/footer.html');
  setActiveNav();
});

function setActiveNav() {
  const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const map = {
    index: 'home', about: 'about', services: 'services',
    projects: 'projects', contact: 'contact'
  };
  const active = map[current] || 'home';

  setTimeout(() => {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === active) {
        link.classList.add('active', 'text-[#05ABF2]', 'after:w-full');
      }
    });
  }, 150);
}