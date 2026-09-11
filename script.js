document.documentElement.classList.add('motion-ready');

const cards=[...document.querySelectorAll('.channel-card')];
cards.forEach(card=>{
  const activate=()=>{cards.forEach(item=>item.classList.remove('active'));card.classList.add('active')};
  card.addEventListener('click',activate);
  card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();activate()}});
});

const animated=document.querySelectorAll('.context-card,.channel-card,.journey-step,.contribution,.engine-map,.launch-plan>div');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  });
},{threshold:.12});
animated.forEach(element=>observer.observe(element));

