  // JavaScript function to clear session or cookies and redirect to login
  window.onload = function() {
    // Clear session storage or any session-related data
    sessionStorage.removeItem("userSession"); // or localStorage.removeItem("userSession");
    
    
    // Redirect to the login page after a delay of 2 seconds
    setTimeout(function() {
      window.location.href = "login.html"; // Replace with the correct login page URL
    }, 2000); // Redirects after 2 seconds
  }