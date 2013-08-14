---
layout: page
title: Weather Station - APIs
---

[iUPB Weather station](http://www.i-upb.de/weather) API
==================
The Weather station API returns current information from the own [weather station of the University of Paderborn](http://wetter.uni-paderborn.de). The data is directly read from their website.

![Logo UPB Wetterstation](http://wetter.upb.de/images/wetterstation.png)

Usage
=====
  
The API-endpoint is [**http://ext1.api.i-upb.de/wetter.php**](http://ext1.api.i-upb.de/wetter.php). At this URL you will find a JSON response containing an object with several attributes about the current weather situation at Warburger Straße or about the current day.

Here's an example response:

    {
	  "druck": "1014.1 hPa (NN)",
	  "drucktrend": "gleichbleibend",
	  "regen": 2,
	  "sonnenaufgang": "5:07 Uhr",
	  "sonnenuntergang": "21:47 Uhr",
	  "temp": 16, // This is the most accurate Paderborn temp. on the net!
	  "tempmax": 18.2,
	  "tempmaxzeit": "14:22 Uhr",
	  "tempmin": 11.8,
	  "tempminzeit": "6:25 Uhr",
	  "time": "23.06.13, 16:31 Uhr"
	}

More
===============

As the returned data is public, we consider this API **public**, as well.

Checkout it out [live](http://www.i-upb.de/weather).

![JSONP enabled](images/jsonp-ok.png)   
This API supports JSONP by supplying a `callback` parameter, like in `http://ext1.api.i-upb.de/wetter.php?callback=myAwesomeCallback`.

[← API overview](/apis.html)