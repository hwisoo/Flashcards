$(document).ready(function(){
    $("div.word").click(function(){
        $(this).next().fadeIn();   
    });
    $("div.def").click(function(){
        $(this).fadeOut();
    });

});