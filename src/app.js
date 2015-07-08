var thermostat = new Thermostat();

function showTemp() {
  var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.show();
  changeColour();
}

$('#up').click(function upTemp() {
  thermostat.up();
  showTemp();
});

$('#down').click(function downTemp() {
  thermostat.down();
  showTemp();
});

$('#powerSave').change(function powerSaveMode() {
  thermostat.changeMode();
});

$('#reset').click(function resetTemp() {
  thermostat.reset();
  showTemp();
});

function changeColour() {
  if(thermostat.setting() === "low") { return temperature.setAttribute('style', 'color: green;') }
  if(thermostat.setting() === "medium") { return temperature.setAttribute('style', 'color: orange;') }
  if(thermostat.setting() === "high") { return temperature.setAttribute('style', 'color: red;') }
}

showTemp();
