const Global = (() => {

  const data = {
    buttonOpenMenu: document.querySelector("#main-menu"),
    buttonCloseMenu: document.querySelector("#menu-close"),
    mainMenu: document.querySelector(".header__menu")
  }

  const events = {
    onOpenMenu: () => {
      data.buttonOpenMenu.addEventListener("click", () => {
        data.mainMenu.classList.remove("hide")
      })
    },
    onCloseMenu: () => {
      data.buttonCloseMenu.addEventListener("click", () => {
        data.mainMenu.classList.add("hide")
      })
    }
  }

  const init = () => {
    events.onOpenMenu(),
    events.onCloseMenu()
  }

  return {init}
})();

document.addEventListener(
  'DOMContentLoaded',
  function () {
    Global.init();
  },
  false
);


$('.carousel-productos').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  mouseDrag:false,
  touchDrag:false,
  pullDrag: false,
  freeDrag: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


$('.carousel-clientes').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  mouseDrag:false,
  touchDrag:false,
  pullDrag: false,
  freeDrag: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



function despliegue(id) {
  setTimeout(() => {
      document
          .getElementById(id)
          .scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }, 500);
}

let animation_nav = document.querySelector('.menu-fixed');
let animation_start = document.querySelector('.start');

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;

  let height_animation = animation_start.offsetTop;
  if (height_animation < scrollTop) {
      animation_nav.style.position = 'fixed';
  } else {
      animation_nav.style.position = 'relative';
  }
}

window.addEventListener('scroll', showScroll);
