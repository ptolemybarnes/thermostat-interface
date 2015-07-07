var thermostat = new Thermostat();

function showTemp() {
  var div = document.getElementById('temperature');
  div.innerText = thermostat.show();
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
  if(thermostat.setting() === "low") {}
  if(thermostat.setting() === "high") {}
}
