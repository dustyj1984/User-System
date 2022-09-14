//object contructor
function User(email,password,firstname,lastname,age,gender,address,phone,color,payment){
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.color = color;
    this.payment = payment;
    
    }
    
    function isValid(user){
        let valid = true;
        if(user.email == ""|| user.password == "" || user.firstname ==""){
            valid = false;
            alert("Please enter an email");
            }
            return valid;
            
    
    }
    
    function register(){
        //getting the value for the input
        let txtEmail = $("#userEmail").val();
        let txtPassword = $("#userPassword").val();
        let txtFirstName = $("#userFirstName").val();
        let txtLastName = $("#userLastName").val();
        let txtAge = $("#userAge").val();
        let txtGender = $("#userGender").val();
        let txtAddress = $("#userAddress").val();
        let txtPhone = $("#userPhone").val();
        let selColor = $("#userColor").val();
        let selPayment = $("#userPayment").val();
    
    
    
 
        //create the user obj
       let aUser = new User(txtEmail, txtPassword, txtFirstName, txtLastName, txtAge, txtGender, txtAddress, txtPhone, selColor, selPayment);
    
       
    
        //display the object in the console
        if(isValid(aUser)){
        saveUser(aUser);
       
    
        //clear the input
        $("input").val("");
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
    
    
    
    }
    
    window.onload=init;