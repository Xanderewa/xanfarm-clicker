// ✨ Mostrar una sola sección a la vez
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  const activa = document.getElementById(id);
  if (activa) {
    activa.style.display = 'block';
  }
}

// 🚀 Mostrar sección por defecto al iniciar
window.onload = function () {
  mostrarSeccion('perfil'); // Podés cambiar 'perfil' por otra sección si preferís
};
// 🌟 Probabilidades para Cofre de Plata
function abrirCofrePlata() {
  let random = Math.random();
  if (random <= 0.025) {
    alert("¡Cultivo legendario conseguido!");
  } else if (random <= 0.125) {
    alert("¡Cultivo épico conseguido!");
  } else {
    alert("Cultivo común conseguido.");
  }
}

// 🪙 Cofres Oro y Diamante (lógica de ejemplo)
function abrirCofreOro() {
  // Probabilidades ajustadas
  alert("Tesoro marino activado...");
}

function abrirCofreDiamante() {
  // Probabilidades legendarias
  alert("Profundidades mágicas liberadas...");
}
function comprarPaquete(paqueteID) {
  switch (paqueteID) {
    case 'paquete-inicio':
      alert("Has comprado el paquete de inicio: 100 llaves + 1 cultivo morado.");
      break;
    case 'paquete-pro':
      alert("Has comprado el paquete PRO: 250 llaves + 3 raros.");
      break;
    case 'paquete-avanzado':
      alert("Avanzado: 500 llaves + 2 morados + 2 raros.");
      break;
    case 'paquete-extraordinario':
      alert("Extraordinario: 700 llaves + 1 legendario.");
      break;
    case 'paquete-megaepico':
      alert("Mega Épico: 1000 llaves + 2 morados + 1 legendario.");
      break;
    case 'paquete-legendario':
      alert("Legendario: 2000 llaves + Rango VIP.");
      break;
  }
}

// 💰 Conversión de monedas por llaves
function convertirMonedas(cantidadMonedas) {
  let llaves = Math.floor(cantidadMonedas / 10);
  alert(`Has recibido ${llaves} llaves.`);
}
function borrarProgreso() {
  if (confirm("¿Seguro que deseas borrar tu progreso?")) {
    localStorage.clear();
    alert("Progreso borrado.");
  }
}

function ajustarBrillo() {
  document.body.style.filter = "brightness(1.2)";
  alert("Brillo ajustado.");
}

function toggleMusica() {
  // Implementación según sistema de audio
  alert("Música activada/desactivada.");
}

function conectarBilletera() {
  alert("Conectando a billetera digital...");
}

function verPoliticas() {
  alert("Políticas de privacidad: información y seguridad del jugador.");
}
document.getElementById("piña-dorada").style.backgroundImage = "url('URL_PIÑA')";
document.getElementById("uva-electrica").style.backgroundImage = "url('URL_UVA')";
document.getElementById("cereza-lava").style.backgroundImage = "url('URL_CEREZA')";
document.getElementById("flor-cacao").style.backgroundImage = "url('URL_CACAO')";
document.getElementById("melon-ambar").style.backgroundImage = "url('URL_MELON')";
document.getElementById("frijol-lunar").style.backgroundImage = "url('URL_FRIJOL')";
document.getElementById("zanahoria-cristal").style.backgroundImage = "url('URL_ZANAHORIA')";
document.getElementById("maiz-dulce").style.backgroundImage = "url('URL_MAIZ')";
document.getElementById("tomate-solar").style.backgroundImage = "url('URL_TOMATE')";
document.getElementById("trigo-solar").style.backgroundImage = "url('URL_TRIGO')";