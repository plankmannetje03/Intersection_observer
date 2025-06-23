const content = document.getElementById('content');
const trigger = document.querySelector('.trigger');
let count = 4;


const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      sectionObserver.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1
});

function loadMore() {
  for (let i = 0; i < 3; i++) {
    const section = document.createElement('section');
    section.className = 'fill';
    section.textContent = `Sectie ${count++}`;
    content.insertBefore(section, trigger);
    sectionObserver.observe(section);
  }
}


const infiniteScrollObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMore();
  }
}, {
  rootMargin: '200px'
});

infiniteScrollObserver.observe(trigger);


document.querySelectorAll('.fill').forEach(section => sectionObserver.observe(section));

