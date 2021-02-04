console.log("Your index.js file is loaded correctly!"); 


// $("p").click();

// $("p").click(function(){
//     // action goes here!!
//   });

//   $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });

  $(document).ready(function () {
    $('body.hidden').fadeIn(1000).removeClass('hidden');
});

