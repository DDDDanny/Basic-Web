/**
 * For K7-JQ
 */

/*-------淡入淡出-------*/
$(document).ready(function() {
  $(".dropli").mouseenter(function() {
    $(this).children('ul').fadeIn(400);
  });

  $(".dropli").mouseleave(function() {
    $(this).children('ul').fadeOut(400);
  });
});

/*-------伸缩-------*/
$(document).ready(function() {
    $(".dropli").mouseenter(function() {
      $(this).children('ul').slideDown(400);
    });

    $(".dropli").mouseleave(function() {
      $(this).children('ul').slideUp(400);
    });
});
