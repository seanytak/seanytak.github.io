---
layout: essay
type: essay
title: "Meteor Gotchas"
date: 2017-10-19
labels:
  - Software Engineering
  - Meteor
---
## Meteor's Great
Meteor is the first JavaScript web framework I've worked with. Previously, I've worked with frameworks such as Flask and Django but being Python based, the experience was significantly different overall. The great part about using a JavaScript framework, is there's very little context switching between working on the front end and the back end since they're both written in JavaScript. This allows for a smoother development process and allows higher quality code to be produced.

## But Sometimes it's not so Great
# Problem 1
While Meteor speeds up the development process greatly by providing a plethora of tools to work with, Meteor takes a very long time to startup. When I first created a Meteor project, it ran fairly quickly taking under 20 seconds to startup. However, when I began to utilize Meteor templates and imported them into my own project, Meteor took an extremely long time to run for the first time taking over 20 minutes. Interestingly, this was only a noticeable problem when I was using a Windows Machine with Linux and macOS having no problems with long startup times. Testing this was a double edged sword, it led me to believe that Meteor and Windows had some innate problems when I first tried using different Operating Systems. After realizing this was an unlikely scenario, I began to delve deeper into what Meteor was doing when starting up. After performing multiple tests on my Windows Machine, the solution to the problem turned out to be relatively simple; updating Meteor and downloading the necessary node packages separately noticeably sped up the initial startup time. While it still takes around 5 minutes for the initial startup, this is a similar run time to my Linux and macOS machines.

# Problem 2
Meteor is a front end and back end framework, and it provides a lot of Meteor-specific syntax to speed up development. In the long run, this is great for development as you essentially learn some powerful Meteor tools that turn complicated JavaScript into a simple line of code. Unfortunately, the curve for learning many of the Meteor tools is quite high. The first time I tried to make a Meteor project, I left the <html> tag in my first html file. A few minutes later when I first tried to run the initial test, my application proceeded to crash. Crashing in itself is not a bad thing, learning from your errors is a great way to ensure you can overcome problems the next time similar errors come around. Unfortunately, Meteor did not provide an error log that was specific enough for me to identify the problem. Insufficient error reports are a major problem as they force developers to search for an error without any pointers as to what even caused the problem. Luckily, since this was my first Meteor project I could simply cross reference with other Meteor projects and see what was different. As it turned out, Meteor does not want <html> tags in the html file as when it utilizes the file it innately puts it in for you. While Meteor did not provide a sufficient error report for me to solve the problem on my own, the learning experience from this was invaluable. Now, I keep one tab open on Google Chrome with a Meteor project and another on the Meteor home page so I can quickly reference proper Meteor syntax and find differences between my code and the working code.

## Early Problems Lead to Better Workflow
Encountering two major and entirely different problems with Meteor may have been demoralizing at first, but the wonderful about these two errors is it taught me a lot about Meteor in only a couple of hours. Whenever I encounter Meteor errors now I understand how to approach these problems quickly and efficiently. 
