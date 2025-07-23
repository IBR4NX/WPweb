
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var errorMessage = document.getElementById("error-message");
  
    if (username  && password) {
        alert("Login successful!");
        localStorage.setItem("username",username)
        window.location.href = 'home.html'; 
    } else {
        errorMessage.style.display = "block";  
        alert("Error");
        a
    }
});
