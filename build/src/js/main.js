$(document).ready(function() {

    new WOW().init();

    $('#one').hover(function() {
        $('.rocket').toggleClass('visible', 'unvisible')
    })
    $('#two').hover(function() {
        $('.ielts').toggleClass('visible', 'unvisible')
    })

    $('.course-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                mobileFirst: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: false
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: true
            }
        }]
    });

    $('.comment-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });


    $('input').focus(function() {
        $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })


    $('.content').readmore({
        speed: 1500,
        moreLink: '<a href="#" class="learn-more">Learn more <span><img src="src/img/icons/test-chevron-down.png"></span></a>',
        lessLink: '<a href="#" class="learn-less">Learn more <span><img src="src/img/icons/test-chevron-up.png"></span></a>'
    });
})

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}