var click = 0;
var score = 0;

function userClick1(n) {
    $(`#faceCard-${n}`).css("display", "block");
    $(`#backCard-${n}`).css("display", "none");
    click++;
    console.log("click", click)
}

$(document).ready(function() {
    $('#play').click(function() {
        location.reload();
    });
    //first card
    $("#backCard-1").click(function() {
        userClick1(1)
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#faceCard-1").css("display", "block");
            $("#faceCard-5").css("display", "block");
            console.log("ok1");
            score++;
            $("#score").html(score); //<b>Score :</b>
            click = 0
            console.log("score", score)
        } ///if is not equalle 
        if (click === 2 && ($("#faceCard-2").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#backCard-1").css("display", "block");
            $("#backCard-2").css("display", "block");
            $("#faceCard-1").animate({ display: "none" }, 2000);
            $("#faceCard-2").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#backCard-1").css("display", "block");
            $("#backCard-3").css("display", "block");
            $("#faceCard-1").animate({ display: "none" }, 2000);
            $("#faceCard-3").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-4").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#backCard-1").css("display", "block");
            $("#backCard-4").css("display", "block");
            $("#faceCard-1").animate({ display: "none" }, 2000);
            $("#faceCard-4").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }

        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
            $("#backCard-1").css("display", "block");
            $("#backCard-6").css("display", "block");
            $("#faceCard-1").animate({ display: "none" }, 2000);
            $("#faceCard-6").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
    });

    ///sec card
    $("#backCard-2").click(function() {
        userClick1(2)
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#faceCard-2").css("display", "block")
            $("#faceCard-6").css("display", "block")
            console.log("ok2");
            score++;
            $("#score").html(score); //<b>Score :</b>
            click = 0
            console.log("score", score);
        }
        ///if is not equalle 
        if (click === 2 && ($("#faceCard-1").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#backCard-2").css("display", "block");
            $("#backCard-1").css("display", "block");
            $("#faceCard-2").animate({ display: "none" }, 2000);
            $("#faceCard-1").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#backCard-2").css("display", "block");
            $("#backCard-3").css("display", "block");
            $("#faceCard-2").animate({ display: "none" }, 2000);
            $("#faceCard-3").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;


        }
        if (click === 2 && ($("#faceCard-4").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#backCard-2").css("display", "block");
            $("#backCard-4").css("display", "block");
            $("#faceCard-2").animate({ display: "none" }, 2000);
            $("#faceCard-4").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;


        }
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#backCard-2").css("display", "block");
            $("#backCard-5").css("display", "block");
            $("#faceCard-2").animate({ display: "none" }, 2000);
            $("#faceCard-5").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
    })

    ///Third card
    $("#backCard-3").click(function() {
        userClick1(3)
        if (click === 2 && ($("#faceCard-4").css("display") === "block") && ($("#faceCard-3").css("display") === "block")) {
            $("#faceCard-4").css("display", "block");
            $("#faceCard-3").css("display", "block");
            console.log("ok3");
            score++;
            $("#score").html(score); //<b>Score :</b>
            click = 0
            console.log("score", score)
        }
        ///if is not equalle 
        if (click === 2 && ($("#faceCard-1").css("display") === "block") && ($("#faceCard-3").css("display") === "block")) {
            $("#backCard-3").css("display", "block");
            $("#backCard-1").css("display", "block");
            $("#faceCard-3").animate({ display: "none" }, 2000);
            $("#faceCard-1").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;


        }
        if (click === 2 && ($("#faceCard-2").css("display") === "block") && ($("#faceCard-3").css("display") === "block")) {
            $("#backCard-3").css("display", "block");
            $("#backCard-2").css("display", "block");
            $("#faceCard-3").animate({ display: "none" }, 2000);
            $("#faceCard-2").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;


        }
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-3").css("display") === "block")) {
            $("#backCard-3").css("display", "block");
            $("#backCard-5").css("display", "block");
            $("#faceCard-5").animate({ display: "none" }, 2000);
            $("#faceCard-3").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;


        }
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-3").css("display") === "block")) {
            $("#backCard-3").css("display", "block");
            $("#backCard-6").css("display", "block");
            $("#faceCard-3").animate({ display: "none" }, 2000);
            $("#faceCard-6").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;
        }
    })

    ///Fourth card

    $("#backCard-4").click(function() {
        userClick1(4)
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#faceCard-3").css("display", "block");
            $("#faceCard-4").css("display", "block");
            console.log("ok3");
            score++;
            $("#score").html(score); //<b>Score :</b>
            click = 0;
            console.log("score", score);
        }
        ///if is not equalle 
        if (click === 2 && ($("#faceCard-1").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#backCard-4").css("display", "block");
            $("#backCard-1").css("display", "block");
            $("#faceCard-4").animate({ display: "none" }, 2000);
            $("#faceCard-1").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-2").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#backCard-4").css("display", "block");
            $("#backCard-2").css("display", "block");
            $("#faceCard-4").animate({ display: "none" }, 2000);
            $("#faceCard-2").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#backCard-4").css("display", "block");
            $("#backCard-5").css("display", "block");
            $("#faceCard-4").animate({ display: "none" }, 2000);
            $("#faceCard-5").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;

        }
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-4").css("display") === "block")) {
            $("#backCard-4").css("display", "block");
            $("#backCard-6").css("display", "block");
            $("#faceCard-4").animate({ display: "none" }, 2000);
            $("#faceCard-6").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;
        }
    })

    ///fifth card
    $("#backCard-5").click(function() {
            userClick1(5)
            if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-1").css("display") === "block")) {
                $("#faceCard-1").css("display", "block");
                $("#faceCard-5").css("display", "block");
                console.log("ok1");
                score++;
                $("#score").html(score); //<b>Score :</b>
                click = 0;
                console.log("score", score)
            }

            ///if is not equalle 
            if (click === 2 && ($("#faceCard-2").css("display") === "block") && ($("#faceCard-5").css("display") === "block")) {
                $("#backCard-2").css("display", "block");
                $("#backCard-5").css("display", "block");
                $("#faceCard-2").animate({ display: "none" }, 2000);
                $("#faceCard-5").animate({ display: "none" }, 2000);
                console.log("no");
                click = 0;


            }
            if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-5").css("display") === "block")) {
                $("#backCard-5").css("display", "block");
                $("#backCard-3").css("display", "block");
                $("#faceCard-5").animate({ display: "none" }, 2000);
                $("#faceCard-3").animate({ display: "none" }, 2000);
                console.log("no");
                click = 0;

            }
            if (click === 2 && ($("#faceCard-4").css("display") === "block") && ($("#faceCard-5").css("display") === "block")) {
                $("#backCard-5").css("display", "block");
                $("#backCard-4").css("display", "block");
                $("#faceCard-5").animate({ display: "none" }, 2000);
                $("#faceCard-4").animate({ display: "none" }, 2000);
                console.log("no");
                click = 0;

            }

            if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-5").css("display") === "block")) {
                $("#backCard-5").css("display", "block");
                $("#backCard-6").css("display", "block");
                $("#faceCard-5").animate({ display: "none" }, 2000);
                $("#faceCard-6").animate({ display: "none" }, 2000);
                console.log("no");
                click = 0;

            }
        })
        ///Sixth card
    $("#backCard-6").click(function() {
        userClick1(6)
        if (click === 2 && ($("#faceCard-6").css("display") === "block") && ($("#faceCard-2").css("display") === "block")) {
            $("#faceCard-2").css("display", "block");
            $("#faceCard-6").css("display", "block");
            console.log("ok2");
            score++;
            $("#score").html(score); //<b>Score :</b>
            click = 0
            console.log("score", score)
        }

        ///if is not equalle 
        if (click === 2 && ($("#faceCard-1").css("display") === "block") && ($("#faceCard-6").css("display") === "block")) {
            $("#backCard-6").css("display", "block");
            $("#backCard-1").css("display", "block");
            $("#faceCard-6").animate({ display: "none" }, 2000);
            $("#faceCard-1").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0;
        }
        if (click === 2 && ($("#faceCard-3").css("display") === "block") && ($("#faceCard-6").css("display") === "block")) {
            $("#backCard-6").css("display", "block");
            $("#backCard-3").css("display", "block");
            $("#faceCard-6").animate({ display: "none" }, 2000);
            $("#faceCard-3").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0

        }
        if (click === 2 && ($("#faceCard-4").css("display") === "block") && ($("#faceCard-6").css("display") === "block")) {
            $("#backCard-6").css("display", "block");
            $("#backCard-4").css("display", "block");
            $("#faceCard-6").animate({ display: "none" }, 2000);
            $("#faceCard-4").animate({ display: "none" }, 2000);
            console.log("no");

        }
        if (click === 2 && ($("#faceCard-5").css("display") === "block") && ($("#faceCard-6").css("display") === "block")) {
            $("#backCard-6").css("display", "block");
            $("#backCard-5").css("display", "block");
            $("#faceCard-6").animate({ display: "none" }, 2000);
            $("#faceCard-5").animate({ display: "none" }, 2000);
            console.log("no");
            click = 0
        }
    })

})