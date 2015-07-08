var thermostat = new Thermostat();

function showTemp() {
  var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.show();
  function changeColour() {
    if(thermostat.setting() === "low") { temperature.setAttribute('style', 'color: green;') }
    if(thermostat.setting() === "medium") { temperature.setAttribute('style', 'color: orange;') }
    if(thermostat.setting() === "high") { temperature.setAttribute('style', 'color: red;') }
  }
  return changeColour();
}

document.getElementById('up').onclick = function upTemp() {
  thermostat.up();
  showTemp();
};

document.getElementById('down').onclick = function downTemp() {
  thermostat.down();
  showTemp();
};

document.getElementById('powerSave').onchange = function powerSaveMode() {
  thermostat.changeMode();
};

document.getElementById('reset').onclick = function resetTemp() {
  thermostat.reset();
  showTemp();
};

showTemp();
