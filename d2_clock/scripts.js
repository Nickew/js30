const clock = (function(){
  const hourHand = document.querySelector('.cl-clock__hand--hours');
  const minuteHand = document.querySelector('.cl-clock__hand--minutes');
  const secondHand = document.querySelector('.cl-clock__hand--seconds');
  const hourDigital = document.querySelector('.cl-digital__time--hours');
  const minuteDigital = document.querySelector('.cl-digital__time--minutes');
  const secondDigital = document.querySelector('.cl-digital__time--seconds');

  const update = () => {
    const dateNow = new Date();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    hourDigital.innerHTML = hours;
    minuteDigital.innerHTML = minutes;
    secondDigital.innerHTML = seconds;
  };

  setInterval(update, 1000);
}())