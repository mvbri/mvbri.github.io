$('.owl-carousel-blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        723: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

let column = document.querySelectorAll('.column');
let column_img_grid = document.querySelector('.section-1__wiew-img--grid');
let column_img_grid_disable = document.querySelector(
    '.section-1__wiew-img--grid-disable'
);
let column_img_list = document.querySelector('.section-1__wiew-img--list');
let column_img_list_enable = document.querySelector(
    '.section-1__wiew-img--list-enable'
);
let blog_container = document.querySelectorAll('.section-2__blog-container');

let deco_section_left = document.querySelectorAll('.deco-deco-section');
let deco_section_right = document.querySelectorAll('.deco-section-right');

let blog_news_img = document.querySelectorAll('.blog-news__img');
let bee_grid = document.querySelectorAll('.deco-bee--grid');
let bee_list = document.querySelectorAll('.deco-bee--list');

function list() {
    column_img_grid.style.display = 'none'
    column_img_grid_disable.style.display = 'block'

    column_img_list_enable.style.display = 'block'
    column_img_list.style.display = 'none'

    for (i = 0; i < bee_list.length; i++) {
        bee_list[i].style.display = 'block'
        bee_grid[i].style.display = 'none'
    }

    for (i = 0; i < column.length; i++) {
        column[i].style.width = '100%';
    }

    for (i = 0; i < blog_container.length; i++) {
        if (screen.width >= 927) {
            blog_container[i].style.gridAutoFlow = 'column';
            blog_container[i].style.gridTemplateColumns = '40% 60%';
            blog_container[i].style.gridGap = '1em';
        } else {
            blog_container[i].style.gridAutoFlow = 'row';
            blog_container[i].style.gridGap = '0';
        }
    }

    for (i = 0; i < blog_news_img.length; i++) {
        if (screen.width >= 1025) {
            blog_news_img[i].style.width = '51%';
        } else if (screen.width <= 381) {
            blog_news_img[i].style.width = '70%';
        } else if (screen.width <= 884) {
            blog_news_img[i].style.width = '59%';
        } else if (screen.width <= 1024) {
            blog_news_img[i].style.width = '54%';
        }
    }
}

function grid() {
    column_img_grid.style.display = 'block'
    column_img_grid_disable.style.display = 'none'

    column_img_list_enable.style.display = 'none'
    column_img_list.style.display = 'block'

    for (i = 0; i < bee_grid.length; i++) {
        bee_list[i].style.display = 'none'
        bee_grid[i].style.display = 'block'
    }

    for (i = 0; i < column.length; i++) {
        if (screen.width >= 1025) {
            column[i].style.width = '33%';
        } else {
            column[i].style.width = '50%';
        }
    }
    for (i = 0; i < blog_container.length; i++) {
        blog_container[i].style.gridAutoFlow = 'row';
        blog_container[i].style.gridTemplateColumns = 'initial';
    }

    for (i = 0; i < blog_news_img.length; i++) {
        if (screen.width > 1024) {
            blog_news_img[i].style.width = '91%';
        } else if (screen.width <= 1024 && screen.width > 768) {
            blog_news_img[i].style.width = '75%';
        } else {
            blog_news_img[i].style.width = '86%';
        }
    }

}
