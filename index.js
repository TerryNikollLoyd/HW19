console.log("click"); 

;
//  $("p").click();

 $("button").click(function(){
      console.log("click");
      $(this).css ("color","white"); 
   });

   $("body").click(function(){
    $("button").css("color","white");
 });

//   $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     })
//   });

  $(document).ready(function () {
    $('body.hidden').fadeIn(1000).removeClass('hidden');
});

{
  color:red
}