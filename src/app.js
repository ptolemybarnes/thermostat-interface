var thermostat = new Thermostat();
thermostat.temperature = $('#temperature').text();

$(document).ready(function() {
  changeColour();
});

function showTemp() {
  var temperature = $('#temperature');
  temperature.html(thermostat.show());
  changeColour();
  shakeThatThang();
}

$('#up').click(function() {
  thermostat.up();
  showTemp();
  $.post('/', { temperature: thermostat.show() }, function() {console.log('Sending a post request')});
});

$('#down').click(function() {
  thermostat.down();
  showTemp();
  $.post('/', { temperature: thermostat.show() });
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

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};
