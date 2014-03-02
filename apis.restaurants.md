---
layout: page
title: Restaurants/Mensa - APIs
---

[iUPB Restaurants/Mensa](http://www.i-upb.de/restaurants) API
==================
The Restaurants API gets you the public menu from the [Studentenwerk Paderborn](http://www.studentenwerk-pb.de/gastronomie/) (operator of all the university's cousines) in a handy JSON format.

Usage
=====
  
The API-endpoint is [**http://www.i-upb.de/api/v2/restaurants**](http://www.i-upb.de/api/v2/restaurants). At this exact URL you will find a JSON response containing an array filled with objects containing a `name` attribute – these represent **restaurants** we have data about:

    curl http://www.i-upb.de/api/v2/restaurants.json
    -> [{"name":"Bistro HOTSPOT"},{"name":"Gownsmens Pub"},{"name":"Mensa"}]

So, after getting a list of available restaurants, you might want to get the **menu data** for a particular place to eat. Remember the name of the restaurant and call [**http://www.i-upb.de/api/v2/menus/RESTAURANT_NAME** ?date=OPTIONAL_DATE&locale=OPTIONAL_LOCALE](http://www.i-upb.de/api/v2/menus/Mensa.json)

    curl http://www.i-upb.de/api/v2/menus/Mensa.json
    -> 
    [
      {
        "menu":{
          "date":"2014-03-03",
          "description":"Kartoffel-Apfelgratin mit Preiselbeeren, Feldsalat",
          "name":"Mittagessen",
          "type":"Essen",
          "price":"Stud. 1,60 / Bed. 2,70 / Gast 3,20",
          "counter":null,
          "allergens":[
            "15",
            "A3",
            "A6",
            "A7",
            "38"
          ],
          "order_info":0, // sort this ascending to present the most interesting dishes first
          "badges":[
            "vegetarisch" // some special info, e. g. vegetarian or vegan food
          ]
        }
      },
      {
        "menu":{
          ... 
      }, ... 
    ]

This returns an array of objects containing a `menu`-attribute. Please inspect the JSON for more infos, it is pretty easy to understand.

If you do not supply a `date` parameter to the request, we will get the most interesting menus: The ones for the current day, or if it is very late or during weekends, the menus of the next day the restaurants will serve food.    
If you want to skip ahead a few days, use the date parameter and supply a date in the style of `YYYY-MM-DD`, like in `http://www.i-upb.de/api/v2/menus/Mensa?date=2013-06-24`.    
Please note, that the Studentenwerk is only publishing menus a few days ahead, so do not try to collect the menus for the next monthts, you will get no or incorrect data.

You can supply either `en` for English or `de` for German as the `?locale=de|en` parameter. All info we have available translated, such as menu names, are then in the correct language. If you omit the parameter, we either use what your user agent requires or will fallback to German.

All requests must be made using the `GET` HTTP-method; it's the default in most implementations and all browsers.

*Old docs:* You can find [the documentation for the (as per March 2014) deprecated first version `v1` here](/apis.restaurants.v1.html).

Source and more
===============

This data is gathered from a CSV feed of the Studentenwerk, but is a **private** API. Only use this for your pet projects, e. g. in your office. Consider using the [official data source](http://www.studentenwerk-pb.de/gastronomie/rahmenbedingungen-fuer-speiseplan-nutzung/) directly. 

Checkout it out [live](http://www.i-upb.de/restaurants) ([jQuery code](https://github.com/yippie-io/iUPB/blob/master/app/assets/javascripts/restaurants.js.coffee)).

![JSONP enabled](images/jsonp-ok.png)   
This API supports JSONP by supplying a `callback` parameter, like in `http://www.i-upb.de/api/v2/menus/Mensa?callback=myAwesomeCallback`.

Finally, we'd like to point you to another free web app targeting the UPB restaurants called ['Mobile Mensa'](http://zeugs.die-fachschaft.de/mobilemensa/). It is operated by the [Fachschaft Mathematik/Informatik](https://fsmi.uni-paderborn.de).

[← API overview](/apis.html)