function signupfunction() {
    Parse.initialize("9bId82gNkPxQ4sqx0LuVbk7EgpdJ2G2rqpmZS6UB", "eZA3ZPxsTgVaqqdCn8fnl0mC17dZ30yb6fZveGAY");
    var username = document.getElementById("signup-Username").value;
    var password = document.getElementById("signup-password").value;
    var mail = document.getElementById("signup-EmailAddress").value;
    var zona = document.getElementById("signup-Zone").value;
    var bicicode = Number(document.getElementById("signup-Bicicode").value);
    var telefono = Number(document.getElementById("signup-Phone").value);
    var rating = 3
    var emerCont1 = Number(document.getElementById("emerContact1").value);
    var emerCont2 = Number(document.getElementById("emerContact2").value);
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", mail);
    user.set("rating", rating);
    user.set("phone", telefono);
    user.set("zone", zona);
    user.set("bicicode", bicicode);
    user.set("emerCont1", emerCont1);
    user.set("emerCont2", emerCont2);

    user.signUp(null, {
        success: function (user) {
            function disappearer() {
                document.getElementById("signup-Form").style.display = "none";
                document.getElementById("login-Form").style.display = "block";
            }
            disappearer();
            alert("yes");
        },
        error: function (user, error) {
            alert("Error");
        }
    });
}

function loginfunction() {
    Parse.initialize("9bId82gNkPxQ4sqx0LuVbk7EgpdJ2G2rqpmZS6UB", "eZA3ZPxsTgVaqqdCn8fnl0mC17dZ30yb6fZveGAY");
    var username = document.getElementById("login-Username").value;
    var password = document.getElementById("login-Password").value;

    Parse.User.logIn(username, password, {
        success: function (user) {
            alert("Yes");
        },
        error: function (user, error) {
            alert("No");
        }
    });
}

function disappearer() {
    document.getElementById("login-Form").style.display = "none";
}


function changepagetocreate() {
    document.getElementById("logo").style.display = "none";
    document.getElementById("login-Form").style.display = "none";
    document.getElementById("signUppage").style.display = "block";
    
}

function changepagetosignin() {
    document.getElementById("logo").style.display = "block";
    document.getElementById("login-Form").style.display = "block";
    document.getElementById("signUppage").style.display = "none";
}