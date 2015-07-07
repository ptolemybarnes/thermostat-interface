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

function upTemp() {
  thermostat.up();
  showTemp();
}

function downTemp() {
  thermostat.down();
  showTemp();
}

function powerSaveMode() {
  thermostat.changeMode();
}

function resetTemp() {
  thermostat.reset();
  showTemp();
}

showTemp();
