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
    $('span#location').html(results[0].formatted_address);
    console.log(results[0].formatted_address)
  });
}
