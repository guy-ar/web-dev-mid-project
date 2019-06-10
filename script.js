$(document).ready(function(){
    /*// load the menu HTML into the header
    $("header").load("menu.html");*/
    // load the main.html when document is ready
    $("main").load("main.html"); 

   /* // load the footer when document is ready
    $("footer").load("footer.html"); */

    // go back to main when brand is clicked
    $("#nav-home").click(function() {
    
        // Loading the content of contact.html into to .content class
        $("main").load("main.html");    
    });

    // upload contact page
    $("#nav-contact").click(function() {
        
        // Loading the content of contact.html into to .content class
        $("main").load("contact.html");    
    });
    
  });