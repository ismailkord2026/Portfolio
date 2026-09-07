document.getElementById("year").textContent = new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.1});
document.querySelectorAll(".reveal,.card,.metric,figure,.logo-grid>div,.project-grid article").forEach(el=>{el.classList.add("reveal");observer.observe(el)});
function openLightbox(src){const box=document.getElementById("lightbox");document.getElementById("lightboxImg").src=src;box.classList.add("open");}
function closeLightbox(){document.getElementById("lightbox").classList.remove("open");}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});