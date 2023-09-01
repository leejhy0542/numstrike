const gameContainer = document.getElementById('game-container');

let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = null;

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

    currentNumber += 1;

    if (currentNumber > 25) {
      let finish_time = document.getElementById('timer').textContent;
      alert("게임을 완료했습니다!" + finish_time);
      location.reload();
    }
    block.style.opacity = '0';
  }
}

createBlocks();

// // Update the timer every 10 milliseconds
// setInterval(function() {
//     centiseconds++;

//     if (centiseconds >= 100) {
//         seconds++;
//         centiseconds = centiseconds % 100;
//     }

//     if (seconds >= 60) {
//         minutes++;
//         seconds = seconds % 60;
//     }
  
//   	// Format time as MM:SS:CC
//   	let formattedTime = 
//       	(minutes < 10 ? "0" + minutes : minutes) + ":" +
//       	(seconds < 10 ? "0" + seconds : seconds) + ":" +
//       	(centiseconds < 10 ? "0" + centiseconds : 
//            	centiseconds);
  
//   	document.getElementById('timer').textContent = formattedTime;

// },10); // Interval of ten millisecond.

// let centiseconds = 0;
// let seconds = 0;
// let minutes = 0;


function startTimer() {
    if (intervalId) { // If timer is already running, do nothing
        return;
    }

    intervalId = setInterval(function() {
        centiseconds++;

        if (centiseconds >= 100) {
            seconds++;
            centiseconds %= 100;
        }

        if (seconds >= 60) {
            minutes++;
            seconds %= 60;
        }
      
      	// Format time as MM:SS:CC
      	let formattedTime = 
          	(minutes < 10 ? "0" + minutes : minutes) + ":" +
          	(seconds < 10 ? "0" + seconds : seconds) + ":" +
          	(centiseconds < 10 ? "0" + centiseconds : 
               	centiseconds);
      
      	document.getElementById('timer').textContent = formattedTime;

    },10); // Interval of ten millisecond.
}

// Assuming blocks have a class name 'block'
const blocks = document.querySelectorAll('.block');

blocks.forEach(block => block.addEventListener('click', startTimer));