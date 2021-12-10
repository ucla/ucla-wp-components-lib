// IMPORTANT: ensure these values are consistent with _ribbons.scss and _variables.scss
const padding_desktop = 10;
const padding_mobile = 8;
const padding_highlight = 10;
const breakpoint_min = 768;

$(document).ready(() => {
  formatRibbon();
  adjustPadding();
});

$(window).resize(() => {
  adjustPadding();
});

// Separate each word in ribbon into individual span
function formatRibbon() {
  // For each ribbon
  $('.ribbon').each(function(index, value) {
    let text = $(value).html();
    let words = $.trim(text).split(' ');
    let ret = '';
    for (let i = 0; i < words.length; i++) {
      ret += '<span class="ribbon__text">' + words[i] + '</span>';
    }
    $(value).html(ret);
  });
};

// Add padding to sides of each ribbon
function adjustPadding() {
  // For each ribbon
  $('.ribbon').each(function() {
    const ribbon_right = this.getBoundingClientRect().right; // Ribbon position right

    let prev_top = 0; // Previous span position top
    let top = 0; // Current span position top

    // For each span within ribbon
    let spans = $(this).find('span');
    spans.each((function(index) {
      // Clear any existing first or last classes
      let $t = $(this);
      $t.removeClass('first');
      $t.removeClass('last');

      top = this.getBoundingClientRect().top; // Get span top position
      right = this.getBoundingClientRect().right; // Get span right position

      // First word in ribbon (index = 0)
      if (index === 0) {
        $t.addClass('first');
        prev_top = this.getBoundingClientRect().top;
      }

      // Last word in the ribbon (index = N-1)
      if (index === spans.length - 1) {
        $t.addClass('last');
      }

      // Select correct padding value
      let padding = 0;
      if ($t.parent()[0].classList.contains('ribbon--highlight')) {
        padding = padding_highlight;
      } else if ($(window).width >= breakpoint_min) {
        padding = padding_desktop;
      } else {
        padding = padding_mobile;
      }

      // Handle line breaks
      if (right + padding > ribbon_right || top > prev_top) {
        $t.addClass('first');
        $t.prev().addClass('last');
        prev_top = this.getBoundingClientRect().top;
      }
    }));
  });
};