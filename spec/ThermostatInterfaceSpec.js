describe('Thermostat Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('app/views/index.erb');
  });

  it('displays the default temperature', function() {
    expect('#temperature_on_site').toContainText('20');
  });

});

