var canvas;
var c;

canvas = document.getElementById('canvas');
c = canvas.getContext('2d');



//-------------------------------------

$(function(){
    $(".help-link").click(function(){
        var id = $(this).data("ref");
        showHelp("#"+id);
    });

    $("#esegui").click(function(){
        var code = $("#codice").val();
        runCode(code);
    });

    $("#empty-canvas").click(function(){
       c.clearRect(0, 0, canvas.width, canvas.height); 
    })
});

function showHelp(id){
    $(".help").hide();
    $(id).toggle();
}

function runCode(code){
    $(".error").empty();
    try{
        eval(code);
    }catch(e){
        printError(e);
        console.log(e);
    }
}

function printError(error){
    $(".error").html(error);
}
