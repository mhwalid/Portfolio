$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();

    toggle_onclick($win, $navbar, width);

    //resiz event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
        console.log('yeh');
    });

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}


var typed = new Typed('#typed', {
    strings: ['Web Developer', ' <strong style="color:black">FilmMaker</strong>'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: ['Web Developer', ' <strong style="color:black">FilmMaker</strong>'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var delay = 4000;
$(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({
        width: $(this).attr('aria-valuenow') + '%'
    }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        // easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) + '%');
        }
    });
});