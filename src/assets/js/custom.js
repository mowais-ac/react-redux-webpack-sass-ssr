
/*
 Project:        AcademicsProvider.pk
 Version:        1.0
 Author:         M.Owais
 URL:            https://AcademicsProvider.pk
 Primary use:    www.AcademicsProvider.pk

 =================================
 Table Of contents
 --
 1) Sementic Modules
  a) Initializing Modules
  b) Search
 =================================
 */

/* ------------------------------------------
1) Sementic Modules - [start]
------------------------------------------ */
// a) Initializing Modules
$('.ui.accordion').accordion();
$('.ui.checkbox').checkbox();

// b) Search
$('.ui.search').search({
    apiSettings: {
        url: '//api.github.com/search/repositories?q={query}'
    },
    fields: {
        results : 'items',
        title   : 'name',
        url     : 'html_url'
    },
    minCharacters : 1
})
;
// Drop down
$('.ui.dropdown').dropdown();
$('.ui.dropdown-subject-multi').dropdown({
    allowAdditions: true, 
    transition: 'drop'
});

// Ratings
$('.ui.rating').rating();

// Progress bar
$('#profile-progress')
  .progress({
    percent: 50
  })
;
/* ------------------------------------------
1) Sementic Modules - [/end]
------------------------------------------ */

/* ------------------------------------------
2) Document Ready - [Start]
------------------------------------------ */
// Variables
var SELECT = {
        header: '#header',
    };

// Header - [Start]
$(function(){

});
// Header - [/end]
/* ------------------------------------------
2) Document Ready - [Start]
------------------------------------------ */

/* ------------------------------------------
4) On scroll - [Start]
------------------------------------------ */
$(window).scroll(function() {
    if(!$('body').hasClass('hide-menu')){
        function headerScroll(){
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                $('body').addClass('scrolled');
                $('#header .row1').slideUp();
            } else{
                $('body').removeClass('scrolled');
                $('#header .row1').slideDown();
            }
        } headerScroll();
    }
});
/* ------------------------------------------
4) On scroll - [/end]
------------------------------------------ */

/* ------------------------------------------
3) Window Load - [Start]
------------------------------------------ */

/* ------------------------------------------
3) Window Load - [/end]
------------------------------------------ */


