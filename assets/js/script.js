
function confirmEmail(event) {
    event.preventDefault();

    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = "Email confirmed!";

    confirmationMessage.style.color = "blue";  
}

window.onload = function() {
    alert("Welcome to the website!"); // 
};



function showWelcomePopup() {
    
    var userResponse = confirm("Welcome to Acne Studios! Click OK to continue.");

    
    if (userResponse) {
        console.log("User clicked Continue.");
    } else {
        console.log("User cancelled.");
    }
}

showWelcomePopup();
