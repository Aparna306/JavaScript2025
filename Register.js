function validate() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    if (fullname == "") {
      alert("Please enter fullname");
      return false;
    } else if (email == "") {
      alert("Please enter Email");
      return false;
    } else if (password == "") {
      alert("Please enter Password");
      return false;
    } else if (confirmPassword == "") {
      alert("Please enter confirm Password");
      return false;
    }
  
    // Check if the email already exists
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
  
    // Check if any user in the array has the same email
    let existingUser = users.find(user => user.email === email);
  
    if (existingUser) {
      alert("Email is already registered");
      return false; // Don't allow form submission
    }
  
    // If email is not found, register the user
    let user = {
      id: Number(new Date()), // unique ID based on current timestamp
      fullname: fullname,
      email: email,
      password: password,
    };
  
    users.push(user); // Push the new user to the array
    let userString = JSON.stringify(users); // Convert the array to a string
    localStorage.setItem("users", userString); // Store it in localStorage
  
    return true; // Allow form submission
  }
  