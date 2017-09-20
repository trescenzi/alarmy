import Clock from './clock';
import Alarm from './alarm';
import styles from './index.css';

window.addEventListener('load', () => {
  const clock = new Clock(new Date());
  const alarm = new Alarm();
  clock.show();

  clockswitch.addEventListener('click', () => {
    clockswitch.classList.add('selected');
    clock.unshrink();

    alarmswitch.classList.remove('selected');
    alarm.hide();
  });

  alarmswitch.addEventListener('click', () => {
    alarmswitch.classList.add('selected');
    alarm.show();

    clockswitch.classList.remove('selected');
    clock.shrink();
  });

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
});
