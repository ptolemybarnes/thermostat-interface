var thermostat = new Thermostat();

function showTemp() {
  var temperature = $('#temperature');
  temperature.html(thermostat.show());
  changeColour();
  shakeThatThang();
}

$('#up').click(function() {
  thermostat.up();
  showTemp();
});

$('#down').click(function() {
  thermostat.down();
  showTemp();
});

$('#power_save').change(function() {
  thermostat.changeMode();
});

$('#reset').click(function() {
  thermostat.reset();
  showTemp();
});

$('#myonoffswitch').change(function() {
  $('div.thermostat').visibilityToggle();
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

showTemp();

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};
