const userInput = document.querySelector('#guess');
const btn = document.querySelector('.btn');
const details = document.querySelectorAll('.details p');

let number;
let guessedNumber = [];

function getRandomNumber() {
	number = Math.floor(Math.random() * 99 + 1);
	details[0].innerText = ``;
	details[1].innerText = `no. of Guesses : ${guessedNumber.length}`;
	userInput.disabled = false;
	details[2].innerText = `guessed numbers are: none`;
	userInput.value = null;
}

btn.onclick = () => {
	sol();
};
userInput.onkeypress = (e) => {
	if (e.keyCode == 13) {
		sol(e);
	}
};
function sol() {
	if (userInput.value != '' && btn.innerHTML == 'guess') {
		if (number > userInput.value) {
			details[0].innerText = `Your guess is too low`;
			guessedNumber.push(userInput.value);
			details[1].innerText = `No. of Guesses : ${guessedNumber.length}`;
			details[2].innerText = `Guessed Numbers are:${guessedNumber.join(',')}`;
		} else if (number < userInput.value) {
			details[0].innerText = `Your guess is too high`;
			guessedNumber.push(userInput.value);
			details[1].innerText = `No. of Guesses : ${guessedNumber.length}`;
			details[2].innerText = `Guessed Numbers are:${guessedNumber.join(',')}`;
		} else {
			details[0].innerText = `Yippie! You win!!`;
			details[1].innerText = `The number was ${number}`;
			details[2].innerText = `you guessed it in ${guessedNumber.length} guesses`;
			btn.innerText = `play again`;
			userInput.disabled = true;
		}
		userInput.value = null;
	} else if (btn.innerHTML == 'play again') {
		btn.innerHTML = 'guess';
		userInput.autofocus = true;
		userInput.disabled = false;
		guessedNumber = [];
		getRandomNumber();
	}
}
getRandomNumber();
