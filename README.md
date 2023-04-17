# Image-Snap-Shot
## Description
---
This React web application aims at inspiring artistic people to find the image they most like about their favourite topics. I decided to develop this application to train in working with APIs, Javascript, React and learn the syntax and bases of TypeScript.

## Webpages
---
The endpoints of the website are:
### /
- *Description*: This endpoint will greet the user with a short introduction to the website and offer the user the oppurtunity to choose with group of images he would like to see
- *Modules*: Navbar (SearchButton), Body (FirstPageOptions), Footer

### /Space
- *Description*: This endpoint will show the user 9 Space images from the NASA APOD API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, NasaAPI), Footer

### /Cars
- *Description*: This endpoint will show the user 9 Cars images from the Unsplash API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, UnsplashAPI), Footer

### /Mountains
- *Description*: This endpoint will show the user 9 Mountains images from the Unsplash API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, UnsplashAPI), Footer

## Modules
---
The architecture of the modules in this application are the following:

### NavBar
- *Description*: This module returns the HTML for a bootstrap navbar. The Props make sure that it is able to return a navbar for any application with as many pages possible.
- *Props*: 
    - barName: String representing the name of the application
    - appPicture: String link to the 'logo' that you want displayed in the navbar
    - barPages: String array with all the pages names that you want displayed in the navbar
    - barLink: String array with all the links to the barPages
- *Dependencies*: SearchButton

### SearchButton
- *Description*: This module returns the HTML for a search bar button that let the user search for the page that is searching for.
- *Props*: 
    - pages: String array with all the links to the pages in the website
- *Dependencies*: /

### Body
- *Description*: This module returns the HTML for the body of the page. It is used for all the endpoints
- *Props*: 
    - appTitle: Title of the page that will be displayed;
    - appDescription: Description of the page that will be displayed;
    - firstPage: yes/no string that is used to differentiate the / endpoint to the others;
    - imagesType: string to differentiate between the Cars and Mountains endpoint;
- *Dependencies*: FirstPage, ImageDisplay

### FirstPage
- *Description*: This module returns the HTML for a series of cards that explain what the user should expect if decide to press them.
- *Props*: 
    - imagesTitle: string array with the title of the pages that will be displayed
    - imagesLink: string array with the link of the images that will be displayed
    - imagesPageLink: string array with the link of the page descripted
    - imagesDescription: string array with the description of the page that will be rendered if pressed on the button
- *Dependencies*: /