/**
 * SMS functionalities
 */
$(document).ready(function() {
  setTimer();
  inputsHandler();

  /**
   * This function sets up a countdown timer that counts down from 5 minutes (301 seconds). It uses jQuery to 
   * select and manipulate the HTML element that displays the countdown. The function initializes the remaining 
   * time based on the value of the countdown element, sets up a setInterval() timer to update the countdown 
   * element every second, and sets up a setTimeout() function to stop the countdown after 5 minutes and change 
   * the countdown element's color to red. The function also formats the time to display minutes and seconds 
   * with leading zeros, using the padStart() method.
   */
  function setTimer()
  {
    const secondsToTimeOff = 301;
    const countdownElement = $("#countdown");
  
    let remainingTime = countdownElement.text().trim();
    let remainingSeconds = parseInt(remainingTime.split(":")[0]) * 60 + parseInt(remainingTime.split(":")[1]);
  
    const intervalId = setInterval(() => {
      remainingSeconds--;
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;
      let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      countdownElement.text(formattedTime);
  
      if (remainingSeconds === 0) {
        clearInterval(intervalId);
        countdownElement.css("color", "red");
        verificationCode = 
      }
    }, 1000);
  
    setTimeout(() => {
      clearInterval(intervalId);
      countdownElement.css("color", "red");
    }, (secondsToTimeOff * 1000));
  }


  /**
   * This function handles the input of a four-digit number across four input fields, with automatic movement 
   * of focus to the next field after a single digit is entered. It also restricts input to numeric characters 
   * and redirects the user to a new webpage when the fourth input field is filled. The function assigns input 
   * elements to variables, sets up input event listeners, and defines a helper function to check for numeric 
   * input.
   */
  function inputsHandler()
  {
        // Assign input elements to variables
        const number1 = $('#number1');
        const number2 = $('#number2');
        const number3 = $('#number3');
        const number4 = $('#number4');

        number1.on('focus', function() {
          $(this).val('');
        });
        number2.on('focus', function() {
          $(this).val('');
        });
        number3.on('focus', function() {
          $(this).val('');
        });
        number4.on('focus', function() {
          $(this).val('');
        });
        
        // Add input event listener to number1 input element
        number1.on('input', function() {
          // Check if input length is 1 character and move focus to number2 element
          if ($(this).val().length === 1) {
          number2.focus();
          }
        });
        
        // Add input event listener to number2 input element
        number2.on('input', function() {
          // Check if input length is 1 character and move focus to number3 element
          if ($(this).val().length === 1) {
          number3.focus();
          }
        });
        
        // Add input event listener to number3 input element
        number3.on('input', function() {
          // Check if input length is 1 character and move focus to number4 element
          if ($(this).val().length === 1) {
          number4.focus();
          }
        });
        
        // Add input event listener to number4 input element
        number4.on('input', function() {
          // Check if input length is 1 character and redirect to congratulations_step_4.html
          if ($(this).val().length === 1) {
            const code = number1.val().concat(number2.val(), number3.val(), number4.val());
            verifyVerificationCode( code );
          }
        });
        
        // Function to check if input is numeric
        function isNumericKey(event) {
          const charCode = event.which ? event.which : event.keyCode;
          return charCode >= 48 && charCode <= 57;
        }
        
        // Add keypress event listener to number1 input element to allow only numeric input
        number1.on('keypress', function(event) {
          if (!isNumericKey(event)) {
          event.preventDefault();
          return false;
          }
        });
        
        // Add keypress event listener to number2 input element to allow only numeric input
        number2.on('keypress', function(event) {
          if (!isNumericKey(event)) {
          event.preventDefault();
          return false;
          }
        });
        
        // Add keypress event listener to number3 input element to allow only numeric input
        number3.on('keypress', function(event) {
          if (!isNumericKey(event)) {
          event.preventDefault();
          return false;
          }
        });
        
        // Add keypress event listener to number4 input element to allow only numeric input
        number4.on('keypress', function(event) {
          if (!isNumericKey(event)) {
          event.preventDefault();
          return false;
          }
        });
  }
});


/**
* Eg. to send code: sendVerificationCode('+66949804265');
*/
var ACCOUNT_SID = 'AC773683b1281a70b36aa0ac8e298d06a3';
var AUTH_TOKEN = '0664e251127305cb298e2a2aac6ad5ca';
var SERVICE_SID = 'VAfbb81132842fe8bcb67f38311a826e93';
var FROM_NUMBER = '+16206709612';

function sendVerificationCode(phoneNumber) {
    // Genera un código de verificación aleatorio
    verificationCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // Crea el mensaje de texto que se enviará
    var message = 'Tu código de verificación es: ' + verificationCode;

    // Envía el mensaje de texto usando la API de Twilio mediante una llamada AJAX
    $.ajax({
        url: 'https://api.twilio.com/2010-04-01/Accounts/' + ACCOUNT_SID + '/Messages.json',
        method: 'POST',
        data: {
            To: phoneNumber,
            From: FROM_NUMBER,
            Body: message
        },
        headers: {
            'Authorization': 'Basic ' + btoa(ACCOUNT_SID + ':' + AUTH_TOKEN),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function verifyVerificationCode( generatedCode ) {
  if (verificationCode === generatedCode) {
    nextStep();
  } else {
    alert('Código de verificación incorrecto');
  }
}

function nextStep()
{
  const fadeDelay = 3000;
  const $userStep3 = $("#userStep3");
  const $userStep4 = $("#userStep4");
  
  $userStep3.fadeOut(function() {
    $userStep4.fadeIn(fadeDelay);
  });
}