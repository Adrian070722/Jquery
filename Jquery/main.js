$(document).ready(function(){

    $("#cedula").css({"background-color": "green"});
    $("#fecha").css({"background-color": "red"});
    $("#email").css({"background-color": "yellow"});
    
    $("#mensaje").click(function(){
        
        $("#mensaje").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
          });
        }); 

       

    });
    
   

