const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min);

const number = getRandomNumber(1, 100);
alert(`Загаданное число: ${number}`);
let userNumber = 0;

while(userNumber != number) {
    let userInput = prompt('Угадай число от 1 до 100', 0);
    if(!userInput) {
        break;
    } else if(isNaN(userInput)) {
        alert('Введи число!')
        continue;
    } else {
        userNumber = parseInt(userInput);

        if(userNumber > number) {
            alert('Загаданное число меньше');
        } else if(userInput < number) {
            alert('Загаданное число больше');
        }
    }
}

if(userNumber == number) {
    alert('Поздравляю, Вы угадали!!!');
} else {
    alert('Игра окончена');
}