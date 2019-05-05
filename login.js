
 // $("#submitLogin").click(
function validateLogin(){
    var message = "";
    var found = false;
    var username=$('#username').val();
    var password=$('#password').val();
    if (username ==="")
        message = "Plaese enter a valid User-name";
    if (password ==="")
        message = "Plaese enter a valid password";

    for (var i in users) {
        if (username === users[i]) {
            found = true;
            if (password === passwords[i]) {
                $("#loggedInUser > b").text(username);
                $('#username').val('')
                $('#password').val('')
                toggle("Settings");
                return;
            }
            else{
                message = "The password is incorrect. Please try again!";
                break;
            }
        }
    }
    if (found === false)
        message = "The user name doesn't exist!";
    alert(message);
}
