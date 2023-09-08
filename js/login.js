const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const contraseñaGuardada = localStorage.getItem(username);
    if (contraseñaGuardada === password) {
        window.location.href = "./index.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
});
