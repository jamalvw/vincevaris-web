window.onload = function()
{
	const roundsTxt = document.getElementById('rounds');
	const scoreTxt = document.getElementById('score');
	const resultTxt = document.getElementById('result');

	const rockBtn = document.getElementById('rock');
	const paperBtn = document.getElementById('paper');
	const scissorsBtn = document.getElementById('scissors');

	rockBtn.onclick = () => playRound('Rock');
	paperBtn.onclick = () => playRound('Paper');
	scissorsBtn.onclick = () => playRound('Scissors');

	const choices = ['Rock', 'Paper', 'Scissors'];

	let rounds = 0;
	let wins = 0;
	let losses = 0;

	function getComputerChoice()
	{
		return choices[Math.floor(Math.random() * choices.length)];
	}

	function checkState(a, b)
	{
		if (a === b) return 'tie';

		// Win conditions
		if (a === 'Rock' && b === 'Scissors' ||
			a === 'Paper' && b === 'Rock' ||
			a === 'Scissors' && b == 'Paper') return 'win';
		// Lose conditions
		if (a === 'Rock' && b === 'Paper' ||
			a === 'Paper' && b === 'Scissors' ||
			a === 'Scissors' && b == 'Rock') return 'lose';
	}

	function playRound(playerSelection)
	{
		const cpuSelection = getComputerChoice();

		resultTxt.innerHTML = `You chose <strong>${playerSelection}</strong>. Computer chose <strong>${cpuSelection}</strong>.`;

		switch (checkState(playerSelection, cpuSelection))
		{
			case 'win':
				wins++;
				rounds++;
				resultTxt.innerHTML += `<br><br>Round won! <strong>${playerSelection}</strong> beats <strong>${cpuSelection}</strong>.`;
				break;
			case 'lose':
				losses++;
				rounds++;
				resultTxt.innerHTML += `<br><br>Round lost! <strong>${playerSelection}</strong> beats <strong>${cpuSelection}</strong>.`;
				break;
			case 'tie':
				resultTxt.innerHTML += `<br><br>Round tied! You both picked <strong>${playerSelection}</strong>.`;	
				break;
		}

		scoreTxt.innerHTML = `${wins} - ${losses}`;
		
		if (wins >= 3 || losses >= 3)
		{
			if (wins > losses)
				resultTxt.innerHTML += `<br><br>Great job! You won <strong>${wins}</strong> - <strong>${losses}</strong>.`;
			else
				resultTxt.innerHTML += `<br><br>Game over! You lost <strong>${wins}</strong> - <strong>${losses}</strong>.`;

			rockBtn.disabled = true;
			paperBtn.disabled = true;
			scissorsBtn.disabled = true;
		}
		else
		{
			roundsTxt.innerHTML = `Round ${rounds + 1}`;
		}
	}
}