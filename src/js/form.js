$(document).ready(function (){

  // Trigger Errors - Only select and text input HTML is built out so far
  window.triggerErrors = function (fieldName, errorMessage) { // eslint-disable-line no-unused-vars
    let elParent = $('select[name ="' + fieldName + '"]').parent();
    let errorSpan = elParent.find('.select__error');

    // if the element isn't a select element, try text input
    if (!elParent.length) {
      let inputEl = $('input[name="' + fieldName + '"]');
      inputEl.css('background', '#EBEBEB url("/img/icons/error-red.svg") no-repeat 96.5% 50%');
      inputEl.css('background-size', '24px 24px');
      elParent = $('input[name="' + fieldName + '"]').parent();
    }

    errorSpan.html(errorMessage);
    elParent = elParent.addClass('error');
  };

  function updateSelectionTextColor () {
    $('.select__option').each(function () {
      if ($(this).is(':selected') && !$(this).is(':disabled')) {
        $(this).parent().css('color', '#000000');
      } else {
        $(this).parent().css('color', '#000000');
      }
    });
  }

  // Change text color when changed from placeholder
  $('.select__menu').on('change', function () {
    updateSelectionTextColor();
  });

  // Change text color immediately if a non-placeholder is selected
  updateSelectionTextColor();
});
