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
        $navbar.css({
            left: `-${width}px`
        });
    } else {
        $navbar.css({
            left: '0px'
        });
    }
}


var typed = new Typed('#typed', {
    strings: ['Web Developer', ' <strong style="color:black">FilmMaker</strong>'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: ['<strong style="color:black">Web Developer</strong>', ' <strong style="color:black">FilmMaker</strong>'],
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

var delay = 1000;
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

function myFunction(blue) {
    console.log(blue);
    var saa = document.getElementsByClassName('popup-inner');
    var i;
    for (i = 0; i < saa.length; i++) {
        //saa[i].style.bottom = "-1500px";
        saa[i].style.right = "-200vh";

        saa[i].style.opacity = "0";
        saa[i].style.transform = "rotate(0)";

    }
};


function changeColor(newColor) {

    var elem = document.getElementById('dab');
    console.log(newColor);
    elem.style.visibility = "visible";
    elem.style.backgroundColor = "'" + newColor + "'";
    elem.style.opacity = 1;
    elem.style.right = "10px";
    elem.style.transform = "rotate(-360deg)";
    elem.style.transition = ".64s ease-in-out";


    var was = document.getElementById('popup');
    was.style.opacity = 1;
    was.style.transform = "rotate(-360deg)";
    was.style.transition = ".64s ease-in-out";
    was.style.backgroundColor = newColor;



    //was.style.display = "flex";

}




/* insitalition of aos*/
AOS.init();