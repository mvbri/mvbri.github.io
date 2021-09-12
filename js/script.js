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


((d) => {
    let $linkActived = d.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            
            let windowHeight = scrollHeight - clientHeight;
            let porcentaje = scrollTop / windowHeight * 100;
            
            let $homeLink = d.querySelector('.home-link');
            let $acercaLink = d.querySelector('.acerca-link');
            let $servicesLink = d.querySelector('.services-link');
            let $portfolioLink = d.querySelector('.portfolio-link');
            let $contanctLink = d.querySelector('.contanct-link');
            
            
            if(porcentaje >= 0 && porcentaje < 20) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }

                $homeLink.classList.add('actived');

                location.hash = '#inicio';
            } else if (porcentaje >= 20 && porcentaje < 40) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }

                $acercaLink.classList.add('actived');

                location.hash = '#acerca';
            } else if(porcentaje >= 40 && porcentaje < 60) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }

                $servicesLink.classList.add('actived');

                location.hash = '#servicios';
            } else if (porcentaje >= 60 && porcentaje < 80) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }

                $portfolioLink.classList.add('actived');

                location.hash = '#portafolio';
            } else if(porcentaje >= 80 && porcentaje < 100) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }

                $contanctLink.classList.add('actived');

                location.hash = '#contacto';
            }
    });


    if(!location.hash) {
        location.hash = "#home";
        let hashDefault = document.querySelector('.hash-default');
        hashDefault.classList.add('actived');
    }

    for(i = 0; i < $linkActived.length; i++) {

        $linkActived[i].addEventListener('click', (e) => {

            location.hash = e.target.getAttribute('href');

            if(location.hash == e.target.getAttribute('href')) {
                for(i = 0; i < $linkActived.length; i++) {
                    $linkActived[i].classList.remove('actived');
                }
                
                e.preventDefault();
                e.target.classList.add('actived');
            } 
        });
    }


})(document);

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