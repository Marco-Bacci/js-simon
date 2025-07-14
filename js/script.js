// recupero elementi del dom: button per avviare la l'evento, countdown e numeri random, form, input
const button = document.querySelector(".btn");
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
  countDown.innerText = seconds;
  seconds--;
  if (seconds === 0) {
    clearInterval(intervalId);
    form.classList.remove("d-none");
    countDown.classList.add("d-none");
    randomNumList.classList.add("d-none");

    instructions.innerText = "Inserisci tutti i numeri che ricordi";
  }
}, 1000);

// creo un evento sul bottone
button.addEventListener(`click`, function(e)  
{
  e.preventDefault();
// // richiamo gli input e il messaggio dal DOM
const inputs = document.querySelectorAll('.form-control')
const message = document.getElementById('message')
// ciclo inputs per creare un array
const userArray = []
 for (let i = 0; i < inputs.length; i++){
  userArray.push(inputs[i].value)
 }
// dichiaro variabile numeri corretti e ciclo il nuovo array creato per confrontare i numeri
const correctNumbers = []
let correctNum = 0;
for (let i = 0; i < userArray.length; i++){
  if(randomNumbers.includes(parseInt(userArray[i]))){
    correctNumbers.push(userArray[i])
    correctNum = correctNum + 1 ;
  }
}
if(correctNum == 5){
  message.innerText = `HAI VINTO I numeri corretti sono ${correctNumbers}!`
  message.classList.remove('text-danger')
  message.classList.add('text-success')
}
else{
  message.innerText = `Hai indovinato ${correctNum} numeri: ${correctNumbers}`

}
})
