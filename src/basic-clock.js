export default class BasicClock {
  constructor(initialDate, isEditable) {
    this.dom = this.constructDom(this.buildTimeStrings(initialDate), isEditable);
  }

  constructDom({hours, minutes, seconds, meridiem}, isEditable) {
    const hoursDiv = document.createElement('div');
    const minutesDiv = document.createElement('div');
    const secondsDiv = document.createElement('div');
    const meridiemDiv = document.createElement('div');

    hoursDiv.innerText = hours;
    minutesDiv.innerText = minutes;
    secondsDiv.innerText = seconds;
    meridiemDiv.innerText = meridiem;

    hoursDiv.classList.add('hours');
    minutesDiv.classList.add('minutes');
    secondsDiv.classList.add('seconds');
    meridiemDiv.classList.add('meridiem');

    if (isEditable) {
      hoursDiv.setAttribute('contenteditable', 'true');
      hoursDiv.addEventListener('focus', () => setTimeout(() => document.execCommand('selectAll')), 0);
      minutesDiv.setAttribute('contenteditable', 'true');
      minutesDiv.addEventListener('focus', () => setTimeout(() => document.execCommand('selectAll')), 0);
      secondsDiv.setAttribute('contenteditable', 'true');
      secondsDiv.addEventListener('focus', () => setTimeout(() => document.execCommand('selectAll')), 0);
      meridiemDiv.setAttribute('contenteditable', 'true');
      meridiemDiv.addEventListener('focus', () => setTimeout(() => document.execCommand('selectAll')), 0);
    }

    return {
      hours: hoursDiv,
      minutes: minutesDiv,
      seconds: secondsDiv,
      meridiem: meridiemDiv,
    };
  }

  buildTimeStrings(date) {
    if (!date) {
      return {
        hours: '--',
        minutes: '--',
        seconds: '--',
        meridiem: 'am',
      };
    }

    const hours = `${date.getHours() % 12}`;
    const minutes = `${date.getMinutes()}`;
    const seconds = `${date.getSeconds()}`;
    const meridiem = `${date.getHours() > 11 ? 'pm' : 'am'}`;

    return {
      hours: hours === '0' ? '12' : hours,
      minutes: minutes.length === 2 ? minutes : `0${minutes}`,
      seconds: seconds.length === 2 ? seconds : `0${seconds}`,
      meridiem,
    };
  }

  appendClock(dom) {
    const {hours, minutes, seconds, meridiem, button} = dom;
    const clocktimeDiv = document.querySelector('.clocktime');

    clocktimeDiv.appendChild(hours);
    clocktimeDiv.appendChild(minutes);
    clocktimeDiv.appendChild(seconds);
    clocktimeDiv.appendChild(meridiem);

    if (button) {
      document.querySelector('.time').appendChild(button);
    }
  }

  show() {
    this.appendClock(this.dom);
  }

  hide() {
    Object.keys(this.dom).map((key) => this.dom[key].remove());
  }

  destroy() {
    this.hide();
    this.dom = null;
  }
}
