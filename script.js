
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

// Introduction demo
let liste = $("#ol_container > ol");

// Commande Javascript + border if clicked
let firstCommand = $(".first_command");
$(firstCommand).click(function(){
      if($(firstCommand).attr("style") || $(secondCommand).attr("style")){
           // DO NOTHING
      }
      else{
            document.querySelector('ol').style.color = "red";
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      }
});

// Commande jQuery + border if clicked
let secondCommand = $(".second_command");
$(secondCommand).click(function(){
      if($(firstCommand).attr("style") || $(secondCommand).attr("style")){
            // DO NOTHING
      }
      else{
            document.querySelector('ol').style.color = "red";
            $(this).css("border" , "1px solid #2e64b3");
            $(this).css("filter", "drop-shadow(0px 0px 8px rgb(46 100 179 / 80%)");
      }
});

// Reset button
let resetButton = $(".demo > button");
$(resetButton).click(function(){
      $(liste).removeAttr('style');
});

//Reset button icon flip on click + reset after timing
let resetButtonIcon = $("button > i");
$(resetButton).click(function(){
      if($(firstCommand).attr("style") || $(secondCommand).attr("style")){
            $(resetButtonIcon).css("transform", "rotate(360deg)");
            $(firstCommand).removeAttr('style');
            $(secondCommand).removeAttr('style');
            setTimeout(function(){
                  $(resetButtonIcon).removeAttr("style");
            },300);
      }
});

// Remove all styles of div demo
let demoDiv = $(".demo");
const statusRemover = function() {
      $(demoDiv).find('*').removeAttr('style');
}

// DEMO END

// TEXT COMPOSER

const textComposer = $(".text_composer");
const arrow = $(".text_composer > i");
let offset = arrow.offset();
$(textComposer).click(function(){

      if($(arrow).is(':hidden')){
            $(arrow).fadeIn();
            $("#alias_0, #alias_1").css("color", "red")
            $("#alias_0, #alias_1").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "25px"){
            $("#alias_0, #alias_1").removeAttr("style");
            $(arrow).css("left", "84px");
            $("#selecteur").css("color", "red")
            $("#selecteur").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "84px"){
            $("#selecteur").removeAttr("style");
            $(arrow).css("left", "169px")
            $("#action").css("color", "red")
            $("#action").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
      }
      else if($(arrow).css("left") == "169px"){
            $("#action").removeAttr("style");
            $(arrow).css("left", "25px")
            $(arrow).fadeOut();
      }
});   

// TEXT COMPOSER END


// LIVE CODING

const liveCodingContainer = $("#live_coding_container");

// LIVE CODING END