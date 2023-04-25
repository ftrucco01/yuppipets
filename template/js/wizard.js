/**
 * A jQuery script that handles the click event on a button with the class "entry__button".
 * When the button is clicked, it checks which of the elements with the IDs "userStep1" through "userStep22" are currently visible.
 * If an element is visible, it fades it out and fades in the next element in the sequence.
 */

$(document).ready(function() {
    const fadeDelay = 3000;
    const $userStep1 = $("#userStep1");
    const $userStep2 = $("#userStep2");
    const $userStep3 = $("#userStep3");
    const $userStep4 = $("#userStep4");
    const $userStep5 = $("#userStep5");
    const $userStep6 = $("#userStep6");
    const $userStep7 = $("#userStep7");
    const $userStep8 = $("#userStep8");
    const $userStep9 = $("#userStep9");
    const $userStep10 = $("#userStep10");
    const $userStep11 = $("#userStep11");
    const $userStep12 = $("#userStep12");
    const $userStep13 = $("#userStep13");
    const $userStep14 = $("#userStep14");
    const $userStep15 = $("#userStep15");
    const $userStep16 = $("#userStep16");
    const $userStep17 = $("#userStep17");
    const $userStep18 = $("#userStep18");
    const $userStep19 = $("#userStep19");
    const $userStep20 = $("#userStep20");
    const $userStep21 = $("#userStep21");
    const $userStep22 = $("#userStep22");


    function fadeOutAndIn($fadeOut, $fadeIn) {
      $fadeOut.fadeOut(function() {
        $fadeIn.fadeIn(fadeDelay);
      });
    }
    function handleClick() {
      if ($userStep1.is(":visible")) {
        fadeOutAndIn($userStep1, $userStep2);
      } else if ($userStep2.is(":visible")) {
        fadeOutAndIn($userStep2, $userStep3);
      } else if ($userStep3.is(":visible")) {
        fadeOutAndIn($userStep3, $userStep4);
      } else if ($userStep4.is(":visible")) {
        fadeOutAndIn($userStep4, $userStep5);
      } else if ($userStep5.is(":visible")) {
        fadeOutAndIn($userStep5, $userStep6);
      } else if ($userStep6.is(":visible")) {
        fadeOutAndIn($userStep6, $userStep7);
      } else if ($userStep7.is(":visible")) {
        fadeOutAndIn($userStep7, $userStep8);
      } else if ($userStep8.is(":visible")) {
        fadeOutAndIn($userStep8, $userStep9);
      } else if ($userStep9.is(":visible")) {
        fadeOutAndIn($userStep9, $userStep10);
      } else if ($userStep10.is(":visible")) {
        fadeOutAndIn($userStep10, $userStep11);
      } else if ($userStep11.is(":visible")) {
        fadeOutAndIn($userStep11, $userStep12);
      } else if ($userStep12.is(":visible")) {
        fadeOutAndIn($userStep12, $userStep13);
      } else if ($userStep13.is(":visible")) {
        fadeOutAndIn($userStep13, $userStep14);
      } else if ($userStep14.is(":visible")) {
        fadeOutAndIn($userStep14, $userStep15);
      } else if ($userStep15.is(":visible")) {
        fadeOutAndIn($userStep15, $userStep16);
      } else if ($userStep16.is(":visible")) {
        fadeOutAndIn($userStep16, $userStep17);
      } else if ($userStep17.is(":visible")) {
        fadeOutAndIn($userStep17, $userStep18);
      } else if ($userStep18.is(":visible")) {
        fadeOutAndIn($userStep18, $userStep19);
      } else if ($userStep19.is(":visible")) {
        fadeOutAndIn($userStep19, $userStep20);
      } else if ($userStep20.is(":visible")) {
        fadeOutAndIn($userStep20, $userStep21);
      } else if ($userStep21.is(":visible")) {
        fadeOutAndIn($userStep21, $userStep22);
      }
    }
    
    $(".entry__button").click(handleClick);
  });