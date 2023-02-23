var GameStarted = false;
var ComboOrder = [];  //red = 0, Blue = 1, Yellow = 2 & Green = 3
var PlayerCombo = []; //red = 0, Blue = 1, Yellow = 2 & Green = 3
var Failed = false
var PlayersTurn = false
var highscore = 0;

const Counter = $("#Counter")
const HS = $("#highscore")

$(document).ready(function(){
    document.addEventListener("keydown", function(event){
        TitlePress(event.key)
        });
    $("#res").fadeOut(0)
    
})

function TitlePress(key) {
    if(key==" "){
        if(!GameStarted){
            GameStart()
        }
    } else if(key == "Escape") {
        if(GameStarted && !Failed){
            GameEnd()
        }
    }
    }

function GameStart(){
    GameStarted = true;
    ComboOrder = [];
    PlayerCombo = [];
    Failed = false;
    PlayersTurn = false

    $("#title").html("Press ESC to resest")
    $(".items").empty()
    $("#res").fadeOut(1000)
    AddToCombo()

}

function GameEnd(){
    PlayersTurn = false
    Failed = true
    HighscroreCheck()
    $("body").css("background-color", "red")
    $("#title").html("You Died! :(")
    
    setTimeout(
        function() 
        {
            $("body").css("background-color", "white")
            
        }, 250);
    setTimeout(
        function() 
        {
            $("body").css("background-color", "red")
                
        }, 500);
        setTimeout(
        function() 
        {
            $("body").css("background-color", "white")
                
        }, 750);
        ShowcomboOrder()

    $("body").css("background-color", "red")
    setTimeout(
        function() 
        {
            GameStarted = false;
    $("#title").html("Press Spacebar To Start")
        }, 2500);
    

}

function ShowcomboOrder() {
    for(var i = 0; i < ComboOrder.length; i++){
        var col;
        console.log("add to order")
        switch(ComboOrder[i]){
            case 0:
                col = "red";
            break;
            case 1:
                col = "blue";
            break;
            case 2:
                col = "yellow";
            break;
            case 3:
                col = "green";
            break;

        }

        var div = document.createElement('div');
        $(div).css({
            "background-color" : col,
            "width" : "50px",
            "height" : "50px",
            "display" : "flex !important"
        }).addClass("mx-1")
        .hide()
        .attr('id', 'res');

        var span = document.createElement('h2')
        $(span).html(i+1)
        .appendTo(div)
        .addClass("font-weight-bold text-nowrap")

        $(div).appendTo($(".items")).fadeIn(1000)

        
    }

    $("#res").fadeIn(1000)
    
}

function HighscroreCheck(){
    if((ComboOrder.length - 1) > highscore){
        highscore = ComboOrder.length - 1
        HS.html("Highest Combo: " + highscore)
        console.log("HIGHSCORE")
    }
}

function AddToCombo(){
    let NewNum = Math.floor(Math.random() * 4)
    PlayerCombo = [];
    ComboOrder.push(NewNum);
    Counter.html("Combo Counter: " + ComboOrder.length)
    switch(NewNum){
        case 0:
            $("#red").css("background-color", "white")
            setTimeout(
                function() 
                {
                    $("#red").css("background-color", "red")
                }, 500);
        break;

        case 1:
            $("#blue").css("background-color", "white")
            setTimeout(
                function() 
                {
                    $("#blue").css("background-color", "blue")
                }, 500);
        break;

        case 2:
            $("#yellow").css("background-color", "white")
            setTimeout(
                function() 
                {
                    $("#yellow").css("background-color", "yellow")
                }, 500);
        break;

        case 3:
            $("#green").css("background-color", "white")
            setTimeout(
                function() 
                {
                    $("#green").css("background-color", "green")
                }, 500);
        break;
    }

    PlayersTurn = true;
}

function CheckIfCorrect(){
    for(var i = 0; i < PlayerCombo.length; i++){
        if(ComboOrder[i]==PlayerCombo[i]){

        } else {
            return false;
        }
    }
    PlayersTurn = true;
    return true;
}

function CheckOrder(){
    if(ComboOrder.length == PlayerCombo.length){
        if(CheckIfCorrect()){
            console.log("correct order")
            AddToCombo();
        } else {
            console.log("incorrect order")
            GameEnd();
        }
    } else if(!CheckIfCorrect()) {
        GameEnd()
    }
    
}

$("#red").click(function(){ //id 0
    if(PlayersTurn){
        PlayersTurn = false;
        PlayerCombo.push(0);
        $("#red").css("background-color", "black")
            setTimeout(
                function() 
                {
                    $("#red").css("background-color", "red")
                }, 250);
        CheckOrder()
    }
})

$("#blue").click(function(){ //id 1
    if(PlayersTurn){
        PlayersTurn = false;
        PlayerCombo.push(1);
        $("#blue").css("background-color", "black")
        setTimeout(
            function() 
            {
                $("#blue").css("background-color", "blue")
            }, 250);
        CheckOrder()
    }
})

$("#yellow").click(function(){ //id 2
    if(PlayersTurn){
        PlayersTurn = false;
        PlayerCombo.push(2);
        $("#yellow").css("background-color", "black")
        setTimeout(
            function() 
            {
                $("#yellow").css("background-color", "yellow")
            }, 250);
        CheckOrder()
    }
})

$("#green").click(function(){ //id 3
    if(PlayersTurn){
        PlayersTurn = false;
        PlayerCombo.push(3);
        $("#green").css("background-color", "black")
        setTimeout(
            function() 
            {
                $("#green").css("background-color", "green")
            }, 250);
        CheckOrder()
    }
})