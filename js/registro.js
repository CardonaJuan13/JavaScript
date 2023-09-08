const register = document.getElementById("register-form");

register.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem(username, password);
    window.location.href = "login.html";
});