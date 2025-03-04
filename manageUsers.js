function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null; // Get the logged-in user from localStorage
    let usersTable = document.getElementById("usersTable");
    usersTable.innerHTML = ""; // Clear existing table content

    users.forEach(user => {
        let row = document.createElement("tr");

        // Only show the delete button if the logged-in user is not the same as the current user
        let deleteButton = (loggedInUser && loggedInUser.id !== user.id) ? 
            `<span class="action-links" onclick="deleteUser(${user.id})">Delete</span>` : '';

        row.innerHTML = `
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>
                <a href="./EditUser.html?id=${user.id}">Edit</a> |
                <span class="action-links" onclick="deleteUser(${user.id})">Delete</span>
            </td>
        `;
        usersTable.appendChild(row);
    });
}

function deleteUser(id) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter(user => user.id !== id); // Remove user by ID
    localStorage.setItem("users", JSON.stringify(users)); // Save updated user list to localStorage
    loadUsers(); // Reload the users list
}

// Call loadUsers when the page loads to display the users
loadUsers();
