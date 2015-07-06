var Thermostat = function() {
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increaseTemp = function () {
  if (this.powerSave) {
  	if (this.temp < 25) {
  	  this.temp ++;
  	}
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp > 10) {
    this.temp --;
  }
};

// Thermostat.prototype.powersaveToggle = function() {
//   if (this.powerSave === true) {
//   	this.powerSave = false;
//   }
//   if (this.powerSave === false) {
//   	this.powerSave = true;
//   }
// };
