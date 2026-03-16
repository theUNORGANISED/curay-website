// Curay — header/header.js
// Reference in pages as: <script src="/header/header.js"></script>

fetch('/header/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;

    // ── Inject overlay element ───────────────
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    overlay.id = 'menuOverlay';
    document.body.appendChild(overlay);

    // ── Active link highlighting ─────────────
    const allLinks = document.querySelectorAll(
      '#site-header .header-link, #site-header .mobile-link'
    );
    allLinks.forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('active');
        link.style.color = 'var(--ink)';
      }
    });

    // ── Burger menu toggle ───────────────────
    const burger     = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    function openMenu() {
      burger.classList.add('open');
      mobileMenu.classList.add('open');
      overlay.classList.add('open');
      document.body.classList.add('menu-open');
      burger.setAttribute('aria-expanded', true);
    }

    function closeMenu() {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      overlay.classList.remove('open');
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', false);
    }

    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        burger.classList.contains('open') ? closeMenu() : openMenu();
      });

      // Close when a link is tapped
      mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Close when overlay is tapped
      overlay.addEventListener('click', closeMenu);
    }
  });
