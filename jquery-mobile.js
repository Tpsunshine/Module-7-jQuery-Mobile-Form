$(document).ready(function() {
    $("input[type=submit]").click(function(e) {
     var name = $("#name").val();
     var email = S("#email").val();
     if (name == '' || email == '') {
         e.preventDefault();
         alert("Please Fill Required Fields");
     }

    });
});