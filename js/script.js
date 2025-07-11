// recupero elementi del dom: button per avviare la l'evento, countdown e numeri random, form, input
const button = document.getElementById("message");
const countDown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const randomNumList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");

// creo una funzione che mi genera i numeri random
function generateRandomNumbers() {
  const num = [];
  for (let i = 0; num.length < 5; i++) {
    const random = Math.floor(Math.random() * 30) + 1;
    if(!num.includes(random)){
      num.push(random);
    }


  }
  return num;
}
const randomNumbers = generateRandomNumbers();

// ciclo per visualizzare i numeri

for (let i = 0; i < 5; i++) {
  randomNumList.innerHTML += `<li>${randomNumbers[i]}</li>`;
}

// definisco intervallo e controllo se i numeri sono uguali a 0 e in quel caso faccio apparire il form

let seconds = 10;

const intervalId = setInterval(() => {
  seconds--;
  countDown.innerText = seconds;
  if (seconds === 0) {
    clearInterval(intervalId);
    form.classList.remove("d-none");
    countDown.classList.add("d-none");
    randomNumList.classList.add("d-none");

    instructions.innerText = "Inserisci tutti i numeri che ricordi";
  }
}, 1000);
