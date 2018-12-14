// This is where it all goes :)

$(window).on('load', function(){

  // Help block

  $(function() {
    $(".usa-help-trigger").click(function(){
      $(".usa-help-alert").toggleClass("hidden");
    })
  })

  // Phone number block

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

  $(".apo-fpo-dpo-fields").hide();
  $(".outside-us-fields").hide();

  $(function() {
    $("#apo-fpo-dpo-radio").click(function () {
      $(".apo-fpo-dpo-fields").show();
      $(".outside-us-fields").hide();
      $(".inside-us-fields").hide();
    })

    $("#inside-us-radio").click(function () {
      $(".apo-fpo-dpo-fields").hide();
      $(".outside-us-fields").hide();
      $(".inside-us-fields").show();
    })

    $("#outside-us-radio").click(function () {
      $(".apo-fpo-dpo-fields").hide();
      $(".outside-us-fields").show();
      $(".inside-us-fields").hide();
    })
  })

  // I don't know/Not applicable disabler

  $(function() {
    $(".disabled-toggle").click(function(){
      var disabledInput = $(this).attr("data-id");

      if($(this).is(":checked")) {
        $('.'+disabledInput).attr("disabled", true);
      } else {
        $('.'+disabledInput).removeAttr("disabled");
      }
    })
  })

  // Styleguide sidenav highligher design principles

  $(function(){
    var current = location.pathname;
    $('nav li a').each(function(){
      var $this = $(this);
      var closestSidenavSection = $(this).closest('.usa-sidenav-section-container').children('a');
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('usa-current');
          closestSidenavSection.addClass('usa-current');
          $(this).closest('.usa-sidenav-sub_list').toggle();
          closestSidenavSection.attr( 'aria-expanded', 'true');
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

    $(".usa-eapp-save").hover(function() {
      $(".usa-timeago-label, .usa-save-label").toggle();
    })
  })

  // USA sidenav toggle
  $('.usa-sidenav-toggle').on('click', function(event){
    event.preventDefault();
    // create accordion variables
    var accordion = $(this);
    var accordionContent = accordion.next('.usa-sidenav-sub_list');
    // toggle accordion content
    accordionContent.toggle();
    
    if (accordion.attr( 'aria-expanded') === 'true') {
      $(this).attr( 'aria-expanded', 'false');
    } else {
      $(this).attr( 'aria-expanded', 'true');
    }
    
  });


  // yes/no toggle
  $(".yes-radio").click(function(){
    var yesBlock = $(this).closest('ul').find('.yes-radio').attr("data-id");
    var noBlock = $(this).closest('ul').find('.no-radio').attr("data-id");
    $('.'+yesBlock).show();
    $('.'+noBlock).hide();
  })

  $(".no-radio").click(function(){
    var yesBlock = $(this).closest('ul').find('.yes-radio').attr("data-id");
    var noBlock = $(this).closest('ul').find('.no-radio').attr("data-id");
    $('.'+noBlock).show();
    $('.'+yesBlock).hide();
  })

  // Header shrink on scroll
  $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 300){
      $(".eapp-header").addClass("eapp-header-shrink");
    }
    else
    {
      $(".eapp-header").removeClass("eapp-header-shrink");
    }
  });

  // Set header title based on page
  var pageTitle = $('.eapp-form').attr('data-id');
  console.log(pageTitle);
  $('.eapp-header-section-title').text(pageTitle);

  // Toggle mobile sidenav
  
  $('.eapp-sidenav-mobile-toggle').on('click', function(event) {
    event.preventDefault();
    $('.eapp-sidenav-wrapper, .eapp-form-wrapper').toggle();
    $('.eapp-sidenav-mobile-toggle i').toggleClass('fa-bars fa-times')
  })

  // Country typeahead
  $( function() {
    var countryList = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "{Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabw"
    ];
    $( ".country-select" ).autocomplete({
      source: countryList
    });
  } );

  // Show help blocks
  $('.help-block').hide();

  $('.usa-help-trigger').click(function() {
    var thisHelpBlock = $(this).attr("data-id");
    var thisHelpBlockClass = '.'+thisHelpBlock;
    $(thisHelpBlockClass).load("help-blocks.html #" + thisHelpBlock);
    $(this).parent().next().toggle();
  })

  // Accordion header live text

  $("#header-value").bind('input', function () {
    var headerValue = $(this).val();
    $("#header-text").text(headerValue);
  });

  // Accordion header live radio
  $('.radio-title').click(function(){
    var radioValue = $(this).val();
    $('#header-text').text(radioValue);
  })

  // Comment toggle
  $('#comment-toggle').click(function() {
    event.preventDefault();
    var commentToToggle = $(this).attr('data-id')

    $('.'+commentToToggle).toggle()

    if ($(this).text() == "Add comment") {
      $(this).text("Remove comment");
    } else {
      $(this).text("Add comment");
    }
  })
})
