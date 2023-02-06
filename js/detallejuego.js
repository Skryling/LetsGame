let cuerpoTabla = document.querySelector("#cuerpoTabla");
const cargarEspecificaciones = () => {
  let tablaRow = document.createElement("tr");
  let contenidoHtml = `<td scope="row">Sistema Operativo</td> <td>${juegosEsp.sistemaOperativoMin}</td> <th scope="row">Sistema Operativo</th> <td>${juegosEsp.sistemaOperativoRecom}</td>`;
  tablaRow.innerHTML = contenidoHtml;
  cuerpoTabla.append(tablaRow);
};
cargarEspecificaciones();
