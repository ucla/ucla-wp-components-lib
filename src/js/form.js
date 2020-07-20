$(document).ready(function (){

  // Trigger Errors - Only select HTML is built out so far
  window.triggerErrors = function (fieldName, errorMessage) { // eslint-disable-line no-unused-vars
    let elParent = $('select[name ="' + fieldName + '"]').parent();
    let errorSpan = elParent.find('.select__error');
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
