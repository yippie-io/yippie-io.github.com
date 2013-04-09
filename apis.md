---
layout: page
title: Overview - APIs
---

APIs
====

We currently run the following [JSON](http://simple.wikipedia.org/wiki/JSON) API-endpoints. With these, you can get most info, that is displayed on [iUPB](http://www.i-upb.de):


* [iUPB Navigator API](/apis.navigator.html) 
* more

Usage
=====

We consider ome APIs as **public**, where we generated most data ourselves or asked whether _publishing_ the data is fine.
Then, there are some APIs, where it is not so clear whether distributing the data (and not fetching it yourself) is ok – we consider those as **private** APIs that probably should only be used in apps targeted at iUPB or a subset of its features.

Note that we currently do not plan to introduce API tokens or any other form of user access control, the JSON will be served to anyone requesting it, yey! So, please do not hammer our servers with unnecessary requests, in other words: **play fair**! ☺ 

Some of our APIs support [JSONP](http://json-p.org) and thus are easily available for client-side use.

HTTP Cache Headers
------------------
All of our APIs send correct http headers to indicate when to refresh the info received (cache control public, expires, ...). E. g. information from the restaurant is stale after a couple of days vs. information about public transportation is stale after some minutes (depending on the station and how many entries are returned).
Some APIs might also return an ETag.

Read more about cache headers at [this blog post](http://betterexplained.com/articles/how-to-optimize-your-site-with-http-caching/).

**For you, this means**:

* if you use the APIs _server-side_: Cache data locally and use the http headers as a hint for when to expire the cache. By doing this, you save us many unnecessary requests.
* if you expose our APIs to end users via _HTML/JS_: Enable caching for your AJAX/JSON/JSONP library. jQuery can cache JSON according to our cache headers, as well as do browsers. By doing this, you not only save us many unneccessary requests, but also make the page load faster for your users.
