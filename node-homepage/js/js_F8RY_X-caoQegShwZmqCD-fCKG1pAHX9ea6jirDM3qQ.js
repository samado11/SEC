(function ($) {
  Drupal.behaviors.evolis_gtm_printer = {
    attach: function (context) {
      $(".footerButtons a.brochure", context).bind("click", function () {
        window.dataLayer.push({
          "event": "gaEvents",
          "eventCategory": "Interface",
          "eventAction": "Download brochure",
          "eventLabel": $('h1').text(),
          "eventValue": "1"
        });
      });

      $("#brochure-modal form", context).bind("submit", function () {
        window.dataLayer.push({
          "event": "gaEvents",
          "eventCategory": "Interface",
          "eventAction": "Download brochure",
          "eventLabel": $('h1').text(),
          "eventValue": "1"
        });
      });
    }
  };
})(jQuery);
;
