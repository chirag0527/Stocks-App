const message = document.querySelector('#message');
const checkButton = document.querySelector('#check-btn');
const initialInput = document.querySelector('.one');
const quantityInput = document.querySelector('.two');
const currentInput = document.querySelector('.three');
const audioTurn = new Audio("ting.mp3");

checkButton.addEventListener('click', createVariables);

function createVariables() {
	let initialPrice = Number(initialInput.value);
	let currentPrice = Number(currentInput.value);
	let stocksQuantity = Number(quantityInput.value);

	calculateProfitLoss(initialPrice, stocksQuantity, currentPrice);
}


function calculateProfitLoss(initial, quantity, current) {
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		audioTurn.play();
		message.style.color = 'red';
		message.innerText = `Your loss is ${loss} rupees and loss Percentage is ${lossPercentage.toFixed(2)}% :(`;
	}
	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		audioTurn.play();
		message.style.color = 'green';
		message.innerText = `Your Profit is ${profit} rupees and profit Percentage is ${profitPercentage.toFixed(2)}% !`;
	}
	else {
		audioTurn.play();
		message.style.color = 'black';
		message.innerText = `No Profit No Loss. Glass is half full and half empty simultaneously xD`;
	}
}