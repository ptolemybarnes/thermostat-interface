var thermostat = new Thermostat();

function showTemp() {
  var temperature = $('#temperature');
  temperature.html(thermostat.show());
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

var changeColour = function() {
  var temperature = $('#temperature');
  if(thermostat.setting() === "low") { temperature.css({'color': 'green'}) }
  if(thermostat.setting() === "medium") { temperature.css({'color': 'orange'}) }
  if(thermostat.setting() === "high") { temperature.css({'color': 'red'}) }
};

showTemp();
