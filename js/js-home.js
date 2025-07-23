var username=localStorage.getItem("username")
var user=document.getElementById("username");
if (username) {
    localStorage.setItem("username",username)
    document.getElementById("login").textContent=username;
} else {
    
    document.getElementById("login").textContent="login";
   
}