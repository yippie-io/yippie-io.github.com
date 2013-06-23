---
layout: page
title: Restaurants/Mensa - APIs
---

[iUPB Restaurants/Mensa](http://www.i-upb.de/restaurants) API
==================
The Restaurants API gets you the public menu from the [Studentenwerk Paderborn](http://www.studentenwerk-pb.de/gastronomie.html) (operator of all the university's cousines) in a handy JSON format.

Usage
=====
  
The API-endpoint is [**http://www.i-upb.de/api/v1/restaurants**](http://www.i-upb.de/api/v1/restaurants). At this exact URL you will find a JSON response containing an array filled with objects containing a `name` attribute – these represent **restaurants** we have data about:

    GET http://www.i-upb.de/api/v1/restaurants.json
    -> [{"name":"Bistro HOTSPOT"},{"name":"Gownsmens Pub"},{"name":"Mensa"}]

So, after getting a list of available restaurants, you might want to get the **menu data** for a particular place to eat. Remember the name of the restaurant and call [**http://www.i-upb.de/api/v1/menus/RESTAURANT_NAME** ?date=OPTIONAL_DATE](http://www.i-upb.de/api/v1/menus/Mensa.json)

    GET http://www.i-upb.de/api/v1/menus/Mensa.json
    -> 
    [
	  {
	    "menu":
	      {
	        "counter": null,
	        "date":	"2013-06-24",
	        "description": "Gebackene Gemüsestäbchen",
	        "name":	"Menü-Vorschlag 1",
	        "price": null, // could also be a price as a correctly formatted string, e. g. at the pasta buffet
	        "side_dishes":
	          [
	            "mit Kräuterschaum, Vollkornnudeln, Salatauswahl (2) und Dessert"
	          ],
	        "type": "Vegetarisch"
	      }
      }, ... ]

This returns an array of objects containing a `menu`-attribute. Please inspect the JSON for more infos, it is pretty easy to understand.

If you do not supply a `date` parameter to the request, we will get the most interesting menus: The ones for the current day, or if it is very late or during weekends, the menus of the next day the restaurants will serve food.    
If you want to skip ahead a few days, use the date parameter and supply a date in the style of `YYYY-MM-DD`, like in `http://www.i-upb.de/api/v1/menus/Mensa?date=2013-06-24`.    
Please note, that the Studentenwerk is only publishing menus maximum seven days ahead, so do not try to collect the menus for the next monthts, you will get no or incorrect data.

Source and more
===============

This data is gathered from an XML feed of the Studentenwerk plus the data is public anyway, so we consider this a **public** API. However, as the Studentenwerk is more of a 'real' company than an university is: If you plan something big involving the menu data, just drop them a line beforehand. 

Checkout it out [live](http://www.i-upb.de/restaurants) ([jQuery code](https://github.com/yippie-io/iUPB/blob/master/app/assets/javascripts/restaurants.js.coffee)).

This API does not support JSONP.

Finally, we'd like to point you to another free web app targeting the UPB restaurants called ['Mobile Mensa'](http://zeugs.die-fachschaft.de/mobilemensa/). It is operated by the [Fachschaft Mathematik/Informatik](https://fsmi.uni-paderborn.de).

[← API overview](/apis.html)