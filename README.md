# Frontend Mentor - Sunnyside agency landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
<img width="193" alt="Screenshot 2023-08-04 at 8 56 12 PM" src="https://github.com/davupls/Sunnyside-agency/assets/47851457/116c5807-cb9a-403a-af5b-24e4f2c2a2f6">

<br />

![Screenshot 2023-08-04 at 20-50-43 Frontend Mentor Sunnyside agency landing page](https://github.com/davupls/Sunnyside-agency/assets/47851457/2d93cc24-a3e6-4c91-ad9b-f9befaef08a9)

### Links

- Solution URL: (https://github.com/davupls/Sunnyside-agency/tree/main)
- Live Site URL: (https://github.com/davupls/Sunnyside-agency/tree/main)

## My process

- Study the layout for all devices
- Structure html to make it simple to replicate

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript DOM manipulation

### What I learned

To see how you can add code snippets, see below:

```js
window.addEventListener("resize", function(){
    if (viewport > 500) {
        viewport = this.window.innerWidth
        arrowImage.width = viewport / 40;
        console.log("Viewport: ", viewport, "\nArrow: ", arrowImage.width);
    } else {
        console.log("Something is wrong.")
    }
})
};
```
With this code I can update the size of any element base on the viewport width.

### Continued development

- Tablet screen can be refined more


## Author

- Website - [David McLean](https://www.davidmlean.dev)
- Frontend Mentor - [@davupls](https://www.frontendmentor.io/profile/davupls)
- Twitter - [@davutech](https://www.twitter.com/davutech)

## Acknowledgments

To my Sister for taking the time out to check how the website looked on different devices, thank you.

An to Matthew Thomas for doing the same.
