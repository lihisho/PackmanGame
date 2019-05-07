function validateRegister() {

    var username = $("form#register_form input[name='username']").val();
    var password = $("form#register_form input[name='password']").val();

    var form = $("#register_form");
    form.validate({
        rules: {
            "username": {
                required: true,
                username_check: true

            },
            "email": {
                required: true,
                email: true
            },
            "firstName": {
                required: true,
                name_check: true,
                maxlength: 10
            },
            "lastName": {
                required: true,
                name_check: true,
                maxlength: 10
            },
            "password": {
                required: true,
                pass_check: true,
                minlength: 8
            }
        },
        messages: {
            "username":{
                required:"Enter userName",
                username_check: "The user name already exists"
            },
            "firstName":{
                required:"Enter first name",
                name_check: "Please enter letters only"
            },
            "lastName":{
                required:"Enter last name",
                name_check: "Please enter letters only"
            },
            "password":{
                required:"Enter password name",
                pass_check: "Please enter letters and numbers only"
            }
        }
    });
    jQuery.validator.addMethod('name_check', function(value, element) {
        if (/^[a-zA-Z]+$/.test(value))
            return true;
    });
    jQuery.validator.addMethod('pass_check', function(value, element) {
        if (/^[A-Za-z0-9]+$/.test(value))
            return true;
    });
    jQuery.validator.addMethod('username_check', function(value, element) {
        var isAlreadyInserted = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i] === value) {
                isAlreadyInserted = true;
            }
        }
        if (!isAlreadyInserted) {
            return true;
        }
    });

    if(form.valid()){
        users.push(username);
        passwords.push(password);
        toggle('Login');
        $("form#register_form input[name='username']").val('');
        $("form#register_form input[name='firstName']").val('');
        $("form#register_form input[name='lastName']").val('');
        $("form#register_form input[name='email']").val('');
        $("form#register_form input[name='password']").val('');
        $("form#register_form input[name='date']").val('');

    }
    return false;
}





    /* validation end */


function save(username, password){

    //loop through your username array to check


    //if the username is not in the array, insert it

}

