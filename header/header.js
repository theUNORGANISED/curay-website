// Curay — header/header.js
// Reference in pages as: <script src="/header/header.js"></script>

fetch('/header/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;

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

    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
      });

      mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          burger.classList.remove('open');
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', false);
        });
      });

      document.addEventListener('click', e => {
        if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
          burger.classList.remove('open');
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', false);
        }
      });
    }
  });
