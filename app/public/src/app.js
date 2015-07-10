var thermostat = new Thermostat();
var temperature = $('#temperature');

$(document).ready(function() {
  thermostat.temperature = $('#temperature').text();
  changeColour();

  $('#up').click(function() {
    thermostat.up();
    showTemp();
    postTemperatureToServer();
  });

  $('#down').click(function() {
    thermostat.down();
    showTemp();
    postTemperatureToServer();
  });

  $('label[for=power_save_mode').click(function() {
    thermostat.changeMode();
  });

  $('#reset').click(function() {
    thermostat.reset();
    showTemp();
  });

  $('#myonoffswitch').change(function() {
    $('div.thermostat').visibilityToggle();
  });

});

function showTemp() {
  temperature.html(thermostat.show());
  changeColour();
  shakeThatThang();
}

var postTemperatureToServer = function() {
  $.post('/', { temperature: thermostat.show() });
};

var changeColour = function() {
  if(thermostat.setting() === "low") { temperature.css({'color': 'green'}) }
  if(thermostat.setting() === "medium") { temperature.css({'color': 'orange'}) }
  if(thermostat.setting() === "high") { temperature.css({'color': 'red'}) }
};

var shakeThatThang = function() {
  if(thermostat.temperature < 15) { temperature.effect("shake") };
  if(thermostat.temperature > 29) { temperature.effect("shake",{'direction':'up'}) };
};

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};
