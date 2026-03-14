// Curay — head.js
// Injects shared <head> tags into every page.
// Each page still keeps its own <title> and page-specific stylesheet.
// Load this as the FIRST script inside <head>.

(function () {
  // ── Charset & viewport (if not already set in HTML) ──
  // These are set directly in each HTML file — skip here.

  // ── Favicon ───────────────────────────────────────────
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = '/assets/favicon.svg';
  favicon.type = 'image/svg+xml';
  document.head.appendChild(favicon);

  // ── Google Fonts preconnect ───────────────────────────
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  // ── Google Fonts stylesheet ───────────────────────────
  const fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap';
  document.head.appendChild(fonts);

  // ── Global CSS ────────────────────────────────────────
  const globalCSS = document.createElement('link');
  globalCSS.rel = 'stylesheet';
  globalCSS.href = '/global.css';
  document.head.appendChild(globalCSS);
})();
