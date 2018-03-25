jQuery(document).ready(function($){
    

    $("#login").click(function(){
         
         $('#div-signup').fadeOut('fast', function(){
            $('#div-login').fadeIn('fast');
        });
    });

    $("#signup").click(function(){
        
         $('#div-login').fadeOut('fast', function(){
            $('#div-signup').fadeIn('fast');
        });
    	
    });
});