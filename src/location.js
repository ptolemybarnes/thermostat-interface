var latitude;
var longitude;

navigator.geolocation.getCurrentPosition(GetLocation);

function GetLocation(location) {
    latitude = (location.coords.latitude);
    longitude = (location.coords.longitude);
    getAddress(latitude, longitude);
}

function getAddress(latitude, longitude) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'latLng': new google.maps.LatLng(latitude, longitude) }, function(results, status) {
    var locationData = results[0].address_components;
    for (var i = 0; i < locationData.length; i++ ){
        if (locationData[i].types[0] == "route") { var address = locationData[i].long_name};
        if (locationData[i].types[0] == "postal_town") { var town = locationData[i].long_name};
      };
      console.log(address);
      console.log(town);
    $('span#location').html('The current temperature at ' + address);
    getTemperature(town);
  });
}

function getTemperature(location){
  var request = 'http://api.openweathermap.org/data/2.5/weather?q=' + location;
  $.getJSON(request, function(data) {
    $('#weather').html(' is : ' + Math.round(data.main.temp - 273.15).toString() + '&#8451;');
    });
};
