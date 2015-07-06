var Thermostat = function() {};
var temp = 20;

Thermostat.prototype.currentTemp = function() {
  return temp;
};

Thermostat.prototype.increaseTemp = function () {
  temp += 1;
  return temp;
};
