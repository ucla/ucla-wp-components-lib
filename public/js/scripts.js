$(document).ready(function (){

  //add arrow to accrodion title
  $('.accordion__title').append('<img class="accordion__title-arrow" src="/img/arrow-down.svg" alt="arrow">');

  $('img.accordion__title-arrow[src$=".svg"]').each(function () {
    let $img = jQuery(this);
    let imgURL = $img.attr('src');
    let attributes = $img.prop('attributes');

    $.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      let $svg = jQuery(data).find('svg');
      // Remove any invalid XML tags
      $svg = $svg.removeAttr('xmlns:a');
      // Loop through IMG attributes and apply on SVG
      $.each(attributes, function () {
        $svg.attr(this.name, this.value);
      });
      // Replace IMG with SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  //This is what happens when you click the title on mobile or desktop.
  $('.accordion__title').click(function (){
    $(this).next('.accordion__content').toggleClass('show-me');
    $(this).parent('.accordion').toggleClass('show-me');
    $(this).find('.accordion__title-arrow').toggleClass('flip');
    $(this).toggleClass('active');

    if ($(this).next('.accordion__content').find('a').attr('tabindex') === -1) {
      $(this).next('.accordion__content').find('a').attr('tabindex', '0');
    } else if ($(this).next('.accordion__content').find('a').attr('tabindex') === 0) {
      $(this).next('.accordion__content').find('a').attr('tabindex', '-1');
    } else {}

    halfResetAria($);

  });

  //only reset the expanded attribute
  function halfResetAria ($) {
    if ($('.accordion__title').hasClass('active')) {
      $('.accordion__title').find('button').attr('aria-expanded', 'true');
    } else {
      $('.accordion__title-button').attr('aria-expanded', 'false');
    }
  }

  //full reset of ada controls
  const accordBreakpoint = 768;

  function resetAria ($) {
    if (window.innerWidth <= accordBreakpoint) {
      $('.accordion__title-button').attr('aria-expanded', 'false');
      $('.accordion__content').find('a').attr('tabindex', '-1');
      $('.accordion__title').find('button').prop('disabled', false);

      halfResetAria($);

    } else if (window.innerWidth > accordBreakpoint) {
      $('.accordion__title-button').attr('aria-expanded', 'true');
      $('.accordion__content').find('a').attr('tabindex', '0');
      $('.accordion__title').find('button').prop('disabled', true);

    } else {}
  }

  resetAria($);

  $(window).resize(function () {
    setTimeout(function () { resetAria($); }, 100);
  });

  //Tabbing index set to dropdown arrown for College and Schools page only.
  if (window.location.href.indexOf('college-and-schools') > -1) {
    $('.accordion__title-arrow').attr('tabindex', '0');

    document.onkeydown = function (evt) {

      let element = document.activeElement;

      if ($('.accordion__title-arrow').is(':focus')) {
        if (evt.keyCode === 13) {
          $(element).parent('.accordion__title').trigger('click');
        }
      }
    };
  }

});

// responsive-tables.js
$(document).ready(function () {

  let resizeId;

  setRowHeight($);

  //on window resize
  $(window).resize(function () {

    clearTimeout(resizeId);
    resizeId = setTimeout(function () { setRowHeight ($); }, 100);
  });
});


function setRowHeight ($) {

  $('td:first-child, th:first-child').each(function () {

    //reset rows
    $(this).css('height', '');
    $(this).parent('tr').css('height', '');

    //grab heights
	    let firstChildHeight = $(this).closest('tr').height(),
	        firstCell = $(this).outerHeight();

	    //set height
	    if (firstChildHeight > firstCell) {
	    	$(this).css('height', firstChildHeight+'px');
    } else {
	    	$(this).parent('tr').css('height', firstCell+'px');
	    }
  	});
}
