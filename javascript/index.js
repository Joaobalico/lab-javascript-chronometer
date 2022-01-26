const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft'); //<button id="btnLeft" class="btn start">START</button>
const btnRightElement = document.getElementById('btnRight'); //<button id="btnRight" class="btn reset">RESET</button>

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');// <span id="minDec" class="number">0</span>
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerHTML = 'START'
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerHTML = 'RESET'
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'STOP'
}

function setResetBtn() {
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerHTML = 'SPLIT'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
