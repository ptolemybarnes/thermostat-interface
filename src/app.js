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

// function color(setcolor) {
// $('#temperature').css({'color': 'green'});

function changeColour() {
  var temp = $('#temperature')
  if(thermostat.setting() === "low") { return temp.css({'color': 'green'}) }
  if(thermostat.setting() === "medium") { return temp.css({'color': 'orange'}) }
  if(thermostat.setting() === "high") { return temp.css({'color': 'red'}) }
};

showTemp();
