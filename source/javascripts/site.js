// This is where it all goes :)

// Accordion
function adjustWidth(){
  var parentwidth = $('#accordion').width();
  $('.usa-accordion-header').width(parentwidth);
}

// Fix accordion header if scrolled

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var elementOffset = $('#accordion').offset().top;
  var distance = (elementOffset - scrollTop);
  console.log(distance);

  if (distance <= 0) {
    $('.usa-accordion-header').addClass('usa-accordion-header-fixed');
    adjustWidth();
  } else {
    $('.usa-accordion-header').removeClass('usa-accordion-header-fixed');
  }
});

// Resize accordion headed if fixed to match accordion width

$(window).resize (function(){
  adjustWidth();
})

// Phone number block

$("#dsn-phone-number-block").hide();

$(function() {
  $("#dns").click(function () {
    if($(this).is(":checked")) {
      $("#dsn-phone-number-block").show();
      $("#phone-number-block").hide();
    } else {
      $("#dsn-phone-number-block").hide();
      $("#phone-number-block").show();
    }
  })
})

$(function() {
  $("#dont-know").click(function(){
    if($(this).is(":checked")) {
      $(".phone-input").attr("disabled", true);
    } else {
      $(".phone-input").removeAttr("disabled");
    }
  })
})

// Full address block

$(".apo-fpo-dpo-address-block").hide();

$(function() {
  $("#apo-fpo-dpo-checkbox").click(function () {
    if($(this).is(":checked")) {
      $(".apo-fpo-dpo-address-block").show();
      $(".address-block").hide();
    } else {
      $(".apo-fpo-dpo-address-block").hide();
      $(".address-block").show();
    }
  })
})

// Date blocks
$(function() {
  $("#present").click(function(){
    if($(this).is(":checked")) {
      $(".to-date-input").attr("disabled", true);
    } else {
      $(".to-date-input").removeAttr("disabled");
    }
  })
})
