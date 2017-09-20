import BasicClock from './basic-clock';

function unsetAlarmStyles() {
  document.querySelectorAll('.covertop, .coverbottom').forEach((node) => {
    node.style.transition = '';
    node.classList.add('undoing');
  });

  document.querySelector('.fill').classList.remove('alarming');
}

function setAlarmStyles(transitionTime) {
  document.querySelectorAll('.covertop, .coverbottom').forEach((node) => {
    node.classList.remove('undoing');
    node.style.transition = `height ${transitionTime}ms, top ${transitionTime}ms`;
  });
  document.querySelector('.fill').classList.add('alarming');
}

class Alarm extends BasicClock{
  constructor() {
    super(null, true);
    this.generateSetTimeButton();
  }

  generateSetTimeButton() {
    const button = document.createElement('div');
    button.classList.add('settimebutton');
    button.innerText = 'Set Alarm';

    button.addEventListener('click', () => this.setAlarm());

    this.dom.button = button;
  }

  setAlarm() {
    if (this.alarmTimeout) {
      clearTimeout(this.alarmTimeout);
      clearTimeout(this.setAlarmStylesTimeout);
      unsetAlarmStyles();
    }

    const now = new Date();
    const nowMeridiem = `${now.getHours() > 11 ? 'pm' : 'am'}`;

    const then = new Date();
    const isAfternoon = this.dom.meridiem.innerText === 'pm';
    let hours = this.dom.hours.innerText;
    if (isAfternoon) {
      hours = `${parseInt(hours) + 12}`;
    }

    then.setHours(hours);
    then.setMinutes(this.dom.minutes.innerText);
    then.setSeconds(this.dom.seconds.innerText);

    if (this.dom.meridiem.innerText !== nowMeridiem) {
      then.setDate(now.getDate() + 1);
    }

    const timeTillAlarm = then.getTime() - now.getTime();
    this.alarmTimeout = setTimeout(() => this.alarm(), timeTillAlarm);
    this.setAlarmStylesTimeout = setTimeout(() => setAlarmStyles(timeTillAlarm - 1000), 1000);
  }

  destroy() {
    clearTimeout(this.setAlarmTimeout);
    super.destroy();
  }

  alarm() {
    new Notification("You alarm has gone off");
  }
}

export default Alarm;
