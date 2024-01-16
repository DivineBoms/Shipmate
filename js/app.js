	// fixedHeader on scroll
	  // Smooth scroll for the navigation menu and links with .scrollto classes
      $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          e.preventDefault();
          var target = $(this.hash);
          if (target.length) {
    
            var scrollto = target.offset().top;
    
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
    
            if ($(this).parents('.nav-menu, .mobile-nav').length) {
              $('.nav-menu .active, .mobile-nav .active').removeClass('active');
              $(this).closest('li').addClass('active');
            }
    
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
            return false;
          }
        }
      });
    
      // Mobile Navigation
      if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
    
        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').toggle();
        });
    
        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });
    
        $(document).click(function(e) {
          var container = $(".mobile-nav, .mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
      
    // stikcy js
    $("#header").sticky({
      topSpacing: 0
  });
  
    /*------------------------------------------------
            feature-slider
        ------------------------------------------------*/
        $('.feature-slider').owlCarousel({
          autoplayHoverPause:true,
          margin: 30,
          nav: false,
          dots: false,
          smartSpeed: 1500,
          items: 3,
          loop: true,
          autoplay:true,          
          responsive : {                
              769 : {
                  items: 3,
              },
              577 : {
                  items: 2,
              },
              0 : {
                  items: 1,
              }
          },             
      });

 /*------------------------------------------------
            counter
        ------------------------------------------------*/

      var counter = function() {
		
        $('#section-counter').waypoint( function( direction ) {
      
          if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
      
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function(){
              var $this = $(this),
                num = $this.data('number');
                console.log(num);
              $this.animateNumber(
                {
                number: num,
                numberStep: comma_separator_number_step
                }, 9000
              );
            });
            
          }
      
        } , { offset: '95%' } );
      
      }
      counter();


      /*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
      speed: 1000,
      infinite: true,
      arrows: false,
      dots: false,                   
      autoplay: false,
      centerMode : false,

      responsive: [{

          breakpoint: 1360,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3
          }
      },
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 575,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
  });
  
/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

$(document).ready(function() {

  $('.cmt-tabs > .tabs').children('li').on('click', function(e) {  

      var tab = $(this).closest('.cmt-tabs > .tabs > .tab'), 

      index = $(this).closest('.cmt-tabs > .tabs > li').index();

      $(this).parents('.cmt-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

      $(this).addClass('active'); 
      $(this).addClass('active').parents('.cmt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
      $(this).addClass('active').parents('.cmt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

      e.preventDefault();
  });
});
// Testimonial Carousel Two
  $('.testimonial-carousel-two').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    smartSpeed: 700,
    autoplay: 5000,
    responsive: {
      0: {
        items: 1
      },
      991: {
        items: 2
      },
    }
  });
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
$('.cmt-progress-bar').each(function() {
  $(this).find('.progress-bar').width(0);
});

$('.cmt-progress-bar').each(function() {

  $(this).find('.progress-bar').animate({
      width: $(this).attr('data-percent')
  }, 2000);
});


// Part of the code responsible for loading percentages:

$('.progress-bar-percent[data-percentage]').each(function () {

  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));

      $({countNum: 0}).animate({countNum: percentage}, {
          duration: 2000,
          easing:'linear',
          step: function() {
          // What todo on every count
              var pct = '';
              if(percentage === "0"){
                  pct = Math.floor(this.countNum) + '%';
              }else{
                  pct = Math.floor(this.countNum+1) + '%';
              }
              progress.text(pct);
          }
      });
});

  /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
          $('.single-select').niceSelect();
      }

           /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 100);
        });

  

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 100) {
            ScrollTop.fadeIn(500);
        } else {
            ScrollTop.fadeOut(500);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });