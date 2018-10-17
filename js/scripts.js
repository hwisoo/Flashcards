$(document).ready(function(){
    $("div.word").click(function(){
        $(this).next().show();   
    });
    $("div.def").click(function(){
        $(this).hide();
    });

});