$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            }

        }
        

    })
})