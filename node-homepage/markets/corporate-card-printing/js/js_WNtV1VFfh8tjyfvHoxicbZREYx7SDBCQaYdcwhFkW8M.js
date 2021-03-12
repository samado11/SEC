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
(function ($)
{
 $(document).ready(function () {

  $("#printers-list .node-teaser:gt(1)").hide(); // display the first two nodes
  $("#accessories-list .node-teaser:gt(1)").hide(); // display the first two nodes

  var p_hiddens = $("#printers-list .node-teaser:hidden"); // hide printers more button if no more than two nodes
  if(p_hiddens.length <= 2)
  {
   $(".printers-more").remove();
  }

  var a_hiddens = $("#accessories-list .node-teaser:hidden"); // hide printers more button if no more than two nodes
  if(a_hiddens.length <= 2)
  {
   $(".accessories-more").remove();
  }

  $(".printers-more").click(function(){
   var hiddens = $("#printers-list .node-teaser:hidden");
   hiddens.slice(0,6).show();
   if(hiddens.length <= 6)
   {
    $(this).remove();
   }
  });

  $(".accessories-more").click(function(){
   var hiddens = $("#accessories-list .node-teaser:hidden");
   hiddens.slice(0,6).show();
   if(hiddens.length <= 6)
   {
    $(this).remove();
   }
  });

  /**
   * Déplace le block brochure après le 1er item des applications
   */

  var brochure = document.querySelector(".block__container--brochure");
  var brochureBlock = brochure.closest("article");
  var applicationList = document.getElementById("applications");
  var applications = applicationList.querySelectorAll(".node-application");
  applicationList.insertBefore(brochureBlock, applications.item(1));
 });

})(jQuery);
;
