'use strict';

const timeDisplay = document.querySelector('.clock');

function refreshTime() {
  timeDisplay.textContent = 
    new Date().toLocaleString("hu-HU", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

setInterval(refreshTime, 200);