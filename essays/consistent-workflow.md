---
layout: essay
type: essay
title: Creating a Consistent Workflow
date: 2017-09-20
labels:
  - Software Engineering
  - Coding Standards
  - JavaScript
  - ESLint
  - Intellij
---

## The Most Important Thing in Software Engineering
Good Coding Standards are definitely the most important part of Software Engineering. Coding Standards is a broad topic so let's lay out what is entailed as part of coding standards.

1. Coding Conventions - This refers to the basic aspects of writing clean code: indenting lines by 2 or 4 spaces, variable / function names written with camelCase or underscore_case, and putting gradual spaces between operators, parenthesis, etc.

2. Commenting - This refers to how we're using comments throughout the program. Do we put a block comments above each of our functions, do we put block comments for chunks of code that perform some type of logical task, do we put comments for any line that may use some obscure logic?

3. Readability - This refers to how much understanding to we gain from a quick run through of the code. If you to read a block of code, could you understand the semantics quickly or do you need to dissect what the code is doing extensively to make sense of it?

## We've Solved Coding Conventions
Coding Conventions are enormously important for someone who is producing the code. Being able to type faster often means you can code faster; therefore, having logical coding conventions means we can consistently type good code at a rapid pace. Out of the three components we've defined for Coding Standards, Coding Conventions are the most trivial as quality tools such as ESLint keep our code in a static convention as well as Development Environments such as Intellij allowing for fast code completion and allowing us to apply some of our coding conventions we want automatically while we type regardless of our comfortability with them (think hitting tab to create 2 spaces vs 4 spaces). While adjusting to foreign coding conventions may take some time, tools exist to keep this component of coding standards very clear cut and allow the programmer to learn these conventions very quickly.

## Sometimes Comments are an After-Thought
Comments are a tricky subject. It's very rare that we'll actively type comments while we code as that breaks up our workflow between typing code and plain English. Often, we'll find ourselves working through our own code and adding comments wherever there may be an extra bit of explanation needed. However, adding comments isn't always a good thing. Let's look at a good example first

Good Example:
```javascript
function squared(array) {
  // Creates a subarray for numbers that are perfect squares
  const perfect = _.filter(array, function (number) { return Math.sqrt(number) === Math.ceil(Math.sqrt(number)); });

  // Creates a subarray that contains the non-perfect squares
  const imperfect = _.difference(array, perfect);

  // Creates an array that contains the two subarrays
  const farray = [];
  farray.push(perfect);
  farray.push(imperfect);
  return farray;
}
```

From 3 comments within the function, we can understand the three logical components taking place in this function. Without understanding how each underscore function even works, we know the result of the line of code quickly from reading the comments. Now let's look at a bad example

Bad Example:
```javascript
function squared(array) {
  // Uses filter function from underscore.js.
  // Filters by taking the square root of a number and comparing it to the ceil of the square root
  const perfect = _.filter(array, function (number) { return Math.sqrt(number) === Math.ceil(Math.sqrt(number)); });

  // Finds elements in the array that are not in the perfect array
  const imperfect = _.difference(array, perfect);

  // Creates an empty array called farray
  const farray = [];

  // Adds the perfect array
  farray.push(perfect);

  // Adds the imperfect array
  farray.push(imperfect);

  // Returns the perfect array and the imperfect array
  return farray;
}
```
This time we actually added more comments but the usage was much poorer. While the first comment provided a lot of information, a software engineer reading through the actual code could have most likely discerned the same thing while reading it. However, even if we know it's comparing the square root of a number to the ceil of that square root, we don't know what that means just from reading the comment. After some thinking, we may have discerned that means the square root of the number is an integer since the decimals wouldn't change anything, but the comment did not indicate that at all. Good comments should explain the result of a line of code as the result is why it is important to the program.

## Most Important Component, Readability
Coding Conventions can improve readability, as it's most likely easier to read sumOfIntegers over $um0FINT. However, beyond what we covered in the section "Coding Conventions" readability is about creating a logical flow in your code, combining trivial components and separating logically complex ones into different sections whenever necessary. Let's look at a quick practice underscore example:

```javascript
function maxDegrees(data) {
    return _.max(_.mapObject(_.groupBy(data, "FISCAL_YEAR"), totalDegrees), element => element);
}
```

While the code is "elegantly" written in a single line of code (we'll disregard whether it went over x amount of characters for this evaluation), it's very hard to understand each component and why it is necessary. Functional programming in particular, allows for some very condense code which is often better; however, in this instance there are too many logically complex components condensed into a single line. We'll look at another way to write this code:

```javascript
function maxDegrees(data) {
  const year = _.groupBy(data, "FISCAL_YEAR");
  const totals = _.mapObject(year, totalDegrees);
  return _.max(totals, element => element);
}
```

As we can see, all we did was divide each different underscore function into it's own line. This does several things for this code snippet:

1. It allows an outside developer to understand the importance of each underscore function, as functional programming can get quite complex depending how deeply nested the functions are within one another

2. It allows us, the original developer, to add comments neatly to what each component is doing.

Of course, this isn't to say we need to divide the code based on whenever we call an underscore function, but it's important to keep in mind that the code itself should be written in some logical fashion that allows other software engineers a simpler time when trying to understand the code.

## Focusing on the Hard Parts of Coding Standards
Creating good comments and optimizing the readability of code can be difficult sometimes; after all, software engineers of various skill levels will have a very different idea when to use comments and how they'll choose to structure their code. While being able to write well documented code may be challenging for software engineers of all skill levels, the beautiful part of Coding Standards today is that many developer tools today have eliminated trivial problems software engineers come across so we can focus on the big problems at hand. Writing in Intellij allows me to write code faster and combined with ESLint, allows me to focus less on formatting my code and random syntax errors, instead allowing me to develop code to solve problems efficiently. Coding Standards are a critically important software engineering principle to ensure that we can spend more time developing code and creating solutions, and less time trying to figure out and read through code to make sense of it in the first place.
