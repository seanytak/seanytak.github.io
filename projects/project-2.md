---
layout: project
type: project
image: images/fly.png
title: Fly!
permalink: projects/fly
date: 2017
labels:
  - Three.js
  - Blender
  - jQuery
summary: Fly! is a fun and interactive flight simulator designed for kid passengers to see what's going on under the Earth as they fly above it.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/UeNcsnRxHJM" frameborder="0" allowfullscreen=""></iframe>

<h1> Introduction </h1>
Fly! was designed for the 2017 NASA Space Apps Challenge, winning the People's Choice Award at the local level and went on to compete against other projects at the National level.

<h1> The Problem </h1>
Fly! was designed for the Pilots Plus sub-category of the Space Apps Challenge which focused on creating an application that would enhance travelers experience on their flight. Since a majority of a flight takes place above the clouds, our team chose to create a web application that allows users to simulate their flight and see what they're traveling over. The design of Fly! emphasizes a children friendly environment that allows them to have fun while learning about the world around them before their travels.

<h1> Implementation </h1>
The core design of Fly! uses models created in [Blender](https://www.blender.org/) which were exported as JSON data and implemented in our web application using [Three.js](https://threejs.org/). Fly! incorporates data from the following sources:
<ul>
<li> To show the weather around the plane - [OpenWeather API](https://openweathermap.org/api) </li>
<li> To find the geographical coordinates our plane is in - [Google Geocoder](https://developers.google.com/maps/documentation/geocoding/start) </li>
<li> To find locations of interest around the plane - [Google Map's API](https://developers.google.com/maps/) </li>
<li> To find the biome of the earth underneath the plane - [NASA's Land Satellite Images](https://api.nasa.gov/api.html#EONET) </li>
</ul>

<h1> Learning Outcomes </h1>
Fly! was only the second serious web application I had worked on. Prior to this project, I had no experience using Three.js so learning the various Three.js components such as the camera, meshes, and lighting was very challenging at first. Implementing the custom models was relatively simplified by Three.js but weaving them together to work in conjunction with another presented another set of challenges altogether. The most difficult part was incorporating the various APIs we used into our project in a meaningful way since we had to map the data in an appropriate way with our model of the earth. Overall, this project greatly developed my ability to be flexible in software development, learning entirely new libraries and toolsets to a proficient level in a short amount of time.

Source: <a href="https://github.com/ilungj/nasa-space-app"><i class="large github icon"></i>Fly!</a>
