$(document).ready(() => {
  //console.log('\nDocument ready');
  formatRibbon();
  adjustPadding();
});

$(window).resize(() => {
  //console.log('\nWindow is resized');
  adjustPadding();
});

// Wrap each word in its own span
function formatRibbon () {
  $('.ribbon').each((index, value) => {
    let text = $(value).html();
    let words = $.trim(text).split(' ');
    let ret = '';
    for (let i = 0; i < words.length; i++) {
      ret += '<span class="ribbon__text">' + words[i] + '</span>';
    }
    $(value).html(ret);
  });
};

// Style first and last word of each line
function adjustPadding () {
  $('.ribbon').each(function () {
    let refTop = 0;
    let top = 0;
    let spans = $(this).find('span');
    spans.each((function (index) {
      let $t = $(this);
      $t.removeClass('first');
      $t.removeClass('last');

      top = this.getClientRects()[0].top;
      //top = $t.position().top;
      console.log($t.text() + ' ' + top);

      if (index === 0){
        $t.addClass('first');
        // set the reference top position to match the first span
        refTop = this.getClientRects()[0].top;
      }

      if (index === spans.length - 1){
        $t.addClass('last');
      }

      if (top > refTop){
        $t.addClass('first');
        $t.prev().addClass('last');
        refTop = top;
      }
    }));
  });
};