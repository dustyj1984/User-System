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
    console.log(aUser);
   

    //clear the input
    $("input").val("");


}

function init(){

}