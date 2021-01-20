
var images = ["désert.jpg", "forêt.jpg", "plage.jpg", "Levée-soleil.jpg"];




function userClick() {

  console.log("faceCard show")
  $("#faceCard-1").show();
  $("#backCard-1").css("display", "none");


}

$(document).ready(function () {
  console.log("backCard")
  $("#backCard-1").click(function () {
    userClick()
  })

})

function machCard() {
  var click = [];
  for (i = 0; i > click.length; i++) {
      if( === 2){
        
      }
  }
}

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


