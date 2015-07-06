describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20', function() {
    expect(thermostat.show()).toEqual(20);
  });

  describe('changing the temperature', function() {

    it('can be increased by 1', function() {
      thermostat.up();
      expect(thermostat.show()).toEqual(21);
    });

    it('can be decreased by 1', function() {
      thermostat.down();
      expect(thermostat.show()).toEqual(19);
    });

  });

  describe('has limited range', function() {

    it('cannot go below 10', function() {
      for (count = 20; count > 0; count--){
        thermostat.down();
      };
      expect(thermostat.show()).toEqual(10);
    });

    it('cannot go above 25 if the power save mode is on', function() {
      for (count = 0; count < 100; count++){
        thermostat.up();
      };
      expect(thermostat.show()).toEqual(25);
    });

    it('cannot go above 32 if the power save mode is off', function() {
      thermostat.changeMode();
      for (count = 0; count < 100; count++){
        thermostat.up();
      };
      expect(thermostat.show()).toEqual(32);
    });

    it('can be reset to 20', function() {
      thermostat.reset();
      expect(thermostat.show()).toEqual(20);
    });

  });

});
