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
