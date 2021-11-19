
// GENERAL 

// Dark mode
let dark = document.body;

function darkModeOn() {
      dark.classList.add("dark");
}

function darkModeOff() {
	dark.classList.remove("dark");
}


// Hide loader + show start button after load
$(document).ready(function(){
      setTimeout(function(){
            $(".loader").css("opacity","0");
            $(".start").css("opacity","1");
      },90); //9000
});

// Hide preloader + page_switcher_up
$(".start").click(function(){
      $(".preloader").fadeTo("fast", 0, function(){
            setTimeout(function(){
                  $(".preloader").hide();
            },800);
      });
      hideShowPageSwitcher();
});

// Open/close aside + nav_toogler + section
$(".nav_toggler").click(function(){
      $("aside , .nav_toggler, section").toggleClass("open");
});

// Change nav_toogler icon + color if aside open
let navButton = $(".nav_toggler");
navButton.click(function(){
      if (navButton.hasClass("open")){
            navButton.html("<i class='fas fa-times'></i>").css("color","red");
      }
      else if (navButton.not("open")){
            navButton.html("<i class='fas fa-ellipsis-h'></i>").css("color","#2e64b3");
      }
});

// GENERAL END

// SECTION SWITCHER

// Hide page switcher appopriate button if at section first or bottom
const hideShowPageSwitcher = function(){
      if ( $("section:last").hasClass("active")) {
            $(".page_switcher_down").fadeOut();
          }
      else {
            $(".page_switcher_down").fadeIn();
      }
      if ( $("section:first").hasClass("active")) {
            $(".page_switcher_up").fadeOut();
          }
      else {
            $(".page_switcher_up").fadeIn();
      }
}

// Toggle and remove active class on appropriate navbar links
const navLinks = $("li > a");
const activeClassLinksTogglerRemover = function() {
      let sectionActiveIndex = $('section.active').index();
      $(navLinks).removeClass("active");
      $(navLinks).eq(sectionActiveIndex).toggleClass("active");
}

// Open section on navbar a click
$(navLinks).click(function(){
      let aClickedIndex = $("a").index(this);
      $("section:visible").removeClass("active").fadeOut();
      $("section").eq(aClickedIndex).toggleClass("active").fadeIn();
      activeClassLinksTogglerRemover();
      hideShowPageSwitcher();
      statusRemover();
      slideRemover();
});

// Switch to previous section
$(".page_switcher_up").click( function(){
      $("section.active").prev().toggleClass("active").fadeIn();
      $("section.active").next().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      statusRemover();
      slideRemover();

});

// Switch to next section
$(".page_switcher_down").click( function(){
      $("section.active").next().toggleClass("active").fadeIn();
      $("section.active").prev().removeClass("active").fadeOut();
      hideShowPageSwitcher();
      activeClassLinksTogglerRemover();
      statusRemover();
      slideRemover();
});

// SECTION SWITCHER END


// Open slide button
const textButton = $(".mini_slide_container > button");
$(textButton).click(function(){
      if($(this).next().is(':hidden')){
            // Hide all content
            slideRemover()
            // Show content selected
            $(this).next().slideToggle();
            $(this).css("color", "red");
            $(this).css("transform", "rotate(90deg)");
      }
      else if($(this).next().is(':visible')){
            $(this).next().slideToggle();
            $(this).removeAttr("style");
      }
});

// Remove all styles of content containers + open slide buttons
let contentContainer = $(".content_container");
const slideRemover = function() {
      $(contentContainer).slideUp();
      $(textButton).removeAttr("style");
}


// DEMO

// Remove all styles of div demo
const demoDiv = $(".demo");
const statusRemover = function() {
      $(demoDiv).find('*').removeAttr('style');
}


// Reset button
const resetButton = $(".demo > button");
const resetButtonIcon = $(".demo > button > i");

$(resetButton).click(function(){
      $(resetButtonIcon).css("transform", "rotate(360deg)");
      $(".commands").find('*').removeAttr('style');
      $(".selecteur_container").find('*').removeAttr('style');
      setTimeout(function(){
            $(resetButtonIcon).removeAttr("style");
      },300);
});

      // INTRODUCTION DEMO
      const liste = $(".selecteur_container > ol");
      const introFirstCommand = $(".first_command");
      const introSecondCommand = $(".second_command");

      // Commande 1
      $(introFirstCommand).click(function(){
            if($(this).siblings().attr("style")){
            // DO NOTHING
            }
            else{
                  liste.css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3");
                  $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            }
      });

      // Commande 2
      $(introSecondCommand).click(function(){
            if($(this).siblings().attr("style")){
                  // DO NOTHING
            }
            else{
                  liste.css("color", "red");
                  $(this).css("border" , "1px solid #2e64b3");
                  $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
            }
      });

      // INTRODUCTION DEMO END

      // FONCTIONNEMENT DEMO
      const testClass = $(".selecteur_container > .test");
      const testId = $(".selecteur_container > #test");
      const testClassParagraphe = $(".selecteur_container > .test > p");
      const testIdParagraphe = $(".selecteur_container > #test > p");

      const fonctionnementFirstCommand = $(".first_command");
      const fonctionnementSecondCommand = $(".second_command");
      const fonctionnementThirdCommand = $(".third_command");
      const fonctionnementFourthCommand = $(".fourth_command");

      // Commande 1
      $(fonctionnementFirstCommand).click(function(){
            testClass.fadeOut();
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 2
      $(fonctionnementSecondCommand).click(function(){
            testId.fadeOut();
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 3
      $(fonctionnementThirdCommand).click(function(){
            testClassParagraphe.fadeOut();
            testIdParagraphe.fadeOut();
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // Commande 4
      $(fonctionnementFourthCommand).click(function(){
            testIdParagraphe.fadeOut();
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      });

      // FONCTIONNEMENT DEMO END

// DEMO END


// TEXT COMPOSER

const textComposer = $(".text_composer");
const arrow = $(".text_composer > i");
const offset = arrow.offset();
$(textComposer).click(function(){

      if($(arrow).css("opacity") == "0"){
            $(arrow).css("opacity","1");
            $(".alias_0, .alias_1, .alias_text").css("color", "red")
            $(".alias_0, .alias_1").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "25px"){
            $(".alias_0, .alias_1, .alias_text").removeAttr("style");
            $(arrow).css("left", "84px");
            $(".selecteur, .selecteur_text").css("color", "red")
            $(".selecteur").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "84px"){
            $(".selecteur, .selecteur_text").removeAttr("style");
            $(arrow).css("left", "175px")
            $(".action, .action_text").css("color", "red")
            $(".action").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "175px"){
            $(".action, .action_text").removeAttr("style");
            $(arrow).css("left", "25px")
            $(arrow).css("opacity","0");
      }
});   

// TEXT COMPOSER END


// LIVE CODING

const liveCodingContainer = $("#live_coding_container");

// LIVE CODING END