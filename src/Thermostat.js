var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increaseTemp = function () {
  this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp > 10) {
    this.temp -= 1;
  }
};
