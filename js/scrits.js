// Modal
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
  validar();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

// Validar Campos
function validar() {
  const nombre = document.querySelector("#nombre").value;
  const sueldo = document.querySelector("#sueldo").value;

  if (nombre.length == 0 || sueldo.length == 0) {
    alert("campos requeridos");
    console.log(nombre);
    return;
  } else {
    calcular(nombre, sueldo);
    modal.showModal();
  }
}
// Funcion Calcular
function calcular(nombre, sueldo) {
  // Valores fijos
  const exento = 181274.56;
  const primerLimite = 276411.57;
  const segundoLimite = 642817.63;

  //Variables Globales
  let impuestoAnual;
  let impuestoMensual;
  // Calculos
  let x = sueldo * 14 - 40000;
  let primeraComision = (primerLimite - exento) * 0.15;
  let segundaComision = (segundoLimite - primerLimite) * 0.2 + primeraComision;

  if (x <= exento) {
    impuestoAnual = "exento";
    impuestoMensual = "exento";
  } else if (x > exento && x <= primerLimite) {
    impuestoAnual = (x - exento) * 0.15;
    impuestoMensual = impuestoAnual / 12;
  } else if (x > primerLimite && x <= segundoLimite) {
    impuestoAnual = (x - primerLimite) * 0.2 + primeraComision;
    impuestoMensual = impuestoAnual / 12;
  } else if (x > segundoLimite) {
    impuestoAnual = (x - segundoLimite) * 0.25 + segundaComision;
    impuestoMensual = impuestoAnual / 12;
  }
  MostrarDatos(nombre, sueldo, impuestoAnual, impuestoMensual);
}
// Mostrar Datos en el modal
function MostrarDatos(nombre, sueldo, anual, mensual) {
  document.querySelector("#mostrarNombre").innerHTML = nombre;
  document.querySelector("#mostrarSueldo").innerHTML = `Lps. ${sueldo}`;
  document.querySelector("#anual").innerHTML = `Lps. ${anual}`;
  document.querySelector("#mensual").innerHTML = `Lps. ${mensual}`;
}
