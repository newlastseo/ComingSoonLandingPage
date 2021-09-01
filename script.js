const daysEl = document.querySelector(".days"),
  hoursEl = document.querySelector(".hours"),
  minutesEl = document.querySelector(".minutes"),
  secondsEl = document.querySelector(".seconds"),
  h1 = document.querySelector("h1");

const countTo = "1 Dec 2021";

const c = setInterval(() => {
  const currentDate = new Date();
  const endDate = new Date(countTo);
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = `${days}`;
  hoursEl.innerHTML = `${format(hours)}`;
  minutesEl.innerHTML = `${format(minutes)}`;
  secondsEl.innerHTML = `${format(seconds)}`;

  if (totalSeconds < 0) {
    clearInterval(c);
    h1.textContent = "Product Launch Begins";
  }
});

function format(count) {
  return count < 10 ? `0${count}` : count;
}
