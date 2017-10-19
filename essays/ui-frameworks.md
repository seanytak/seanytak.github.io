---
layout: essay
type: essay
title: Styling Content isn't Fun
date: 2017-10-05
labels:
  - Software Engineering
  - UI Frameworks
  - HTML
  - CSS
  - Semantic UI
---
## The Problem with CSS
Cascading Style Sheets (CSS) follows a straightforward principle, set a stylistic property to what you want until your elements appear the way you want. For example, if you want to style the top header of your web page, it can be as simple as:

```CSS
h1 {
  color: red;
  font-family: 'Open Sans' sans-serif;
  font-size: 48px;
}
```
The problem is that CSS is built on knowing the properties you want to modify and setting them appropriately; without that knowledge solving CSS problems can be a nightmare. CSS challenges can take on a variety of forms from browser compatibility, varying screen sizes, or something as simple as margins and padding being slightly off throwing off the entire layout of your design.

## UI Frameworks Save Programmers
Unless you're primarily developing code as a front-end developer, Software Developers are far more familiar with reading Software Documentation for various APIs to find functions or algorithms that solve a well-defined problem. To solve front-end problems in a more familiar fashion, Software Developers have designed UI Frameworks that simplify the styling process greatly. Instead of trying to find the perfect set of CSS properties to make content appear the way you want it, UI Frameworks like Semantic UI allow developers to find a styling solution they like, and implement it by calling the appropriate class. Let's take a simple example. If you wanted to design a top level menu for your front page, the solution using Semantic UI is simply:

```
<div class="ui borderless topmenu menu">
  <div class="ui container">
    <a class="fitted item"><i class="facebook f icon"></i></a>
    <a class="fitted item"><i class="twitter icon"></i></a>
    <a class="fitted item"><i class="pinterest f icon"></i></a>
    <a class="fitted item"><i class="instagram icon"></i></a>
    <a class="fitted right item"><i class="home icon"></i></a>
    <a class="fitted item"><i class="search icon"></i></a>
    <a class="fitted item"><i class="user icon"></i></a>
    <div class="ui dropdown fitted item">
      <div class="text">MY CART<i class="shop icon"></i>0</div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item">Your cart is currently empty.</div>
      </div>
    </div>
  </div>
</div>
```

To do this using plain CSS, we would need to group all the menu elements together and create a solution with margins and padding to keep the elements in a working menu. Often times, the plain CSS solution will be much more difficult when compared to the UI Framework equivalent.

## Don't Reinvent Solutions
By using a UI Framework, the end result will often be much more elegant than the plain CSS solution. Development takes time, and figuring out the CSS properties to accomplish the same task a UI Framework solves is simply a waste of time. Software Developers should spend more time understanding and implementing solutions to problems, not learning the tools to solve the problem. A few hours spent learning a UI Framework like Semantic UI will save a Software Developer dozens of hours in the long run when trying to implement styling solutions.
