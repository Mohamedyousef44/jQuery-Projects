// $(document).ready(function(){
//     if (jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//     } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//     }
//  });


let img1 = $('#thing');
let img2 = $('#hole');
let parent = $('.photos')


img1.draggable({ containment: "parent" })

img1.on('mouseover' , function(){
    $(this).effect('bounce')
})

img2.droppable({

    drop: function(){

       $(this).next().hide(1000)

    }
  });