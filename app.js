const timerDisplay = document.querySelector('.timer-display');
const p = document.querySelector('.message');

const writeTime = (t) => {
  timerDisplay.innerHTML = t;
};

const sendNotification = (message) => {
  p.innerHTML = 'Task Completed';
  p.style.background = `red`;
};

import mp3 from './task-finished.mp3';

const start = document.querySelector('.start');

const stop = document.querySelector('.stop');

const restart = document.querySelector('.restart');

function play() {
  var audio = new Audio(mp3);
  audio.play();
}

let timerId;

const printNumbers = (from, to) => {
  writeTime(`${Math.floor(to / 60)}:${to % 60}`);

  // start the timer
  // Every second print next number:
  // stop when to is reached
  var current = to;
  //   writeTime(`${current % 1000}`);

  timerId = setInterval(() => {
    console.log(current);
    writeTime(`${Math.floor(current / 60)}:${current % 60}`);
    if (current == from) {
      clearInterval(timerId);
      console.log('Task Finished');
      sendNotification('Task Finished');
      play();
    }
    current = current - 1;
  }, 1 * 1000);
};

const startTask = () => printNumbers(0, 25 * 60);

start.addEventListener('click', () => {
  startTask();
});

stop.addEventListener('click', () => {
  console.log('Stopping....');
  clearInterval(timerId);
  p.innerHTML = 'Undefined';
});

restart.addEventListener('click', () => {
  console.log('Stopping...');
  clearInterval(timerId);
  p.innerHTML = 'Undefined';
  console.log('Starting Again...');
  startTask();
});
