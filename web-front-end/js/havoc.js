document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
        event.preventDefault();
    
        const username = document.getElementById("other-username").value;    
        const response = await fetch(`http://127.0.0.1:4001/auth/delete/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username }),
            // credentials: 'include'
        });
    });
    
});


