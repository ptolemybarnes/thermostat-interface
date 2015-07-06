var Thermostat = function() {};

var temperature = 20

Thermostat.prototype.show = function () {
  return temperature
};

Thermostat.prototype.up = function () {
  temperature += 1
};

Thermostat.prototype.down = function () {
  temperature -= 1
};
