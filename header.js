// Curay — header.js
// Loads header.html into every page that includes this script.
// Place header.html and header.js in the root of your repo.

fetch('/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;

    // Highlight the active nav link
    const links = document.querySelectorAll('#site-header .header-link');
    links.forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) {
        link.style.color = 'var(--ink)';
      }
    });
  });
