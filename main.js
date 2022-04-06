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

