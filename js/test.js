 //Adds materialize resizable sidenav to all pages
 $(document).ready(function () {
     $('.sidenav').sidenav();
     $("#button").click(function () {
         alert("Handler for .click() called.");
         $("#hideable").toggle();
     });
     $(".chat-closed").on("click", function (e) {
         $(".chat-header,.chat-content").removeClass("hide");
         $(this).addClass("hide");
     });
 });
