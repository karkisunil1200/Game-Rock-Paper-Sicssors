const button = document.querySelectorAll('button');
const message = document.querySelector('.message');
const score = document.querySelector('.score');

const winner = [0, 0];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', playGame);
}

function playGame(event) {
  let playerSelection = event.target.innerText;
  let computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = 'Rock';
  } else if (computerSelection < 0.67) {
    computerSelection = 'Paper';
  } else {
    computerSelection = 'Scissors';
  }
  console.log(playerSelection, computerSelection);

  let result = checkwinner(playerSelection, computerSelection);
  console.log(result);

  if (result === 'Player') {
    result += 'Wins!!';
    winner[0]++;
  } else if (result === 'Computer') {
    result += 'Wins';
    winner[1]++;
  } else {
    result += ' results in a tie';
  }

  score.innerHTML = `Player 1: [ ${winner[0]}] Player 2: [ ${winner[1]}]`;
  messenger(playerSelection + ' vs ' + computerSelection + '<br><br> ' + result + '</br>');
}

function messenger(mess) {
  message.innerHTML = mess;
}

function checkwinner(player, co) {
  if (player === co) {
    return 'draw';
  }
  if (player === 'Rock') {
    if (co === 'Paper') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
  if (player === 'Paper') {
    if (co === 'Scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }

  if (player === 'Scissors') {
    if (co === 'Rock') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
}
