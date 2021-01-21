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
var click = 0;

function userClick1(n) {
    $(`#faceCard-${n}`).css("display", "block");
    $(`#backCard-${n}`).css("display", "none");
    click++;
    console.log("click", click)
}

function essaie() {
    for (i = 1; i <= 6; i++) {
        userClick1(i)
    }
}
$(document).ready(function() {
    console.log("backCard");

    userClick1()
}) 
    //si je clique 2 fois et que card 5 = card 1
    // if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
    //     $("#faceCard-1").css("display", "block");
    //     $("#faceCard-5").css("display", "block");
        
    // } //else{
    // //      $("#faceCard-1").css("display", "none") ;
    // //      $("#faceCard-5").css("display", "none");
       
    // // }
    // console.log("recommencez");
  
//      if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
//          $("#faceCard-2").css("display", "block");
//          $("#faceCard-6").css("display", "block");
//          console.log("ok")
//      } else if(click>3){
//          $("#backCard-3").attr("display", "none");
//          $("#backCard-4").attr("display", "none");
//          console.log("recommencez")
//      }

//})

    $("#backCard-1").click(function() {
        userClick1(1)
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#faceCard-1").css("display", "block");
            $("#faceCard-5").css("display", "block");
        }
    });


    $("#backCard-2").click(function() {
        userClick1(2)
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#faceCard-2").css("display", "block")
            $("#faceCard-6").css("display", "block")
        }
    })


    $("#backCard-3").click(function() {
        userClick1(3)
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#faceCard-1").css("display", "block");
            $("#faceCard-5").css("display", "block");
        }
    })

    $("#backCard-4").click(function() {
        userClick1(4)
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#faceCard-1").css("display", "block");
            $("#faceCard-5").css("display", "block");
        }
    })

    $("#backCard-5").click(function() {
        userClick1(5)
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#faceCard-1").css("display", "block");
            $("#faceCard-5").css("display", "block");
        }
    })




    $("#backCard-6").click(function() {
        userClick1(6)
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#faceCard-2").css("display", "block");
            $("#faceCard-6").css("display", "block");
        }
    })
