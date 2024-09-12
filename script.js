function submitPassword() {
    const password = document.getElementById('passwordInput').value;
    
    // Check if the entered password is correct
    if (password === "dillip.git") {
        // Redirect to the welcome.html page
        window.location.href = "welcome.html";
    } else {
        // If incorrect, alert the user
        alert("Incorrect password. Please try again.");
    }
}
