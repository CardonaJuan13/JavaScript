const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    const contraseñaGuardada = localStorage.getItem(usuario);
    if (contraseñaGuardada === contraseña) {
        window.location.href = "./index.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
});
