/*--- Menu ---*/

((d) => {
	const $btnMenu = d.querySelector('.menu-btn');
	const $menu = d.querySelector('.menu');

	$btnMenu.addEventListener('click', (e) => {
		$btnMenu.firstElementChild.classList.toggle('none');
		$btnMenu.lastElementChild.classList.toggle('none');
		$menu.classList.toggle('menu-is-active');
	});

	d.addEventListener('click', (e) => {
		if (!e.target.matches('.menu a')) return false;

		$btnMenu.firstElementChild.classList.remove('none');
		$btnMenu.lastElementChild.classList.add('none');
		$menu.classList.remove('menu-is-active');
	});
})(document);

/*ContacForm*/

((d) => {
	const $form = d.querySelector('.contact-form'),
		$loader = d.querySelector('.contact-form-loader'),
		$response = d.querySelector('.contact-form-response');
	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		$loader.classList.remove('none');
		fetch('https://formsubmit.co/ajax/mvbri10@gmail.com', {
			method: 'POST',
			body: new FormData(e.target),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((json) => {
				console.log(json);
				location.hash = '#gracias';
				$form.reset();
			})
			.catch((err) => {
				console.log(err);
				let message =
					err.statusText ||
					'Ocurrió un error al enviar los comentarios, intenta otra vez';
				$response.querySelector(
					'h3'
				).innerHTML = `Error ${err.status}: $(message)`;
			})
			.finally(() => {
				$loader.classList.add('none');
				setTimeout(() => {
					location.hash = '#close';
				}, 3000);
			});
	});
})(document);

/**
 * Actived link
 */

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute('id');
			const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

			if (entry.isIntersecting) {
				menuLink.classList.add('active');
			} else {
				menuLink.classList.remove('active');
			}
		});
	},
	{ rootMargin: '-50% 0px -50% 0px' }
);

const navLinks = document.querySelectorAll(`.menu a[href^="#"]`);

navLinks.forEach((link) => {
	const hash = link.getAttribute('href');
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

/* Animación de titulo del banner - Efecto maquina de escribir. */
const heroTitle = document.querySelector('.hero-img-title');

const typewriter = (text, time = 200, etiqueta) => {
	let lettersArray = text.split('');
	heroTitle.innerHTML = '';
	let count = 0;

	const writing = setInterval(() => {
		heroTitle.innerHTML += lettersArray[count];
		count++;
		if (count == text.length) clearInterval(writing);
	}, time);
};

typewriter('Bienvenidos a mi sitio web', 130, heroTitle);
