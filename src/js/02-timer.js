// Libreris import

import flatpickr from 'flatpickr';
import convertMs from './date-Convert';

// Styles import
import 'flatpickr/dist/flatpickr.min.css';

// Input Date window

const inputDate = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    dateChangind(selectedDates[0]);
  },
};

flatpickr(inputDate, options);

// const and let initialisation

const selectors = {
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timeDifference = null;
let targetDate = null;
let currentTime = null;
const currentDate = options.defaultDate;

selectors.btnStart.setAttribute('disabled', true);

// choosing date

function dateChangind(date) {
  targetDate = date.getTime();
  if (currentDate >= targetDate) {
    window.alert('Please choose a date in the future');
  } else {
    selectors.btnStart.removeAttribute('disabled');
  }
}

//  Start timer

selectors.btnStart.addEventListener('click', startTimer);

function startTimer() {
  const timerId = setInterval(clock, 1000);
}

function clock() {
  selectors.btnStart.setAttribute('disabled', true);
  inputDate.setAttribute('disabled', true);
  currentTime = new Date();
  timeDifference = convertMs(targetDate - currentTime);

  if (targetDate - currentTime < 0) {
    clearInterval(timerId);
    selectors.btnStart.removeAttribute('disabled');
    inputDate.removeAttribute('disabled');
  } else {
    selectors.days.textContent = addLeadingZero(timeDifference.days);
    selectors.hours.textContent = addLeadingZero(timeDifference.hours);
    selectors.minutes.textContent = addLeadingZero(timeDifference.minutes);
    selectors.seconds.textContent = addLeadingZero(timeDifference.seconds);
  }
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
