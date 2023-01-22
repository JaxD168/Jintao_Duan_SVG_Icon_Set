// step 1 - make the connection to the element(s) you want to interact with
const vectorGraphic = document.querySelector('#wapper');

function logThisId() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1
vectorGraphic.addEventListener('click', logThisId);


const vectorGraphic2 = document.querySelector('#wapper-2');

function logThisId() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1
vectorGraphic2.addEventListener('click', logThisId);