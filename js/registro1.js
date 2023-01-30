// $(document).ready(function () {
//   $(".datepicker").datepicker({
//     format: "dd-mm-yyyy",
//     autoclose: true,
//     startDate: "0d",
//   });
// });

const fechadeNacimientos =
  JSON.parse(localStorage.getItem("fechadenacimiento")) || [];

function ampliarInfo() {
  const parrafo = document.getElementById("nacimiento");
  parrafo.style.display = "block";
}

// change = 0;
// function changeImg() {
//   let image = document.getElementById("imageAmpliar");
//   if (change == 1) {
//     image.src = "/images/icons8-flecha-contraer-64.png";
//     change = 0;
//   } else {
//     image.src = "/images/icons8-flecha-ampliar-64.png";
//     change = 1;
//   }
// }

function fechaNacimiento() {
  let dataBirth = document.getElementById("dateBirth").value;
  if (dataBirth) {
    document.getElementById("bottonContinuar").disabled = false;
  } else {
    document.getElementById("bottonContinuar").disabled = true;
  }
}

const guardarFecha = (event) => {
  event.preventDefault();
  let dataBirth = document.getElementById("dateBirth").value;

  let fechaNacimientos = new fechaNacimientos(fechaNacimiento);
  fechaNacimientos.push(fechaNacimientos);
  localStorage.setItem("fechaDeNacimiento", JSON.stringify(fechaNacimientos));
};
