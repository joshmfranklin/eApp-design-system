// This is where it all goes :)

$(document).ready(function(){
  // // Accordion
  // function adjustWidth(){
  //   var parentwidth = $('#accordion').width();
  //   $('.usa-accordion-header').width(parentwidth);
  // }

  // // Fix accordion header if scrolled

  // $(window).scroll(function(){
  //   var scrollTop = $(window).scrollTop();
  //   var elementOffset = $('#accordion').offset().top;
  //   var distance = (elementOffset - scrollTop);
  //   console.log(distance);

  //   if (distance <= 0) {
  //     $('.usa-accordion-header').addClass('usa-accordion-header-fixed');
  //     adjustWidth();
  //   } else {
  //     $('.usa-accordion-header').removeClass('usa-accordion-header-fixed');
  //   }
  // });

  // // Resize accordion headed if fixed to match accordion width

  // $(window).resize (function(){
  //   adjustWidth();
  // })

  // Help block

  $(function() {
    $(".usa-help-trigger").click(function(){
      $(".usa-help-alert").toggleClass("hidden");
    })
  })

  // Phone number block

  $("#dsn-phone-number-block").hide();

  $(function() {
    $("#dns").click(function () {
      if($(this).is(":checked")) {
        $("#dsn-phone-number-block").show();
        $("#standard-phone-number-block").hide();
      } else {
        $("#dsn-phone-number-block").hide();
        $("#standard-phone-number-block").show();
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

  // I don't know/Not applicable disabler

  $(function() {
    $("#i-dont-know").click(function(){
      if($(this).is(":checked")) {
        $("#person-knew-well-email").attr("disabled", true);
      } else {
        $("#person-knew-well-email").removeAttr("disabled");
      }
    })
  })

  // Styleguide sidenav highligher design principles

  $(function(){
    var current = location.pathname;
    $('nav li a').each(function(){
      var $this = $(this);
      console.log($this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('usa-current');
      }
    })
  })

  // Styleguide sidebar highligher UI components

  $('#styleguide-sidenav a').click(function(e) {
      $('#styleguide-sidenav a').removeClass('usa-current');
      $(this).addClass('usa-current');
  });

  // Input validation toggle
  $(function() {
    $("#input-validation-toggle").click(function(){
      if($(this).is(":checked")) {
        $("#validation-toggle-example").addClass("usa-input-error");
      } else {
        $("#validation-toggle-example").removeClass("usa-input-error");
      }
    })
  })

  // Save hover
  $(function() {
    $(".usa-save-label").hide();

    $("#eapp-save").hover(function() {
      $(".usa-timeago-label, .usa-save-label").toggle();
    })
  })
})
