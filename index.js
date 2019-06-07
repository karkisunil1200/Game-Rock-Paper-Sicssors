const button = document.querySelectorAll('button');
const message = document.querySelector('.message');
message.style.color = 'blue';

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', playGame);
}

function playGame(event) {
  let computerSelection = Math.random();
  console.log(computerSelection);
}
