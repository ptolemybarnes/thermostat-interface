# Thermostat

A thermostat console (but not an actual thermostat) whose display can be turned on and off. Gives the current temperature for your location (lat, long taken using HTML5 and geocoded using Google API - location name might appear funny owing to which element of the address is selected. No way of getting a particular part of an address from Google e.g. city. Temperature is got using OpenWeatherMap API). There is a power save mode with limits the maximum temperature to 25. With that turned off the temperature setting is limited to 32 and 10. The temperature jumps up and down if it is getting very hot and shivers from side to side if it is getting very cold. It also changes colour.

## Technologies

* JavaScript backend
* Testing backend using Jasmine
* JQuery application
* APIs: OpenWeatherMap and Google Maps

## View it at

[datamineruk.github.io/thermostat](http://datamineruk.github.io/thermostat)
