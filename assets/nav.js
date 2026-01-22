
(function(){
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    if(href.endsWith(path)) a.classList.add('active');
  });
})();
