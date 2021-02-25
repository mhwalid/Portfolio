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
// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});
$(".lanague-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  margin: 15,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    100: {
      items: 2
    },
    200: {
      items: 3
    },
    300: {
      items: 4
    },
    400: {
      items: 5
    },
    500: {
      items: 6
    },
    600: {
      items: 7
    },
    600: {
      items: 8
    }
  }
});
// Portfolio details carousel
$(".portfolio-details-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});

// Porfolio isotope and filter
$(window).on('load', function () {
  var portfolioIsotope = $('.portfolio-containe').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox();
  });
});












var typed = new Typed('#typed', {
  strings: ['Developpeur web', ' <strong style="color:black">Alternant en informatique</strong>'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

var typed_2 = new Typed('#typed_2', {
  strings: ['<strong style="color:black">Developpeur web</strong>', ' <strong style="color:black">Alternant en informatique</strong>'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
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
    saa[i].style.bottom = "-10vh";

    saa[i].style.opacity = "0";
    saa[i].style.transform = "rotate(0)";

  }
};


function changeColor(newColor, item, id) {

  var elem = document.getElementById(id);
  console.log(newColor);
  elem.style.visibility = "visible";
  elem.style.backgroundColor = "'" + newColor + "'";
  elem.style.opacity = 1;
  elem.style.right = "10px";
  elem.style.transform = "rotate(-360deg)";
  elem.style.transition = ".64s ease-in-out";

  var was = document.getElementById(item);
  was.style.opacity = 1;
  was.style.transform = "rotate(-360deg)";
  was.style.transition = ".64s ease-in-out";
  was.style.backgroundColor = newColor;



  //was.style.display = "flex";

}


/* insitalition of aos*/
AOS.init();