'use strict';

// create a function colorChange
function colorChange() {
    // make variable that pulls out each class id color-change
    const makeRedElements = document.querySelectorAll('.color-change');

    // loop through each element and change to red
    for (const element of makeRedElements){
        element.classList.add('red');
    }
}

// create a function to check number and validate it
function validateInput() {
    // pull out element with class id number-input
    const numberInput = document.querySelectorAll('#number-input');
    // turn our input value into a numerical value
    const userInputNumber = Number(numberInput.value);
    // create variable for form feedback
    const formFeedback = document.querySelector('#form-feedback')

    // conditional to check if user input meets specified conditions
    // isNaN returns a boolean value
    // if user input number doesnt exist or is >= 10, return false
    // anything else: change feedback text to return true
    if (isNaN(userInputNumber) || userNum >= 10) {
        formFeedback.innerText = 'Please enter a smaller number!';
    }else {
        formFeedback.innerText = 'Congrats! You are good to go!';
    }
}

// create event listeners to call actions for each button

// add event listener to turn buttons red once clicked
document.querySelector('.color-changer').addEventListener('click', changeColor);

// add event listener to evaluate user input once submitted
document.querySelector('.number-form').addEventListener('submit', validateInput);
