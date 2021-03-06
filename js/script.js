{
let score=0;
let scoreElement=document.getElementById('score')
console.log (scoreElement)

const playGame = (playerInput) => {
  clearMessages();

  const getMoveName = (argMoveId) => {
    if(argMoveId == 1){
      return 'kamień';
    }
    else if (argMoveId == 2){
      return 'papier';
    }
    else if (argMoveId == 3){
      return 'nożyce';
    }
   else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  const displayResult = (argComputerMove, argPlayerMove) => {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
      score=score+1;
      scoreElement.innerText=score;
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      printMessage('Nieznany ruch!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
      score=score+1;
      scoreElement.innerText=score;
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      printMessage('Nieznany ruch!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
      score=score+1;
      scoreElement.innerText=score;
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
      printMessage('Nieznany ruch!');
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

/*if(randomNumber == '1'){
  computerMove = 'kamień';
}
else if (randomNumber == '2') {
	computerMove = 'papier';
}
else if (randomNumber == '3') {
  	computerMove = 'nożyce';
}*/
/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2') {
	playerMove = 'papier';
}
else if (playerInput == '3') {
  	playerMove = 'nożyce';
}*/
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});
}