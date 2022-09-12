$(function(){
  //progress bar1
  $('.progress0').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#1abc9c'
});

$('.progress1').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#2ecc71'
});



$('.progress2').rProgressbar({
    percentage: 75,
    fillBackgroundColor: '#9b59b6'
});



$('.progress3').rProgressbar({
    percentage: 65,
    fillBackgroundColor: '#34495e'
});



$('.jquery').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#f1c40f',
    backgroundColor: '#e67e22'
});
/*===back-to-top js Start===*/
$ (".back-to-top") .click (function () {
    $ ("html,body") .animate ({ scrollTop : 0},1000 )
  })
  /*===back-to-top js End===*/
    /*===Sticky-menu js Start===== */
    $(window) .scroll(function(){
        var top = $ (this) .scrollTop ()
        if( top > 300){
          $(".navbar") .addClass("sticky-menu")
        }
        else{
          $(".navbar") .removeClass("sticky-menu")
        }
      }) 
      /*===Sticky-menu js End===== */
             //hamburger menu
             $(".navbar-toggler").click(function(event) {
              event.stopPropagation();
              $("#hamburger-menu").toggleClass("open");
              $("#menu-container .menu-list").toggleClass("active");
              slideMenu();
          
              $("body").toggleClass("overflow-hidden");
            });

  /*===Scroll Spy Start=== */ 
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
   /*===Scroll Spy Start=== */
})