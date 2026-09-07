(() => {
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.documentElement.classList.add('motion');
 }
 const bar=document.querySelector('.progress');
 function progress(){const total=document.documentElement.scrollHeight-innerHeight;bar.style.width=(total>0?scrollY/total*100:0)+'%';}
 addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();

})();

(() => {
 const journey=document.getElementById('journey');
 if(!journey)return;
 const picker=journey.querySelector('.journey-airlines');
 const buttons=Array.from(journey.querySelectorAll('[data-airline]'));
 const panels=Array.from(journey.querySelectorAll('.journey-flight-panel'));
 if(!picker||!buttons.length||!panels.length)return;
 function selectAirline(name){
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.airline===name)));
  panels.forEach(panel=>panel.hidden=panel.id!=='flight-'+name);
 }
 picker.hidden=false;
 selectAirline('asiana');
 buttons.forEach(button=>button.addEventListener('click',()=>selectAirline(button.dataset.airline)));
})();
