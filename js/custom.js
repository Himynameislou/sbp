// Show and Hide Menu

$(document).ready(function(){

  'use strict';

  $(window).scroll(function() {

    'use strict';

    if($(window).scrollTop() < 80 ) {

      $('.navbar').css ({
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59,59,59,0)'
      });

    } else {
      $('.navbar').css ({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59,59,59,.7)',
        'border-color': '#444'
      });

      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });

      $('.navbar-nav > li > a').css ({
        'padding-top': '15px'
      });

    }
  });
});

// Add Smoothing Scrolling to nav items

// adding smooth scroll to bottom angle up; "#scroll-to-top"
// also make note on html to add id (<a href="#HOME" id="scroll-to-top"><i class="fa fa-angle-up"></i></a>)
$(document).ready(function() {

  'use strict';

  $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});  

// Active menu item on click

$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function(){

    'use strict';

    $('.navbar-nav li a').parent().removeClass('active');
    $(this).parent().addClass('active');
  });

  // $('.navbar-nav li a').parent 
});

// Adding JS to make features highlkight on scroll
// So when you are scrolling over the features section or Available on section, those nav items will highlight in accordance

$(document).ready(function(){
  'use strict';

  $(window).scroll(function(){
    'use strict';

    $("section").each(function(){
      'use strict';

      var bb = $(this).attr("id");  //ABOUT,CONTACT,FEATURES,DOWNLOAD
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");

      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }


    });


  });

});


// add autopadding to header

$(document).ready(function(){
  'use strict';

  setInterval(function(){
    'use strict';

    var windowHeight = $(window).height();
    var containterHeight = $('.header-container').height();
    var padTop = windowHeight-containterHeight;
    $('.header-container').css({
      'padding-top': Math.round( padTop / 2) + 'px',
      'padding-bottom': Math.round( padTop / 2) + 'px',
    });

  }, 10)

});

// Custom Bxslider js

$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargins: 50
  }
  );
});

// Counter Up
// you need the WAYPOINT JS Lib and the CounterUP JS lib 

$(document).ready(function(){
  $('.counter-num').counterUp({
    delay: 10,
    time: 2000
  });
});

// add animation initialize wow

$(document).ready(function(){
  'use strict';

  new WOW().init();
});