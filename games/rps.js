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

		resultTxt.innerHTML = `You chose ${playerSelection}. Computer chose ${cpuSelection}.`;

		switch (checkState(playerSelection, cpuSelection))
		{
			case 'win':
				wins++;
				rounds++;
				resultTxt.innerHTML += `<br><br>Round won! ${playerSelection} beats ${cpuSelection}.`;
				break;
			case 'lose':
				losses++;
				rounds++;
				resultTxt.innerHTML += `<br><br>Round lost! ${playerSelection} beats ${cpuSelection}.`;
				break;
			case 'tie':
				resultTxt.innerHTML += `<br><br>Round tied! You both picked ${playerSelection}.`;	
				break;
		}

		roundsTxt.innerHTML = `Round ${rounds + 1}`;
		scoreTxt.innerHTML = `${wins} - ${losses}`;
		
		//if (wins > rounds / 2 || losses > rounds / 2)
		//{
		//	if (wins == losses)
		//		console.log(`It's a draw! You tied ${wins} - ${losses}.`);
		//	else if (wins > losses)
		//		console.log(`Nice work! You won ${wins} - ${losses}.`);
		//	else if (wins < losses)
		//		console.log(`Game over! You lost ${wins} - ${losses}.`);
		//}
	}
}