window.onload = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content');  window.addEventListener('scroll', (e) => {
      let sectionID = '';    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
    
        if(pageYOffset >= (sectionTop - sectionHeight / 4)) {
          sectionID = section.getAttribute('id');
        }
      });    navItems.forEach(item => {
        item.classList.remove('active')     
         if(item.classList.contains(sectionID)) {
          item.classList.add('active');
        }
      })  });  navItems.forEach(item => {
      item.addEventListener('click', () => {
        const sectionId = item.classList[1];
        document.querySelector(`#${sectionId}`).scrollIntoView({ block: 'start', behavior: 'smooth'});
      })
    })}


//Activacion del carousel
document.addEventListener('DOMContentLoaded', ()=>{
  const elementosCarousel = document.querySelectorAll('.carousel')
  M.Carousel.init(elementosCarousel, {
      duration: 1000,
      dist: -80,
      shift: 10,
      padding: 5,
      numVisible: 6,
      indicators: true,
      noWrap: true

  });
});


