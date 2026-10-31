// ?theme=dark | light | auto(기본: 시스템 설정 따라감)
(function () {
  var p = new URLSearchParams(location.search).get('theme') || 'auto';
  var dark = p === 'dark' || (p === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) document.documentElement.classList.add('dark');
})();
