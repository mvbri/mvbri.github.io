<?php 
  $page_title = "BEEZ 💡 EMPATÍA DIGITAL👋";
  ?>
<!DOCTYPE html>
<html lang="es" class="home">
    <head>
        <?php include "_partials/head.php" ?>
    </head>
    <body>
        <?php include "_partials/header.php" ?>

        <div class="banner-blog">
            <div class="banner-blog__body">
                <div class="banner-blog__body-content">
                    <h1 class="banner-blog__content-title">Conoce<br>
                        mas de nosotros</h1>
                </div>
                <div class="banner-blog__img">
                    <img src="_private/img/ilustrations/img-banner-contactanos.svg" alt="">
                </div>
            </div>
        </div>
        <main class="site-main site-main-contactanos start">
            <section class="section-1-contactanos">
                <div class="title-deco-first">
                    <div class="img-deco"></div>
                    <h2 class="title-contactanos">Póngase en contacto<br>
                        con nosotros en dos pasos
                    </h2>
                </div>
                <div class="section-1-contactanos__content">
                    <img src="_private/img/contactanos-paso-1.svg" alt="">
                    <p class="section-1-contactanos__content-desc">
                        Ingresa tus datos escensiales para contactarnos
                    </p>
                    <form action="" class="content__formulario-contacto input-nombre">
                        <input
                            class="formulario-contacto__input"
                            type="text"
                            name=""
                            placeholder="Nombre completo*"
                            id="">
                        <input
                            class="formulario-contacto__input input-correo"
                            type="text"
                            name=""
                            placeholder="Correo electrónico*"
                            id="">
                        <button class="btn-siguiente" type="button" disabled>
                            <div class="btn-siguiente__img"></div>
                        </button>
                    </form>
                </div>
            </section>
            <figure>
                <img class="contactanos-img-destacada" src="_private/img/ilustrations/contactanos-destacada.svg" alt="">
            </figure>
        </main>

        <?php include "_partials/footer.php" ?>
        <?php include "_partials/scripts.php" ?>

    </body>
</html>