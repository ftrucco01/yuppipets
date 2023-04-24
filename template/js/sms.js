/**
 * SMS functionalities
 */

document.addEventListener("DOMContentLoaded", () => {
    const secondsToTimeOff = 301;
    const countdownElement = document.getElementById("countdown");
  
    let remainingTime = countdownElement.textContent.trim();
    let remainingSeconds = parseInt(remainingTime.split(":")[0]) * 60 + parseInt(remainingTime.split(":")[1]);
  
    const intervalId = setInterval(() => {
      remainingSeconds--;
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;
      let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      countdownElement.textContent = formattedTime;
  
      if (remainingSeconds === 0) {
        clearInterval(intervalId);
        countdownElement.style.color = "red";
      }
    }, 1000);
  
    setTimeout(() => {
      clearInterval(intervalId);
      countdownElement.style.color = "red";
    }, (secondsToTimeOff * 1000)  );
  });

  window.addEventListener('DOMContentLoaded', () => {
        const number1 = document.getElementById('number1');
        const number2 = document.getElementById('number2');
        const number3 = document.getElementById('number3');
        const number4 = document.getElementById('number4');

        number1.addEventListener('input', () => {
            if (number1.value.length === 1) {
                number2.focus();
            }
        });

        number2.addEventListener('input', () => {
            if (number2.value.length === 1) {
                number3.focus();
            }
        });
        number3.addEventListener('input', () => {
            if (number3.value.length === 1) {
                number4.focus();
            }
        });
        number4.addEventListener('input', () => {
            if (number4.value.length === 1) {
                window.location.href = "congratulations_step_4.html";
            }
        });

        const isNumericKey = (event) => {
          const charCode = event.which ? event.which : event.keyCode;
          return charCode >= 48 && charCode <= 57;
        };

        number1.addEventListener('keypress', (event) => {
          if (!isNumericKey(event)) {
            event.preventDefault();
            return false;
          }
        });

        number2.addEventListener('keypress', (event) => {
          if (!isNumericKey(event)) {
            event.preventDefault();
            return false;
          }
        });

        number3.addEventListener('keypress', (event) => {
          if (!isNumericKey(event)) {
            event.preventDefault();
            return false;
          }
        });

        number4.addEventListener('keypress', (event) => {
          if (!isNumericKey(event)) {
            event.preventDefault();
            return false;
          }
        });
    });