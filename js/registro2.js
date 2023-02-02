const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const guardarUsuario = () => {
  const fechaNacimiento1 = JSON.parse(
    localStorage.getItem("fechaDeNacimiento")
  );
  let id = Math.random().toString(30).substring(2); //Me genera un id mas simple
  let fechaNacimiento = fechaNacimiento1;
  let Pais = document.querySelector("#inputState").value;
  let Nombre = document.querySelector("#inputName").value;
  console.log(Nombre);
  let Apellido = document.querySelector("#inputSurname").value;
  let NombrePantalla = document.querySelector("#inputNameScreen").value;
  let Correo = document.querySelector("#inputEmail4").value;

  let usuario = new Usuario(
    id,
    fechaNacimiento,
    Pais,
    Nombre,
    Apellido,
    NombrePantalla,
    Correo
  );
  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

function mostrarPassword() {
  let contraseña = document.getElementById("txtPassword");
  if (contraseña.type == "password") {
    contraseña.type = "text";
    let buttonMostrar = document.getElementById("show_password");
    buttonMostrar.classList.add("d-none");
    let buttonOcultar = document.getElementById("ocultar_password");
    buttonOcultar.classList.remove("d-none");
  }
}
function OcultarPassword() {
  let contraseña = document.getElementById("txtPassword");
  if (contraseña.type == "text") {
    contraseña.type = "password";
    let buttonMostrar = document.getElementById("show_password");
    buttonMostrar.classList.remove("d-none");
    let buttonOcultar = document.getElementById("ocultar_password");
    buttonOcultar.classList.add("d-none");
  }
}
