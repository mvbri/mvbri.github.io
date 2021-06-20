

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop:true,
        autoWidth:true,
        nav: true,
        navText: ["<img src='img/flecha-carousel-izquierda.svg'>", "<img src='img/flecha-carousel-derecha.svg'>"],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        662:{
            items:1,
            nav:true
        }
    }
    
   });
  });


  $(document).ready(main);

  var contador= 1;


  function main() {
      $('.menu-movil').click( () => {
          var menu_movil_desplegable = $('.menu-principal-movil-desplegable');
          var menu_principal_movil = $('.menu-principal-movil');

          if(contador == 1) {
            menu_movil_desplegable.animate({left: '0'});
            menu_principal_movil.animate({top: '-200%'});
              contador = 0
          } else {
            menu_movil_desplegable.animate({left: '-100%'});
            menu_principal_movil.animate({top: '4%'});
            contador = 1    
          }
      });
  }

