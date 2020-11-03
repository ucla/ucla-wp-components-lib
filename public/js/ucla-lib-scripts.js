$(document).ready(function (){



});

$(document).ready(function (){

  // Trigger Errors - Only select and text input errors are built out so far
  window.triggerError = function (fieldName, errorMessage) { // eslint-disable-line no-unused-vars
    // get select element
    let elParent = $('select[name ="' + fieldName + '"]').parent();
    let errorSpan = elParent.find('.select__error'); // eslint-disable-line no-unused-vars

    // if the element isn't a select element, try text input
    if (!elParent.length) {
      let inputEl = $('input[name="' + fieldName + '"]');
      errorSpan = elParent.find('.text__error');
      elParent = inputEl.parent();
    }

    // add error class to HTML to show appropriate error styling
    errorSpan.html(errorMessage);
    elParent = elParent.addClass('hasError');
  };

  // Clear Errors - This should be called to clear any previous error messages
  window.clearErrors = function (formEl) {
    // Get class name
    let elSelector = formEl.className;
    let errorInputs;

    // Find error elements
    // If there isn't a class, check for ID instead
    if (typeof elSelector !== 'undefined') {
      errorInputs = $('.' + elSelector).find('.hasError');
    } else {
      elSelector = formEl.id;
      errorInputs = $('#' + elSelector).find('hasError');
    }

    // If previous areas are found, clear them
    if (errorInputs.length) {
      for (let i = 0; i < errorInputs.length; i++) {
        errorInputs[i].classList.remove('hasError');
      }
    }
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

$(document).ready(function () {
  // GLOBAL Grid JAVASCRIPT

  // Insert white divat top of grey color background making the top 30% of the wrap white, leaving the bottom 70% grey.
  $('.light-grey.tall-75').prepend('<div class="white-25"></div>');
  $('.light-grey.tall-65').prepend('<div class="white-35"></div>');
});

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
function formatRibbon () {
  // For each ribbon
  $('.ribbon').each(function (index, value) {
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
function adjustPadding () {
  // For each ribbon
  $('.ribbon').each(function () {
    const ribbon_right = this.getBoundingClientRect().right; // Ribbon position right

    let prev_top = 0; // Previous span position top
    let top = 0; // Current span position top

    // For each span within ribbon
    let spans = $(this).find('span');
    spans.each((function (index) {
      // Clear any existing first or last classes
      let $t = $(this);
      $t.removeClass('first');
      $t.removeClass('last');

      top = this.getBoundingClientRect().top; // Get span top position
      right = this.getBoundingClientRect().right; // Get span right position

      // First word in ribbon (index = 0)
      if (index === 0){
        $t.addClass('first');
        prev_top = this.getBoundingClientRect().top;
      }

      // Last word in the ribbon (index = N-1)
      if (index === spans.length - 1){
        $t.addClass('last');
      }

      // Select correct padding value
      let padding = 0;
      if ($t.parent()[0].classList.contains('ribbon--highlight')) {
        padding = padding_highlight;
      }
      else if ($(window).width >= breakpoint_min) {
        padding = padding_desktop;
      }
      else {
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

// stupidtable
(function (c) {
  c.fn.stupidtable = function (a) {
    return this.each(function () {
      let b = c(this);
      a = a || {};
      a = c.extend({}, c.fn.stupidtable.default_sort_fns, a);
      b.data('sortFns', a);
      b.stupidtable_build();
      b.on('click.stupidtable', 'thead th', function () {
        c(this).stupidsort();
      });
      b.find('th[data-sort-onload=yes]').eq(0).stupidsort();
    });
  };
  c.fn.stupidtable.default_settings = {
    should_redraw: function () {
      return !0;
    },
    will_manually_build_table: !1
  };
  c.fn.stupidtable.dir = {
    ASC: 'asc',
    DESC: 'desc'
  };
  c.fn.stupidtable.default_sort_fns = {
    'int': function (a,
      b) {
      return parseInt(a, 10) - parseInt(b, 10);
    },
    'float': function (a, b) {
      return parseFloat(a) - parseFloat(b);
    },
    string: function (a, b) {
      return a.toString().localeCompare(b.toString());
    },
    'string-ins': function (a, b) {
      a = a.toString().toLocaleLowerCase();
      b = b.toString().toLocaleLowerCase();
      return a.localeCompare(b);
    }
  };
  c.fn.stupidtable_settings = function (a) {
    return this.each(function () {
      let b = c(this),
        f = c.extend({}, c.fn.stupidtable.default_settings, a);
      b.stupidtable.settings = f;
    });
  };
  c.fn.stupidsort = function (a) {
    let b = c(this),
      f = b.data('sort') ||
      null;
    if (null !== f) {
      let d = b.closest('table'),
        e = {
          $th: b,
          $table: d,
          datatype: f
        };
      d.stupidtable.settings || (d.stupidtable.settings = c.extend({}, c.fn.stupidtable.default_settings));
      e.compare_fn = d.data('sortFns')[f];
      e.th_index = h(e);
      e.sort_dir = k(a, e);
      b.data('sort-dir', e.sort_dir);
      d.trigger('beforetablesort', {
        column: e.th_index,
        direction: e.sort_dir,
        $th: b
      });
      d.css('display');
      setTimeout(function () {
        d.stupidtable.settings.will_manually_build_table || d.stupidtable_build();
        /*eslint-disable */
        var a = l(e),
          a = m(a, e);
        if (d.stupidtable.settings.should_redraw(e)) {
          d.children('tbody').append(a);
          var a = e.$table,
          /*eslint-enable */
            c = e.$th,
            f = c.data('sort-dir');
          a.find('th').data('sort-dir', null).removeClass('sorting-desc sorting-asc');
          c.data('sort-dir', f).addClass('sorting-' + f);
          d.trigger('aftertablesort', {
            column: e.th_index,
            direction: e.sort_dir,
            $th: b
          });
          d.css('display');
        }
      }, 10);
      return b;
    }
  };
  c.fn.updateSortVal = function (a) {
    let b = c(this);
    b.is('[data-sort-value]') && b.attr('data-sort-value', a);
    b.data('sort-value', a);
    return b;
  };
  c.fn.stupidtable_build = function () {
    return this.each(function () {
      let a = c(this),
        b = [];
      a.children('tbody').children('tr').each(function (a,
        d) {
        let e = {
          $tr: c(d),
          columns: [],
          index: a
        };
        c(d).children('td').each(function (a, b) {
          let d = c(b).data('sort-value');
          'undefined' === typeof d && (d = c(b).text(), c(b).data('sort-value', d));
          e.columns.push(d);
        });
        b.push(e);
      });
      a.data('stupidsort_internaltable', b);
    });
  };
  let l = function (a) {
    /*eslint-disable */
      var b = a.$table.data('stupidsort_internaltable'),
        f = a.th_index,
        d = a.$th.data('sort-multicolumn'),
        d = d ? d.split(',') : [],
        /*eslint-enable */
        e = c.map(d, function (b) {
          let c = a.$table.find('th'),
            e = parseInt(b, 10),
            f;
          e || 0 === e ? f = c.eq(e) : (f = c.siblings('#' + b), e = c.index(f));
          return {
            index: e,
            $e: f
          };
        });
      b.sort(function (b, c) {
        /*eslint-disable */
        for (var d = e.slice(0), g = a.compare_fn(b.columns[f], c.columns[f]); 0 === g && d.length;) {
          var g = d[0], // eslint-disable-line no-use-before-define
            h = g.$e.data('sort'),
            g = (0, a.$table.data('sortFns')[h])(b.columns[g.index], c.columns[g.index]);
          d.shift();
        }
        /*eslint-enable */
        return 0 === g ? b.index - c.index : g;
      });
      a.sort_dir !== c.fn.stupidtable.dir.ASC && b.reverse();
      return b;
    },
    m = function (a, b) {
      let f = c.map(a, function (a, c) {
        return [
          [a.columns[b.th_index], a.$tr, c]
        ];
      });
      b.column = f;
      return c.map(a, function (a) {
        return a.$tr;
      });
    },
    k = function (a, b) {
      let f, d = b.$th,
        e = c.fn.stupidtable.dir;
      a ? f = a : (f = a || d.data('sort-default') || e.ASC, d.data('sort-dir') && (f = d.data('sort-dir') === e.ASC ? e.DESC : e.ASC));
      return f;
    },
    h = function (a) {
      let b = 0,
        f = a.$th.index();
      a.$th.parents('tr').find('th').slice(0, f).each(function () {
        let a = c(this).attr('colspan') || 1;
        b += parseInt(a, 10);
      });
      return b;
    };
})(jQuery);

// sort-tables.js
$(document).ready(function () {

  const $table = $('#sortTable');

  $table.stupidtable_settings({
    will_manually_build_table: true
  });

  $('#sortTable thead th:first-child').trigger('click');

  /***
	  sort by last name, custom data type for stupidtable
	  https://github.com/joequery/Stupid-Table-Plugin#creating-your-own-data-types
	  definition: sorts column by "Lastname Firstname" instead of the default "string"
	  usage: add data-sort="lastname" to the th tag in the table that contains the names, in the applicable blade template
	***/

  $table.stupidtable({
    'lastname': function (a, b){

      const pattern = '^[w"-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[]]{2,}$';
      const re = new RegExp(pattern);

      const aName = re.exec(a);
      const bName = re.exec(b);

      return aName - bName;
    }
  });

  $table.animate({
    opacity: 1,
  }, 500, function () { });

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
