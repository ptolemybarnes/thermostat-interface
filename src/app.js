var thermostat = new Thermostat();

function showTemp() {
  var div = document.getElementById('temperature');
  div.innerText = thermostat.show();
}

function upTemp() {
  thermostat.up();
  changeColour();
  showTemp();
}

function downTemp() {
  thermostat.down();
  changeColour();
  showTemp();
}

function powerSaveMode() {
  thermostat.changeMode();
}

function resetTemp() {
  thermostat.reset();
  changeColour();
  showTemp();
}

function changeColour() {
  var temperature = document.getElementById('temperature');
  if(thermostat.setting() === "low") { temperature.setAttribute('style', 'color: green;') }
  if(thermostat.setting() === "medium") { temperature.setAttribute('style', 'color: orange;') }
  if(thermostat.setting() === "high") { temperature.setAttribute('style', 'color: red;') }
}
