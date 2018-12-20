$(document).ready(function(){
  $("form.well").submit(function(event){
    event.preventDefault();
    alert("You have successfully logged in");
    window.location.href="vendor.html"
  });
});
