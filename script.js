const gameContainer = document.getElementById('game-container');

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function createBlocks() {
  const numbers = Array.from({length: 25}, (_, i) => i + 1);
  shuffle(numbers);

  numbers.forEach(num => {
    const block = document.createElement('div');
    block.className = 'block';
    block.textContent = num;

    block.addEventListener('click', () => handleClick(num, block));
    gameContainer.appendChild(block);
  });
}

let currentNumber = 1;
function handleClick(num, block) {
  if (num === currentNumber) {
    block.style.backgroundColor = 'lightgreen';
    currentNumber += 1;

    if (currentNumber > 25) {
      alert("게임을 완료했습니다!");
      location.reload();
    }
  } else {
    block.style.backgroundColor = 'red';
  }
}

createBlocks();

let seconds = 0;
let minutes = 0;

// Update the timer every second
setInterval(function() {
    seconds++;
  
  	if (seconds >= 60) {
        minutes++;
        seconds = seconds % 60;
    }
  
  	// Format time as MM:SS
  	let formattedTime = 
      	(minutes < 10 ? "0" + minutes : minutes) + ":" +
      	(seconds < 10 ? "0" + seconds : seconds);
  
  	document.getElementById('timer').textContent = formattedTime;

},1000); //1000ms or one second interval.

