var thermostat = new Thermostat();

function showTemp() {
  var temperature = $('#temperature');
  temperature.html(thermostat.show());
  changeColour();
  shakeThatThang();
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

var shakeThatThang = function() {
  var temperature = $('#temperature');
  if(thermostat.temperature < 15) { temperature.effect("shake") };
  if(thermostat.temperature > 29) { temperature.effect("shake",{'direction':'up'}) };
};

function weather(){
  var request = 'http://api.openweathermap.org/data/2.5/weather?q=London';
  $.getJSON(request, function(data) {
    $('#weather').html(Math.round(data.main.temp - 273.15));
    });
};

showTemp();
weather();
