function ampliarInfo() {
  const parrafo = document.getElementById("nacimiento");
  parrafo.classList.remove("d-none");
  let bottonAmpliar = document.getElementById("buttonAmpliar");
  bottonAmpliar.classList.add("d-none");
  let bottonContraer = document.getElementById("buttonContraer");
  bottonContraer.classList.remove("d-none");
}
function contraerInfo() {
  const parrafo = document.getElementById("nacimiento");
  parrafo.classList.add("d-none");
  let bottonAmpliar = document.getElementById("buttonAmpliar");
  bottonAmpliar.classList.remove("d-none");
  let bottonContraer = document.getElementById("buttonContraer");
  bottonContraer.classList.add("d-none");
}
function fechaNacimiento() {
  let dataBirth = document.getElementById("dateBirth").value;
  let bottonContinuar = document.getElementById("bottonContinuar");
  if (dataBirth) {
    bottonContinuar.classList.remove("deshabilitado");
    bottonContinuar.classList.add("habilitado");
  }
}

const guardarFecha = () => {
  let dataBirth = document.getElementById("dateBirth").value;
  localStorage.setItem("fechaDeNacimiento", JSON.stringify(dataBirth));
};
