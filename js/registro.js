const registro = document.getElementById("register-form");

registro.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    localStorage.setItem(usuario, contraseña);
    window.location.href = "login.html";
});