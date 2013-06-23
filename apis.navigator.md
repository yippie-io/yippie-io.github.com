---
layout: page
title: Navigator - APIs
---

[iUPB Navigator](http://www.i-upb.de/pages/navigator) API
==================
The navigator API enables you to get information for a specific major at the [University of Paderborn](http://www.upb.de) targeted for students. At the moment, most of the important contact persons for a student are returned (gathered from the ZSB).

Usage
=====
  
The API-endpoint is [**navigator.api.i-upb.de**](http://navigator.api.i-upb.de). At the [root of the domain](http://navigator.api.i-upb.de), you also find some documentation to get you started and examples.


Source and more
===============

As this data is gathered from public databases of the University of Paderborn and we built this feature in cooperation with the [ZSB](http://zsb.upb.de), we consider this as a **public** API.

Checkout it out [live](http://www.i-upb.de/pages/navigator) ([jQuery code](https://github.com/yippie-io/iUPB/blob/master/app/assets/javascripts/pages_navigator.js.coffee)). You might also want to checkout the [internals of this API app](https://github.com/yippie-io/iupb_navigator).

![JSONP enabled](images/jsonp-ok.png)   
This API supports JSONP, find out how at the documentation linked at the top.

[← API overview](/apis.html)