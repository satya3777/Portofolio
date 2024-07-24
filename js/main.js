// Display of loading screen and adjustment of body elements with respect to navigation bar, while loading the page in browser.
$(window).on("load", function () {
  $("body").css("padding-top", $("#navmenu").height());
  $("#outerNavbar ul li a").click(function (e) {
    e.preventDefault();
    let navigationHeight = $("#navmenu").outerHeight();
    let myHref = $(this).attr("href");
    let newPos = $(myHref).offset().top;
    window.scroll(0, newPos - navigationHeight);
  });
});


