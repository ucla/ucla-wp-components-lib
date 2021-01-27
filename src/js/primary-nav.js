$(document).ready(function (){

  const $sublistItem = $('.nav-primary__sublist');
  const $toggle = $('.nav-primary__toggle');
  const breakpoint = 1024;

  // Hide sub items in small device sizes
  $sublistItem.addClass('nav-primary__sublist--hidden');

  // Show nav children on click of toggle
  $toggle.on('click', function () {
    $(this).siblings('.nav-primary__sublist').toggleClass('nav-primary__sublist--hidden');
    $(this).toggleClass('is-open');
  });

  // Evaluate mobile sub nav states on page load
  evalNav($(window).width());

  // Run evaluation on page resize
  $(window).resize(function () {
    evalNav($(window).width());
  });

  // Hide open mobile sub navs above browser width 1024px
  function evalNav (windowWidth) {

    if (windowWidth >= breakpoint) {
      $sublistItem.addClass('nav-primary__sublist--hidden');
      $toggle.removeClass('is-open');
    }
  }




  /*-------------------------------------------------------------------------------------
    PRIMARY NAVIGATION TABBING FUNCTIONALITY
  -------------------------------------------------------------------------------------*/

  //reset the primary navigation
  resetTabs ();

  //get the window width
  let windowWidth = $(window).width();

  //set the tabbing functionality
  if (windowWidth >= breakpoint) {
    addDesktopTabs ();
  }

  //On Resize
  $(window).resize(function () {

    windowWidth = $(window).width();

    setTimeout(function () {

      if (windowWidth >= breakpoint) {
        resetTabs ();
        addDesktopTabs ();
      } else {
        resetTabs ();
      }
    }, 100);
  });

  //on mouse out of sublist reset
  $('#nav-main .nav-primary__sublist').mouseout(function () {
    $('#nav-main').find('.nav-primary__list .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__sublist .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist').attr('style', '');
  });





  /* ---------- Reset all the tabbing and styles ---------- */
  function resetTabs () {
    $('#nav-main').find('.nav-primary__list .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__sublist .nav-primary__link').attr('tabindex', '0');
    $('#nav-main').find('.nav-primary__list .nav-primary__sublist').attr('style', '');
    $(document).unbind('keydown');
  }

  /* --------------add dekstop tabbing controls------------ */
  function addDesktopTabs () {

    //keypress focus
    $(document).keydown(function (e) {

      let keyCode = e.keyCode || e.which;

      //tab key was pressed
      if (keyCode === 9) {

        setTimeout(function () {

          let $focus = $(':focus');

          //if this is a top level nav or the focus is not a primary nav item
          if ($focus.parent().parent('.nav-primary__list').length > 0 || !$focus.hasClass('nav-primary__link')) {

            $('.nav-primary__list .nav-primary__sublist').attr('style', '');
          }
        }, 50);
      }

      //arrow down was pressed
      if (keyCode === 40) {

        //get the focused element
        let $focus = $(':focus'), $dropdown;

        //if this is a primary navigation item
        if ($focus.hasClass('nav-primary__link')) {

          $dropdown = $focus.parent('.nav-primary__item').find('.nav-primary__sublist');

          //has a dropdown
          if ($dropdown.length > 0) {

            //Show the dropdown
            $dropdown.show();

            //add a tabindex of 0
            $dropdown.find('.nav-primary__link').attr('tabindex', '0');
          }
        }
      }

    });

  }

  /* ---------------- add mobile tabbing controls -------------- */
  /*function addMobileTabs () {

    //keypress focus
    $(document).keydown(function (e) {

      let keyCode = e.keyCode || e.which;

      //tab key was pressed
      if (keyCode === 9) {
      }

      //enter was pressed
      if (keyCode === 13) {
      }

    });

  }*/

});