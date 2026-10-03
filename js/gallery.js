(function () {
  var main = document.getElementById('main-image');
  var thumbs = document.querySelectorAll('.thumb');
  if (!main || !thumbs.length) return;

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      main.src = thumb.getAttribute('data-src');
      main.alt = thumb.getAttribute('data-alt');
      thumbs.forEach(function (t) {
        t.setAttribute('aria-pressed', t === thumb ? 'true' : 'false');
      });
    });
  });
})();
