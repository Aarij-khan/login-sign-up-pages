var email = document.getElementById("email3");
var pswd = document.getElementById("pswd2");
var butt = document.getElementById("butt");



pressTwo = () => {
    if (email.value != "" && pswd.value != "") {
        var one = localStorage.getItem("Email");
        var three = localStorage.getItem("Passwords");
        if (email.value == one && pswd.value == three) {
            alert("Login succussfull");
            window.location = "home.html";
        } else {
            alert("wrong details");
        }
    }
}

showpswd = (icon) => {
    var pswd3 = document.getElementById("pswd2");
    if (pswd3.value != "") {
        if (pswd3.type == "password") {
            pswd3.type = "text";
            icon.className = "fa-regular fa-eye-slash"

        } else {
            pswd3.type = "password";
            icon.className = "fa-regular fa-eye"
        }

    }

    

}
logout = () => {
    // localStorage.removeItem("Email");
    // localStorage.removeItem("Passwords");
    alert("Logout succussfully")
    window.location = "Loginpage.html";
}

// for sign up page
ChangeIcon = (element) => {
    var pswd1 = document.getElementById("pswd1");
    if (pswd1.value != "") {
        if (pswd1.type == "password") {
            pswd1.type = "text";
            element.className = "fa-regular fa-eye-slash"

        } else {
            pswd1.type = "password";
            element.className = "fa-regular fa-eye"
        }

    }


}
// sign up page Fuctionality start
Login = () => {
    window.location = "Loginpage.html";

}

SignUp = () => {
    var x = document.getElementById("email1").value;
    var y = document.getElementById("email2").value;
    var z = document.getElementById("pswd1").value;
    if (x !=""&& y != ""&& z != "") {
        
    localStorage.setItem("Email", x)
    localStorage.setItem("UserName", y)
    localStorage.setItem("Passwords", z)
    alert("Account created")
    window.location = "Loginpage.html";
}
}
checkOne = () => {
    var emailing = localStorage.getItem("Email")
    var UserNames = localStorage.getItem("UserName")
    var Password = localStorage.getItem("Passwords")
    if (emailing != null && Password != null && UserNames != null) {
        window.location = "Loginpage.html";

    }
}
clickTogoSignup = () => {
    localStorage.removeItem("Email")
    localStorage.removeItem("UserName")
    localStorage.removeItem("Passwords")
    window.location = "index.html"

}
