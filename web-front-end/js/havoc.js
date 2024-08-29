document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
        event.preventDefault();

        // Get target user
        const username = document.getElementById("other-username").value;

        // Get current user
        const user = (await (await fetch('http://127.0.0.1:4001/auth/user',{
            credentials:"include"
        })).json())?.payload;

        // Check if target user is the current user
        const isSameUser = username == user.username;
        if (isSameUser) {
            if (!window.confirm("You are trying to delete your account. Confirm?")) {
                return;
            }
        }

        // Request to delete target user
        const response = await fetch(`http://127.0.0.1:4001/auth/delete/user`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username }),
            credentials: 'include'
        });

        if (response.ok) {
            alert(username + " has been deleted.");

            if (isSameUser) {
                //TODO clear cookies
                window.location.href = './index.html';
            }
        }
        else {
            alert("Cannot delete " + username + ". Ensure that username is valid.");
        }
    });
    
});


