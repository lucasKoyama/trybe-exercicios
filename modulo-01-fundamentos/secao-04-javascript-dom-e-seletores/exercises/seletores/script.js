const headerContainer = document.getElementById("header-container").style.backgroundColor = "rgb(0, 176, 105)";

function colorPrioTable(classStr, divColor, h3Color) {
  const emergency = document.getElementsByClassName(classStr);
  emergency[0].style.backgroundColor = divColor;
  
  const emergencyHeader = document.querySelectorAll(`.${classStr} h3`);
  for (let h = 0; h < emergencyHeader.length; h += 1) {
    emergencyHeader[h].style.backgroundColor = h3Color;
  }
}
colorPrioTable('emergency-tasks', 'rgb(255, 159, 132)', 'rgb(165, 0, 243)');
colorPrioTable('no-emergency-tasks', 'rgb(249, 219, 94)', 'rgb(35, 37, 37)');

const footerContainer = document.getElementById("footer-container").style.backgroundColor = "rgb(0, 53, 51)";