function validate() {
    // Get the email and password from the form inputs
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if email and password fields are empty
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return false;
    }

    // Validate email format using regular expression
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Retrieve users from localStorage
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    // Check if the entered email and password match any user in localStorage
    let validUser = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            validUser = true;
            break;
        }
    }

    // If no matching user is found, show an error message
    if (!validUser) {
        alert("Wrong Email or Password.");
        return false;
    }

    // If login is successful, redirect to the login success page
    window.location.href = "./LoginSuccess.html";
    return true;
}
