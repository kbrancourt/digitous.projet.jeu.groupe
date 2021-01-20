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
    console.log("backCard")
    $("#backCard-1").click(function() {
        userClick1(1)
        if (click == 2) {
            if ($("#faceCard-5").attr("display") == "block") {
                $("#faceCard-1").css("display", "block");
                $("#faceCard-5").css("display", "block");
                console.log("ok")
                click = 0;
            } else {
                for (i = 1; i <= 6; i++) {
                    $(`#backCard-${i}`).css("display", "block");
                    click = 0
                    console.log("non")
                }
            }
        }
    })
    $("#backCard-2").click(function() {
        userClick1(2)
    })
    $("#backCard-3").click(function() {
        userClick1(3)
    })
    $("#backCard-4").click(function() {
        userClick1(4)
    })
    $("#backCard-5").click(function() {
        userClick1(5)
    })
    $("#backCard-6").click(function() {
        userClick1(6)
    })
})