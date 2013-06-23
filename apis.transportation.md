---
layout: page
title: Public Transportation - APIs
---

[iUPB Public Transportation](http://www.i-upb.de/transportation) API
==================
The Public Transportation API returns the next few busses leaving from the campusses of the University of Paderborn/FHDW.

Usage
=====
  
The API-endpoint is [**http://ext1.api.i-upb.de/busplan.php**](http://ext1.api.i-upb.de/busplan.php). At this URL you will find a JSON response containing an array filled with objects representing a bus leaving soon.

Each object in the array contains the following attributes:
* `date`: date/time string (`YYYY-MM-DD HH:MM:SS`) representing when the bus will leave
* `direction`: the direction of the bus, i. e. what the bus is labeled
* `line`: the line of the bus, e. g. 4
* `station`: either one of
  * `MuseumsForum`: Zukunftsmeile, HNI, FHDW
  * `Uni/Schöne Aussicht`: Main campus Warburger Str.
  * `Uni/Südring`: Main campus Südring

This API endpoint returns proper **cache-headers** you can use to make as many requests neccessary to stay up to date. Please use those and do not randomly poll for new changes.

More
===============

There might be errors in this as there unfortunately is no automatic way to gather this data we know about. However, especially during lectures, most data should be fine.    
We consider this API not really public, but use at your own risk.

Checkout it out [live](http://www.i-upb.de/transportation).

![JSONP enabled](images/jsonp-ok.png)   
This API supports JSONP by supplying a `callback` parameter, like in `http://ext1.api.i-upb.de/busplan.php?callback=myAwesomeCallback`.

[← API overview](/apis.html)