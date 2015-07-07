var thermostat = new Thermostat();

function showTemp() {
  var div = document.getElementById('temperature');
  div.innerText = thermostat.show();
  changeColour();
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

function changeColour() {
  var temperature = document.getElementById('temperature');
  if(thermostat.setting() === "low") { temperature.setAttribute('style', 'color: green;') }
  if(thermostat.setting() === "medium") { temperature.setAttribute('style', 'color: orange;') }
  if(thermostat.setting() === "high") { temperature.setAttribute('style', 'color: red;') }
}
