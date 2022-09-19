//object contructor
function User(email,password,name,age,gender,address,phone,color,payment){
    this.email = email;
    this.password = password;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.color = color;
    this.payment = payment;
    
    }
    
    function isValid(user){
        let valid = true;
        $("input").removeClass("input-error");
        if(user.email == ""){
            valid = false;
            $("#userEmail").addClass("input-error");
            
            console.log("Please enter missing information");
            }

            if(user.name==""){
                valid = false;
                $("#userName").addClass("input-error");
                console.log("Please enter missing information");
            }

            if(user.phone ==""){
                valid = false;
                $("#userPhone").addClass("input-error");
                console.log("Please enter missing information");
            
            }

            if(user.password.length == 0){
                valid = false;
                $("#userPassword").addClass("input-error");
            }

            return valid;
    }
    function validatePass(){
        
        let inputPass= $("#userPassword");
        let password= inputPass.val();
        if(password.length<6){
            inputPass.css("background-color","pink");
            
            displayError("the password is to short");
    }else{
       
         inputPass.css("background-color","green");
            console.log("Password has the correct extension");
            hideError();
     }
}
    function displayError(msg){

        $("#alert-error").removeClass("hide").text(msg);   
    }
    function hideError(){
        $("#alert-error").addClass("hide");
    }
    function register(){
        //getting the value for the input
        let txtEmail = $("#userEmail").val();
        let txtPassword = $("#userPassword").val();
        let txtName = $("#userName").val();
        let txtAge = $("#userAge").val();
        let txtGender = $("#userGender").val();
        let txtAddress = $("#userAddress").val();
        let txtPhone = $("#userPhone").val();
        let selColor = $("#userColor").val();
        let selPayment = $("#userPayment").val();
    
    
    
 
        //create the user obj
       let aUser = new User(txtEmail, txtPassword, txtName, txtAge, txtGender, txtAddress, txtPhone, selColor, selPayment);
    
       
    
        //display the object in the console
        if(isValid(aUser)){
            hideError();
            saveUser(aUser);
            
            //clear the input
         $("input").val("");
         
        }else{
            displayError("Please complete all the fields");
        
        }
    }

    
    function init(){
        //hook event
        $("#btnSave").on("click",register);
    
        $(".form-container").hide();
        $("#btnShowForm").on("click",function(){
            //$(".form-container").show();
            $(".form-container").slideDown(2000);
        });
        $("#btnCloseForm").on("click",function(){
            //$(".form-container").show();
                $(".form-container").slideUp(1000);
        });
    
        $("#userPassword").keyup(validatePass);
    
    }
    
    window.onload=init;