$(document).ready(function() {
  $("form.vendor").submit(function(event) {
    event.preventDefault();
      alert("you have successfully submitted your details");
      window.location.href = "vendor.html";

  });



});
