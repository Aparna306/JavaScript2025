let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find the user based on ID
        let user = users.find(u => u.id === userId);

        // If user exists, populate form fields
        if (user) {
            document.getElementById("fullname").value = user.fullname;
            document.getElementById("email").value = user.email;
        }

        function saveUser(event) {
            event.preventDefault();

            let newFullname = document.getElementById("fullname").value;
            let newEmail = document.getElementById("email").value;

            if (user) {
                // Update user details
                user.fullname = newFullname;
                user.email = newEmail;

                // Save updated users array back to localStorage
                localStorage.setItem("users", JSON.stringify(users));

                // Redirect to manage users page
                window.location.href = "manageUsers.html";
            }
        }