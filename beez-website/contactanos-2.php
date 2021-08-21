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
                    <img src="_private/img/contactanos-paso-2.svg" alt="">
                    <p class="section-1-contactanos__content-desc">
                        Ingresa tu consulta y comentario para finalizsar y enviar.
                    </p>
                    <form action="" class="content__formulario-contacto">
                        <input
                            class="formulario-contacto__input input-consulta formulario-contacto__input--2"
                            type="text"
                            name=""
                            placeholder="¿Cúal es tu consulta?"
                            id="">
                        <input
                            class="formulario-contacto__input input-comentarios formulario-contacto__input--2"
                            type="text"
                            name=""
                            placeholder="Déjanos tus comentarios sobre la consulta a realizar"
                            id="">
                        <button class="btn-siguiente-disable" type="submit">
                            <div class="btn-siguiente__img"></div>
                        </button>
                        <button class="btn-quiero-enviarlo" type="submit">
                            <div class="btn-siguiente__img"></div>
                        </button>
                    </form>
                </div>
            </section>
            <figure>
                <img
                    class="contactanos-img-destacada"
                    src="_private/img/ilustrations/contactanos-destacada.svg"
                    alt="">
            </figure>
        </main>

        <?php include "_partials/footer.php" ?>
        <?php include "_partials/scripts.php" ?>

    </body>
</html>