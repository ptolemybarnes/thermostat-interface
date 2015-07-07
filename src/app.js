function showTemp() {
  var thermostat = new Thermostat();
  var div = document.getElementById('temperature')
  div.innerText = thermostat.show();
};
