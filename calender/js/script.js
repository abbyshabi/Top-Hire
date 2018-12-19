function clicker(){
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".close").addEventListener("click",function () {
  document.querySelector(".bg-modal").style.display= "none";
  });
   function pop() {
     document.querySelector("#confirm").addEventListener("click",function () {
       alert("Please wait for confirmation!")
     });
   };
};
