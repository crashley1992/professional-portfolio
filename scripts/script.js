//onload the page will have the welcome and nabar fade in
$(document).ready(function(){
    //welcome fade in
        $(".display-4").hide();
        $(".display-4").load("index.html");
        $(".display-4").fadeIn(3000); 
    //navbar fade in
        $(".vertical-nav").hide();
        $(".vertical-nav").load("index.html");
        $(".vertical-nav").fadeIn(3000); 
    
    });