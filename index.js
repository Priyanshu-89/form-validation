function validation() {
    let user = document.getElementById("username").value;
    var userErrorMessage = document.getElementById('user');

    let pass = document.getElementById("password").value;


    let conpass = document.getElementById("conpass").value;


    let email = document.getElementById("email").value;


    let mobile = document.getElementById("mobnumber").value;

    userErrorMessage.innerHTML = '';


    // username validation start here
    if (user.trim() === "") {
        document.getElementById('user').innerHTML = '**Please Enter Your Name';

        return false;
    }

    if (user.length < 3 || user.length > 20) {
        document.getElementById('user').innerHTML = "**Username length must be between 3 and 20 characters"

        return false;
    }

    if (!/^[A-Za-z]+$/.test(user)) {
        document.getElementById('user').innerHTML = '**Only characters allowed';
        return false;
    }

    // username validation ends here

    // Email validation start here 

    if (email.trim() === "") {
        document.getElementById('mail').innerHTML = '**Please Enter Your Email';
        return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('mail').innerHTML = '**Please Enter a Valid Email Address';
        return false;
    } else {
        document.getElementById('mail').innerHTML = ''; // Clear the error message
    }

    // Email validation end here

    // passowrd validation start here

    if (pass.trim() === "") {
        document.getElementById('pass').innerHTML = '**Please Enter Your Password';
        return false;
    } else if (pass.length < 8 || pass.length > 20) {
        document.getElementById('pass').innerHTML = "**Password Length Must Be Between 8 And 20 Characters";
        return false;
    } else {
        document.getElementById('pass').innerHTML = ''; // Clear the error message
    }
    // password validation ends here





    // confirm password validation starts here

    if (conpass.trim() === "") {
        document.getElementById('confirmpassword').innerHTML = 'Please Enter Confirm Password';
        return false;
    } else if (conpass !== pass) {
        document.getElementById('confirmpassword').innerHTML = 'Passwords do not match';
        return false;
    } else {
        document.getElementById('confirmpassword').innerHTML = ''; // Clear the error message
    }



    // mobile validation ends here

    if (mobile.trim() === "") {
        document.getElementById('mobile').innerHTML = 'Please Enter Your mobile number';
        return false;
    } else if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        document.getElementById('mobile').innerHTML = 'Enter a valid 10-digit mobile number';
        return false;
    } else {
        document.getElementById('mobile').innerHTML = '';
    }



    // mobile validation ends here


    return true;
}