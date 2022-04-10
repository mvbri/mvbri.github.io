/*--- Menu ---*/

((d) => {
    const $btnMenu = d.querySelector('.menu-btn');
    const $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click', (e) =>{
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');
        $menu.classList.toggle('menu-is-active');
    });

    d.addEventListener('click', (e) => {
        if(!e.target.matches('.menu a')) 
            return false;
            
            $btnMenu.firstElementChild.classList.remove('none');
            $btnMenu.lastElementChild.classList.add('none');
            $menu.classList.remove('menu-is-active');    
    });

})(document);


// ((d) => {

// // switch(true) {
// //     case !location.hash:
// //         location.hash = "#inicio";
// //         let hashDefault = d.querySelector('.hash-default');
// //         hashDefault.classList.add('actived');
// // }

// if(!location.hash) {
//      let hashDefault = document.querySelector('.hash-default');
//      hashDefault.classList.add('actived');
// } else if (location.hash === "#inicio") {
//     let hashInicio = document.querySelector('.home-link');
//     let hashlinks = document.querySelectorAll('.link');
//     // hashlinks.map(link => {
//     //     link.classList.remove('actived');
//     // })
//     hashInicio.classList.add('actived');
// } else if (location.hash === "#acerca") {
//     let hashAcerca = document.querySelector('.acerca-link');
//     // hashlinks.map(link => {
//     //     link.classList.remove('actived');
//     // })
//     hashAcerca.classList.add('actived');
// }

// })(document);

/*ContacForm*/

((d) => {
    const $form = d.querySelector('.contact-form'),
        $loader= d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response');
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        $loader.classList.remove('none');
        fetch('https://formsubmit.co/ajax/mvbri10@gmail.com', {
            method: 'POST',
            body: new FormData(e.target), 
        }).then(res => (res.ok ? res.json(): Promise.reject(res)))
        .then((json) => {
            console.log(json);
            location.hash = '#gracias';
            $form.reset();
        })
        .catch((err) => {
            console.log(err);
            let message =
            err.statusText || 'Ocurrió un error al enviar los comentarios, intenta otra vez';
            $response.querySelector('h3').innerHTML = `Error ${err.status}: $(message)`;
        })
        .finally(() => {
            $loader.classList.add('none');
            setTimeout(() => {
                location.hash = '#close';
            }, 3000);
        });
    });
})(document);