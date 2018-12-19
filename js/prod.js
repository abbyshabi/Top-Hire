$(document).ready(function(){
    $("#eq, #vh, #vn").show();
    $("#vehicle,#venue,#equipment").hide();

   })
   $(document).ready(function(){
   $("#eq").click(function(){
     $("#equipment").show();
        $("#vn,#vh,#eq") . show();
   })
})
    $(document).ready(function(){
   $("#vh").click(function(){
     $("#vehicle").show();
        $("#vn,#vh,#eq") . show();
   })
})
    $(document).ready(function(){
   $("#vn").click(function(){
     $("#venue").show();
        $("#vn,#vh,#eq") . show();
   })
})



   $(document).ready(function(){
    $("#eq, #vh,#vn").show();
    $("#vehicle,#venue,#equipment").hide();

   })
   $(document).ready(function(){
   $("#vn").click(function(){
     $("#venue").show();
        $("#equipment,#vehicle") . hide();
   })
})

   $(document).ready(function(){
   $("#vh").click(function(){
     $("#vehicle").show();
        $("#venue,#equipment") . hide();
   })
})
    $(document).ready(function(){
   $("#eq").click(function(){
     $("#equipment").show();
        $("#vehicle,#venue") . hide();
   })
})
