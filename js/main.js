var images = ["désert.jpg","forêt.jpg","plage.jpg","Levée-soleil.jpg"];


//mahmoudou
// $(document).ready(function(){
//     //qd je clique sur l'arrière d'une carte

//     function userClick(){
//       $(".backCard").click({
//         //la photo apparait et disparait qd la souris n'est plus dessus
//         function(){
           
//             $("#backCard-1").css("display", "none");  
//           },
        
//         function(){
//             $("#faceCard-1").css("display", "block");
//           }, 
//     })
//     }
    
// })
// userClick()

// ahmed

function userClick(){
  console.log("faceCard show")
  $("#faceCard-1").show();
  $("#backCard-1").css("display", "none");
}

$(document).ready(function(){
  console.log("backCard")
  $("#backCard-1").click(function(){
    userClick()
  })

})


//var click = 0;
//si l'utilisateur clique sur une photo: var click = 1
//si l'utilisateur clique sur une 2ème photo: var click = 2

 //comparer la valeur de la nouvelle class avec la class de l'autre photo
 //if(class photo1 === class photo2{
  // $(".photo1").css ("display", "block")
 //}) 
// avec les 6 photos, faire 3 conditions
//if(class photo2 === class photo3{
  // $(".photo2").css ("display", "block")
 //})
