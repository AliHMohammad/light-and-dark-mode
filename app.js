"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listener for select on HTML
    document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
    detectUserPreference();
    
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
    console.log("New color mode selected");
    console.log(this);
    console.log(this.value);

    let selectedColor = this.value;
    changeMode(selectedColor);
    setUserColorMode(selectedColor)
}


function changeMode(mode) {
    console.log("SALAM!");
    resetColorMode();

    if (mode == "dark") {
        document.querySelector("body").classList.add("dark-mode")
    } else if (mode == "light") {
        document.querySelector("body").className = "";
    } else if (mode == "green") {
        document.querySelector("body").classList.add("green-mode")
    } else if (mode == "yellow") {
        document.querySelector("body").classList.add("yellow-mode")
    }

}

function resetColorMode() {
    document.querySelector("body").className = "";
}


function setUserColorMode(mode){
    localStorage.setItem("userColorMode", mode);
}

function getUserColorMode() {
    const userColorMode = localStorage.getItem("userColorMode");
    return userColorMode;
}

function detectUserPreference() {
    const modeFromLocalStorage = getUserColorMode();
    console.log(modeFromLocalStorage);

    if (modeFromLocalStorage !== null) {
        changeMode(modeFromLocalStorage);
        document.querySelector("#select-color-mode").value = modeFromLocalStorage; 
    }
}

