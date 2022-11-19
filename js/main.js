$(function() {
    /* Настройки гамбургера */
    $('.nav__hamurger').click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	    $('.nav__link_1').slideToggle(); // плавно скрываем, или отображаем все элементы <div>
        $('.nav__hamurger span:nth-child(1)').toggleClass('first'); // добавляем класс для анимации с hover
        $('.nav__hamurger span:nth-child(2)').toggleClass('middle');
        $('.nav__hamurger span:nth-child(3)').toggleClass('last');
    });

    /* Настройки слайдера */
    $('.interface__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review__item',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.review__item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.review',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // focus на карточке

    $('.plan__btn_ind').click(function(){
        $('.plan__btn_ind').toggleClass('planClick');
        $('.plan__card_1').toggleClass('active');
    });

    $('.plan__btn_com').click(function(){
        $('.plan__btn_com').toggleClass('planClick');
        $('.plan__card_2').toggleClass('active');
    });

    /* Обработчик события, при нажатии на одну кнопку, с другой удаляются добавленные классы со стилями */

    $(".plan__btn_ind").on("click", function () {
        $(".plan__btn_com").not($(this)).removeClass("planClick");
        $(".plan__card_2").not($(this)).removeClass("active");
    });

    $(".plan__btn_com").on("click", function () {
        $(".plan__btn_ind").not($(this)).removeClass("planClick");
        $(".plan__card_1").not($(this)).removeClass("active");
    });
});
