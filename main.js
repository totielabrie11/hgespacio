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
      duration: 500,
      dist: -80,
      shift: 10,
      padding: 5,
      numVisible: 6,
      indicators: true,
      noWrap: false

  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
    

//funcion para levantar el evento de cada cards y ejecute una funcion para cada una
function pintarDomJazz() {
  console.log("estoy entrando en la funcion que pinta el calendario en Jazz")
}
function pintarDomRegeton() {
  console.log("estoy entrando en la funcion que pinta el calendario en regeton")
}
function pintarDomKpop() {
  console.log("estoy entrando en la funcion que pinta el calendario en Kpop")
}
function pintarDomRock() {
  console.log("estoy entrando en la funcion que pinta el calendario en rock")
}
function pintarDomKickBM() {
  console.log("estoy entrando en la funcion que pinta el calendario en kickBoxing")
}
function pintarDomKickBF() {
  console.log("estoy entrando en la funcion que pinta el calendario en kickBoxingFemm")
}
function pintarDomTaeK() {
  console.log("estoy entrando en la funcion que pinta el calendario en Tae Kwondo")
}
function pintarDomLocalizada() {
  console.log("estoy entrando en la funcion que pinta el calendario en localizada")
}
function pintarDomAerobox() {
  console.log("estoy entrando en la funcion que pinta el calendario en AeroBox")
}
function pintarDomZumba() {
  console.log("estoy entrando en la funcion que pinta el calendario en zumba")
}
function pintarDomYoga() {
  console.log("estoy entrando en la funcion que pinta el calendario en yoga")
}
function pintarDomVisuales() {
  console.log("estoy entrando en la funcion que pinta el calendario en artes visuales")
}

window.onload = function(){
  const cardJ = document.getElementById("jazz");
  const cardR = document.getElementById("regeton");
  const cardK = document.getElementById("kpop");
  const cardRock = document.getElementById("Rock");
  const cardKBM = document.getElementById("KickBM");
  const cardKBF = document.getElementById("KickBF");
  const cardTK = document.getElementById("TaeK");
  const localizada = document.getElementById("localizada");
  const aerobox = document.getElementById("aerobox");
  const zumba = document.getElementById("zumba");
  const yoga = document.getElementById("yoga");
  const visuales = document.getElementById("visuales");

  cardJ.onclick = pintarDomJazz
  cardR.onclick = pintarDomRegeton
  cardK.onclick = pintarDomKpop
  cardRock.onclick = pintarDomRock
  cardKBM.onclick = pintarDomKickBM
  cardKBF.onclick = pintarDomKickBF
  cardTK.onclick = pintarDomTaeK
  localizada.onclick = pintarDomLocalizada
  aerobox.onclick = pintarDomAerobox
  zumba.onclick = pintarDomZumba
  yoga.onclick = pintarDomYoga
  visuales.onclick = pintarDomVisuales
}



