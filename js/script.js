$('.carousel-group').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '100px',
    arrows: true,
    responsive: [{
        breakpoint: 940,
        settings: {
            centerMode: false,
            centerPadding: '0',
        }
    }]
});