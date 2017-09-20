import BasicClock from './basic-clock';

class Clock extends BasicClock {
  constructor(initialDate) {
    super(initialDate, false);
    this.clockInterval = setInterval(() => this.update(), 1000);
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
    super.destroy();
  }

  update() {
    const {hours, minutes, seconds, meridiem} = this.buildTimeStrings(new Date());
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
