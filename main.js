const handSeconds = document.querySelector(".clock__hand--seconds");

const setDate = () => {
  console.log("hi");
  const degrees = 110;
  handSeconds.style.transform = `rotate(${degrees}deg)`;
};
setInterval(setDate, 1000);
