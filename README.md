# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

#### Mobile layout

![Mobile layout](./images/finished_product/mobile-layout.png)

#### Desktop layout

![Desktop layout](./images/finished_product/desktop-layout.png)

#### Active layout
![Active layout](./images/finished_product/active-layout.png)

### Links

- Live Site URL: [Github pages](https://elias-jacqmotte.github.io/intro-component-with-signup-form-vanilla/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Setting the required statement in HTML and using the `checkValidity()` function in JS for checking if the form corresponds to the requirements.
- Setting a minimum amount of characters required (eg. Password need to be atleast 8 characters)
- Looping over elements, such that it is not necessary to use each individual element -> `QuerySelectorAll('form')`
- Using nextSibling will select the 'text' element first, before selecting another viewable element. This can be disregarded by using nextElementSibling.
- Initializer to box shadow
- Media queries and grid. I had selected the wrong element, which is why my grid had some weird behaviour.


## Author

- Frontend Mentor - [@elias-jacqmotte](https://www.frontendmentor.io/profile/elias-jacqmotte)
