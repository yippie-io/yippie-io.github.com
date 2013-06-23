---
layout: page
title: Overview - APIs
---

APIs
====

We currently run the following [JSON](http://simple.wikipedia.org/wiki/JSON) API-endpoints. With these, you can get most info, that is displayed on [iUPB](http://www.i-upb.de):


* [iUPB Navigator API](/apis.navigator.html) 
* [iUPB Restaurants/Mensa API](/apis.restaurants.html) 
* [iUPB Public Transportation API](/apis.transportation.html)
* [iUPB Courses API](/apis.courses.html) 

The following APIs are **experimental** in some sort, use at your own risk ☺:
* [iUPB Pinboard API](/apis.pinboard.html)
* [iUPB Timetable iCal Feed](/apis.timetable.html)

Usage
=====

We consider some APIs as **public**, where we generated most data ourselves or asked whether _publishing_ the data is fine.
Then, there are some APIs, where it is not so clear whether distributing the data (and not fetching it yourself) is ok – we consider those as **private** APIs that probably should only be used in apps targeted at iUPB or a subset of its features.

Note that we currently do not plan to introduce API tokens or any other form of user access control – the JSON will be served to anyone requesting it, for free, yey! So, please do not hammer our servers with unnecessary requests, in other words: **play fair**! ☺ 

Some of our APIs support [JSONP](http://json-p.org) and thus are easily available for client-side use.

All APIs are read only and thus you only need `GET` requests. This also means you can try out the API-URLs in any web browser easily. ☺

HTTP Cache Headers
------------------
All of our APIs send correct http headers to indicate when to refresh the info received (cache control public, expires, ...). E. g. information from the restaurant is stale after a couple of days vs. information about public transportation is stale after some minutes (depending on the station and how many entries are returned).
Some APIs might also return an ETag.

Read more about cache headers at [this blog post](http://betterexplained.com/articles/how-to-optimize-your-site-with-http-caching/).

**For you, this means**:

* if you use the APIs _server-side_: Cache data locally and use the http headers as a hint for when to expire the cache. By doing this, you save us many unnecessary requests.
* if you expose our APIs to end users via _HTML/JS_: Enable caching for your AJAX/JSON/JSONP library. jQuery can cache JSON according to our cache headers, as well as do browsers. By doing this, you not only save us many unneccessary requests, but also make the page load faster for your users.

Warranty and Support
--------
The APIs are provided _AS IS_. We cannot assure the correctness of the data nor do we have some SLA or so. However, since iUPB uses these APIs for 2,000+ users a day, they are probably _production-ready_.   
You might want to [drop us a line](http://www.i-upb.de/contact-us) if you are using one of the APIs, so we can inform you about schema changes (not all of our APIs are versioned).