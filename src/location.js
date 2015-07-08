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
    $('span#location').html('The current temperature at ' + results[0].address_components[1].long_name);
    var location = results[0].address_components[3].long_name
    console.log(results[0].address_components[3].long_name)
    getTemperature(location);
  });
}

function getTemperature(location){
  var request = 'http://api.openweathermap.org/data/2.5/weather?q=' + location;
  $.getJSON(request, function(data) {
    $('#weather').html(' is : ' + Math.round(data.main.temp - 273.15).toString() + '&#8451;');
    });
};
