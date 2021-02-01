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
    SEARCH FUNCTIONALITY
  -------------------------------------------------------------------------------------*/
  $('.search-desktop_button').click(function (){

    let secondLevelNav = $('li.has-child > ul');

    if ($(this).hasClass('is-active')) {
      $('.search-block-form').removeClass('is-active');
      $(this).removeClass('is-active');
      $('.search-desktop_button > svg').replaceWith('<svg role="img" aria-label="Search Icon" class="search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Search Icon</title><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="search-nav-icon-primary" transform="translate(-15.000000, -15.000000)"><g id="Nav-Item"><g id="Icon/Search" transform="translate(12.000000, 12.000000)"><polygon class="Path-polygon" points="0 0 24 0 24 24 0 24"></polygon><path d="M15.5,14 L14.71,14 L14.43,13.73 C15.41,12.59 16,11.11 16,9.5 C16,5.91 13.09,3 9.5,3 C5.91,3 3,5.91 3,9.5 C3,13.09 5.91,16 9.5,16 C11.11,16 12.59,15.41 13.73,14.43 L14,14.71 L14,15.5 L19,20.49 L20.49,19 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" id="Shape" fill="#00598C" fill-rule="evenodd"></path></g></g></g></g></svg>');

      // Display other submenus is search menu is not active
      for (let i = 0; i < secondLevelNav.length; i += 1) {
        secondLevelNav[i].style.display = '';
      }


    } else {
      $('.search-block-form').addClass('is-active');
      $(this).addClass('is-active');
      $('.search-desktop_button > svg').replaceWith('<svg role="img" aria-label="Close" class="close-x" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Icon Close</title><g id="Icon/Close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon id="Shape" fill="#ffffff" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon></g></svg>');

      // DO NOT Display other submenus is search menu is not active
      for (let i = 0; i < secondLevelNav.length; i += 1) {
        secondLevelNav[i].style.display = 'none';
      }

    }
  });




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

});