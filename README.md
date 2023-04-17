# Image-Snap-Shot
## Overview
---
This React web application aims at inspiring artistic people to find the image they most like about their favourite topics. I decided to develop this application to train in working with APIs, Javascript, React and learn the syntax and bases of TypeScript.

## Webpages
---
The endpoints of the website are:
### /
- *Description*: This endpoint will greet the user with a short introduction to the website and offer the user the oppurtunity to choose with group of images he would like to see
- *Modules*: Navbar (SearchButton), Body (FirstPageOptions), Footer
![Image snap 1](https://user-images.githubusercontent.com/114749413/232517019-4a920cde-ab9c-4ffa-8ea5-8b2e77aebb55.png)

### /Space
- *Description*: This endpoint will show the user 9 Space images from the NASA APOD API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, NasaAPI), Footer
![Image snap Space](https://user-images.githubusercontent.com/114749413/232517049-8b8bbaa5-b4b9-4737-be56-b180b56e6a2b.png)

### /Cars
- *Description*: This endpoint will show the user 9 Cars images from the Unsplash API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, UnsplashAPI), Footer
![Image snap Cars](https://user-images.githubusercontent.com/114749413/232517079-bf865d5c-7838-4950-a79d-e5943630ebde.png)

### /Mountains
- *Description*: This endpoint will show the user 9 Mountains images from the Unsplash API together with a title/short description.
- *Modules*: Navbar (SearchButton), Body (ImagesDisplay, ImageRow, UnsplashAPI), Footer
![Image snap Mountains](https://user-images.githubusercontent.com/114749413/232517109-7df844cf-7b81-4cc8-8fae-0d0c20fab587.png)

## Modules
---
The architecture of the modules in this application are the following:
![Image snap Modules](https://user-images.githubusercontent.com/114749413/232517130-521cc996-0788-455a-a64a-f4361f567038.png)
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

### ImageDisplay
- *Description*: This module returns the HTML for a series of cards that explain what the user should expect if decide to press them.
- *Props*: 
    - imagesType: string that defines what type of pictures should be displayed
- *Dependencies*: ImageRow, NasaAPI, UnsplashAPI

### ImageRow
- *Description*: This module returns the HTML for a series of 3 cards with an image and a short description of it
- *Props*: 
    - imagesDescription: string array with the short description of the images in imagesLink
    - imagesLink: string array with the link of the images that will be displayed
- *Dependencies*: /

### NasaAPI
- *Description*: JavaScript file exported with a declaration file exporting 2 functions that are needed to get the short descriptions and links to the images
- *Props*: /
- *Dependencies*: /

### UnsplashAPI
- *Description*: JavaScript file exported with a declaration file exporting 2 functions that are needed to get the short descriptions and links to the images
- *Props*: /
- *Dependencies*: /

### Footer
- *Description*: Returns the HTML for a footer, including a copyright notice and the link to a the pages in the website
- *Props*:
    - companyName: string representing the name of the company/person of the website
    - footerPages: string array representing the name of the pages that you want to display
    - footerLink: string array representing the links of the pages in footerPages
- *Dependencies*: /