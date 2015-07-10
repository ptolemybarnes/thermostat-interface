# Thermostat

A thermostat console (but not an actual thermostat) whose display can be turned on and off. Gives the current temperature for your location ([lat, long taken using HTML5 and geocoded using Google API](https://github.com/DataMinerUK/thermostat/blob/master/src/location.js#L4-L25) - location name might appear funny owing to which element of the address is selected. No way of getting a [particular part of an address from Google](https://developers.google.com/maps/documentation/geocoding/#ComponentFiltering) e.g. city. Temperature is got using [OpenWeatherMap API](https://github.com/DataMinerUK/thermostat/blob/master/src/location.js#L27-L32)). There is a power save mode with limits the maximum temperature to 25. With that turned off the temperature setting is limited to 32 and 10. The temperature jumps up and down if it is getting very hot and shivers from side to side if it is getting very cold. It also changes colour.

## Technologies

* JavaScript backend
* Testing backend using Jasmine
* JQuery application
* APIs: OpenWeatherMap and Google Maps


## [v1.0](https://github.com/DataMinerUK/thermostat/releases/tag/v1.0)

This is a static page and so does not have persistence enabled. View it at:

[datamineruk.github.io/thermostat](http://datamineruk.github.io/thermostat)

## [v2.0](https://github.com/DataMinerUK/thermostat/releases/tag/v2.0)

Uses a Sinatra web server to save the temperature in a session cookie, thus allowing persistence. The session is set to expire after 30 days.
