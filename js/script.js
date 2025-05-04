{
    const playGame = function (playerInput){
    clearMessages();

    const getMoveName = function (argMoveId){
        if (argMoveId == 1){
        return 'kamień';
        }
        if (argMoveId == 2){
            return 'papier';
        }
        if (argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    const displayResult = function (argComputerMove, argPlayerMove){
        if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Ja wygrywam!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ja wygrywam!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ja wygrywam!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        }
        else printMessage('Wprowdź liczbę od 1 do 3!');
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

    document.getElementById('play-rock').addEventListener('click', function() {playGame(1);});
    document.getElementById('play-paper').addEventListener('click', function() {playGame(2);});
    document.getElementById('play-scissors').addEventListener('click', function() {playGame(3);});
}