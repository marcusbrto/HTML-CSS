//variavel global
let intervalo;

let minutosInput = document.getElementById('timer-minutes');
let botao = document.getElementById('start');
let display = document.getElementById('display');

botao.addEventListener('click', () => {
  clearInterval(intervalo); // 🧠 evita bug de múltiplos timers

  let minutos = Number(minutosInput.value);
  let tempo = minutos * 60;

  intervalo = setInterval(() => {
    tempo--;

    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;

    min = min < 10 ? '0' + min : min;
    seg = seg < 10 ? '0' + seg : seg;

    display.innerHTML = `${min}:${seg}`;

    if (tempo <= 0) {
      clearInterval(intervalo);
      alert('Tempo acabou!');

      let audio = new Audio('som.mp3');
      audio.play();
    }
  }, 1000);
});
