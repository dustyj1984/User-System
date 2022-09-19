function login(){
    console.log("lgoin function");
    //get the values from email and password
    let userName= $("#userName").val();
    let password= $("#userPass").val();

    //flag
    let flag=true;
    //get the user from LS
    let users=readUsers();
    //travel the array
    for(let i=0; i<users.length; i++){
    //compare the credentials
    let user= users[i];
    if(user.password==password && user.email==userName){
        //redirect user to user.html
            console.log("welcome");
            window.location = "users.html";
        
    }
    else{
        flag= false;
    }

        //diplay the msg invalid credentials
}
//diplay the msg invalid credentials
if(!flag) {
    $("#alert-error").removeClass("hide");
    setTimeout(function(){
            $("#alert-error").addClass("hide");
            }, 3000);

    }

}

function init(){
    $("#loginBtn").click(login);
}

window.onload = init;