const loader=document.getElementById('loader');setTimeout(()=>loader.classList.add('hide'),1250);
const header=document.getElementById('header'),progress=document.getElementById('progress');
function onScroll(){header.classList.toggle('scrolled',scrollY>40);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${Math.min(100,scrollY/h*100)}%`}
addEventListener('scroll',onScroll,{passive:true});onScroll();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const cursor=document.getElementById('cursor');addEventListener('pointermove',e=>{cursor.style.transform=`translate(${e.clientX-11}px,${e.clientY-11}px)`},{passive:true});
const mobile=document.getElementById('mobileNav');document.getElementById('menuButton').onclick=()=>mobile.classList.add('open');document.getElementById('closeMenu').onclick=()=>mobile.classList.remove('open');mobile.querySelectorAll('a').forEach(a=>a.onclick=()=>mobile.classList.remove('open'));
