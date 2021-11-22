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


$("tr td").removeClass("pintarGrilla")

function pintarDomJazz() {

  $("tr td").removeClass("pintarGrilla")

  $( "#griVisual13" ).addClass( "pintarGrilla" );
  $( "#griVisual14" ).addClass( "pintarGrilla" );

}
function pintarDomRegeton() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual6" ).addClass( "pintarGrilla" );
  $( "#griVisual7" ).addClass( "pintarGrilla" );

}
function pintarDomKpop() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual15" ).addClass( "pintarGrilla" );
  $( "#griVisual16" ).addClass( "pintarGrilla" );

}
function pintarDomRock() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual17" ).addClass( "pintarGrilla" );

}
function pintarDomKickBM() {

  $("tr td").removeClass("pintarGrilla")

  $( "#griVisual18" ).addClass( "pintarGrilla" );
  $( "#griVisual19" ).addClass( "pintarGrilla" );

}
function pintarDomKickBF() {

  $("tr td").removeClass("pintarGrilla")
 
  $( "#griVisual18" ).addClass( "pintarGrilla" );
  $( "#griVisual19" ).addClass( "pintarGrilla" );

}
function pintarDomTaeK() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual20" ).addClass( "pintarGrilla" );
  $( "#griVisual21" ).addClass( "pintarGrilla" );

}
function pintarDomLocalizada() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual8" ).addClass( "pintarGrilla" );
  $( "#griVisual9" ).addClass( "pintarGrilla" );

}
function pintarDomAerobox() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual10" ).addClass( "pintarGrilla" );
  $( "#griVisual11" ).addClass( "pintarGrilla" );

}
function pintarDomZumba() {

  $("tr td").removeClass("pintarGrilla")
  
  $( "#griVisual12" ).addClass( "pintarGrilla" );

}
function pintarDomYoga() {

  $("tr td").removeClass("pintarGrilla")

  $( "#griVisual5" ).addClass( "pintarGrilla" );
}
function pintarDomVisuales() {

  $("tr td").removeClass("pintarGrilla")

  $( "#griVisual1" ).addClass( "pintarGrilla" );
  $( "#griVisual2" ).addClass( "pintarGrilla" );
  $( "#griVisual3" ).addClass( "pintarGrilla" );
  $( "#griVisual4" ).addClass( "pintarGrilla" );

};




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

 