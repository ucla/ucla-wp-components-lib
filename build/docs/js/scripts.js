$(document).ready(function (){
  function copyMe () {
    $(document).on('click', 'code', function () {
      $(this).addClass('active');
      textarea = $('<textarea>').val($(this).html()).height(0).appendTo(document.body).select();
      document.execCommand('copy');
      textarea.remove();
    });
  }
  copyMe();
});
