const handSeconds = document.querySelector(".clock__hand--seconds");
const handMinutes = document.querySelector(".clock__hand--minutes");
const handHours = document.querySelector(".clock__hand--hours");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(`${hours}:${minutes}:${seconds}`);
  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360;
  const hoursDegrees = (hours / 12) * 360;
  handSeconds.style.transform = `rotate(${secondsDegrees + 90}deg)`;
  handMinutes.style.transform = `rotate(${minutesDegrees + 90}deg)`;
  handHours.style.transform = `rotate(${hoursDegrees + 90}deg)`;
};
setInterval(setDate, 1000);
