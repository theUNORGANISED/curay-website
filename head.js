// Curay — head.js
// Injects shared <head> tags into every page.
// Reference as: <script src="/head.js"></script>

(function () {
  // ── Favicon ───────────────────────────────
  const favicon = document.createElement('link');
  favicon.rel   = 'icon';
  favicon.href  = '/assets/favicon.svg';
  favicon.type  = 'image/svg+xml';
  document.head.appendChild(favicon);

  // ── Google Fonts preconnect ───────────────
  const pre1 = document.createElement('link');
  pre1.rel = 'preconnect';
  pre1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(pre1);

  const pre2 = document.createElement('link');
  pre2.rel = 'preconnect';
  pre2.href = 'https://fonts.gstatic.com';
  pre2.crossOrigin = 'anonymous';
  document.head.appendChild(pre2);

 // ── Google Fonts ──────────────────────────
const fonts = document.createElement('link');
fonts.rel  = 'stylesheet';
fonts.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500';
document.head.appendChild(fonts);

  // ── Global CSS ────────────────────────────
  const globalCSS = document.createElement('link');
  globalCSS.rel  = 'stylesheet';
  globalCSS.href = '/global.css';
  document.head.appendChild(globalCSS);

  // ── Header / burger CSS ───────────────────
  const headerCSS = document.createElement('link');
  headerCSS.rel  = 'stylesheet';
  headerCSS.href = '/header/styles.css';
  document.head.appendChild(headerCSS);
})();
