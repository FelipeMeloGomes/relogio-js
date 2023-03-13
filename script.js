const ponteiroHora = document.querySelector("#hour");
const ponteiroMinuto = document.querySelector("#minute");
const ponteiroSegundo = document.querySelector("#second");

function updateClock() {
  const data = new Date();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();

  const posicaoHora = (hora * 360) / 12 + (minuto * (360 / 60)) / 12;
  const posicaoMinuto = (minuto * 360) / 60 + (segundo * (360 / 60)) / 60;
  const posicaoSegundo = (segundo * 360) / 60;

  ponteiroHora.style.transform = `rotate(${posicaoHora}deg)`;
  ponteiroMinuto.style.transform = `rotate(${posicaoMinuto}deg)`;
  ponteiroSegundo.style.transform = `rotate(${posicaoSegundo}deg)`;

  // Salva a hora atual no localStorage a cada 5 segundos
  if (segundo % 5 === 0) {
    const horaAtual = `${hora}:${minuto}:${segundo}`;
    localStorage.setItem("horaAtual", horaAtual);
  }
}

setInterval(updateClock, 1000);

// Recupera a hora salva no localStorage
const horaSalva = localStorage.getItem("horaAtual");
console.log(`Hora salva: ${horaSalva}`);
