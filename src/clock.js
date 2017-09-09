import {
  generateInitialClockDom,
  buildTimeStrings,
  appendClock
} from './utils';

class Clock {
  constructor() {
    this.clockInterval = setInterval(() => this.update(), 1000);
    this.dom = generateInitialClockDom(buildTimeStrings(new Date()));
  }

  show() {
    appendClock(this.dom);
  }

  hide() {
    Object.keys(this.dom).map((key) => this.dom[key].remove());
  }

  unshrink() {
    Object.keys(this.dom).map((key) => {
      this.dom[key].classList.remove('shrunken');
    });
  }

  shrink() {
    Object.keys(this.dom).map((key) => {
      this.dom[key].classList.add('shrunken');
    });
  }

  destroy() {
    clearInterval(this.clockInterval);
  }

  update() {
    const {hours, minutes, seconds, meridiem} = buildTimeStrings(new Date());
    if (this.dom.hours.innerText !== hours ) {
      this.dom.hours.innerText = hours;
    }

    if (this.dom.minutes.innerText !== minutes) {
      this.dom.minutes.innerText = minutes;
    }

    if (this.dom.seconds.innerText !== seconds) {
      this.dom.seconds.innerText = seconds;
    }

    if (this.dom.meridiem.innerText !== meridiem) {
      this.dom.meridiem.innerText = meridiem;
    }
  }
}

export default Clock;
