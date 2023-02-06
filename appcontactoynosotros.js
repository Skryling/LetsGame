// document.getElementById("up").addEventListener("click", top);


// function top() {
//     let arriba = document.documentElement.scrollTop;
//     if (arriba > 0){
//         window.requestAnimationFrame(up);
//         window.scrollTo (0,0);
//     }

// }

// btnUp = document.getElementById("up");
// window.onscroll = function () {
//     let scroll = document.documentElement.scrollTop;
//     if (scroll > 1) {
//         alert(scroll)
//         btnUp.style.transform="scale(1)";
//     } else if (scroll < 1) {
//         btnUp.style.transform="scale(1)";
//     }     
    
// }
const submit = (event) =>{
    event.preventDefault();
}

let contenedor = document.querySelector("#contenedorTicket");
const crearTicket = () => {
    contenedorTicket.innerHTML = "";
    let columna = document.createElement("div");
    columna.className = "col";
      let tarjeta = `<p> Se ha creado correctamente su ticket, revise su email para seguirlo </p>`;

  columna.innerHTML = tarjeta;
  contenedor.appendChild(columna);      
}
crearTicket()