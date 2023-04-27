const utils = {
    refs: {
        startBotton: document.querySelector('[data-start]'),
        stopBotton: document.querySelector('[data-stop]'),
        body: document.querySelector('body') 
    }
}

let timeId = null;



utils.refs.stopBotton.setAttribute("disabled", "");

utils.refs.startBotton.addEventListener("click", onStartColorChange); 
utils.refs.stopBotton.addEventListener('click', onStopColorChange);

function onStartColorChange(event) {

    const {refs } = utils

    let color = getRandomHexColor();

    refs.body.style.background = color;

    timeId = setInterval(() => refs.body.style.background = getRandomHexColor(), 1000);


    // refs.startBotton.setAttribute("disabled", "");
    // refs.stopBotton.removeAttribute("disabled");


    addAttr(refs.startBotton, "disabled", "");
    removeAttr(refs.stopBotton, "disabled");



}

function onStopColorChange(event) {

    const { refs } = utils

    // refs.startBotton.removeAttribute("disabled");
    // refs.stopBotton.setAttribute("disabled", "");

   
    removeAttr(refs.startBotton, "disabled");
    addAttr(refs.stopBotton, "disabled", "");


    clearInterval(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



function addAttr(element, nameAttr, valueAttr = '') {
    element.setAttribute(nameAttr, valueAttr)
}

function removeAttr(element, nameAttr) {
    element.removeAttribute(nameAttr)
}
