// Curay — footer.js
// Loads footer.html into every page that includes this script.
// Place footer.html and footer.js in the root of your repo.

fetch('/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-footer').innerHTML = html;
  });
