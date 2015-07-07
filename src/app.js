var thermostat = new Thermostat();

function showTemp() {
  var div = document.getElementById('temperature');
  div.innerText = thermostat.show();
}

function upTemp() {
  var up = document.getElementById('up');
  thermostat.up();
  showTemp();
}
