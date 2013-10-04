---
layout: page
title: PAUL Courses and Course search - APIs
---

[iUPB Courses](http://www.i-upb.de/courses) API
==================
The Courses API allows you to query [PAUL](http://paul.uni-paderborn.de) (the lecture management system of the University of Paderborn) and read basic information about the lectures and modules of the current semester.

Usage
=====
  
Regarding PAUL courses, we offer two services:

Course Search
--------------

You can search for courses easily by calling [http://www.i-upb.de/api/v1/courses/search?query=SEARCH_TERM](http://www.i-upb.de/api/v1/courses/search?query=mathe). We search your term on many fields and return you an array with the course title and ID and – for your convenience – when and where the next class will be.

Example:

    [
	  {
	    "course":{
	      "title":"Spezielle Kapitel der Algorithmischen Diskreten Mathematik",
	      "next_class":{
	        "room":"H 2",
	        "time_from":"2013-06-25T13:30:00+02:00",
	        "time_to":"2013-06-25T15:00:00+02:00"
	      },
	      "id":"348784529519861"
	    }
	  },
	  ...]

Course schedules
---------------

So, after searching the courses you are interested in, grab more info about them by using their ID calling [http://www.i-upb.de/api/v1/course/COURSE_ID](http://www.i-upb.de/api/v1/course/348784529519861).

This will return a response containg info about the `course` itself, related courses, when the `next_class` will be and a detailled schedule for the semester in the `course_data` array:

    ... "course_data": [
	  {
	    "date": "2013-04-09T12:00:00Z",
	    "instructor": "Prof. Dr. Peter B\u00fcrgisser",
	    "room": "E 2 304",
	    "time_from": "2013-04-09T11:00:00+02:00",
	    "time_to": "2013-04-09T13:00:00+02:00"
	  },
	  ...
	] ...

Please try out the API in your browser and inspect the JSON, it will explain itself. Our contact us if you have any questions.

Source and more
===============

The data is gathered in a semi-automatical way from the PAUL websites, so - as with all data, but especially here - we do not guarantee any kind correctness. However, as this data also feeds our users' timetables we try to keep the information as up to date as possible.

As the data is public (and you will only get the course data that is public, i. e. viewable without signing in into PAUL), we consider this API **public**.

Checkout it out [live](http://www.i-upb.de/courses).

![JSONP enabled](images/jsonp-ok.png)   
This API supports JSONP by supplying a `callback` parameter, like in `http://www.i-upb.de/api/v1/course/COURSE_ID?callback=myAwesomeCallback`.

Please cache the course detail data – it propably will change rarely during a semester.

[← API overview](/apis.html)