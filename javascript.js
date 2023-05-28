$(document).ready(function() {
    $(".nav-link").hover(
      function() {
        $(this).animate({ paddingLeft: "20px" }, 200);
      },
      function() {
        $(this).animate({ paddingLeft: "0" }, 200);
      }
    );
  });
  