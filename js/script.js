// recupero elementi del dom: button per avviare la l'evento, countdown e numeri random, form
const button = document.getElementById('message')
const countDown = document.getElementById('countdown')
const numbers = document.getElementById('numbers-list')
const form = document.getElementById('answer-form')
// creo una funziona che mi genera i numeri random 
const generateRandomNumbers = () => {
  return Math.floor(Math.random()*30) +1
 
}
