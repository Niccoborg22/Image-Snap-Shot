const dotenv = require('dotenv');
dotenv.config();

const requestOptions = {
  method: "GET",
  headers: {},
};

// Key to access the unsplash API
const unsplash_KEY = process.env.unsplash_KEY;

// Base URL to request data from the unsplash API
const base_URL = "https://api.unsplash.com/search/photos";

// Query parameters
const mountains_QUERY = 'mountains';
const cars_QUERY = 'cars';

const perPage_QUERY = '9';

const url = `${baseUrl}?query=${cars_QUERY}&per_page=${perPage_QUERY}&client_id=${unsplash_KEY}`;

// Function to save the raw Unsplash JSON data
async function unsplashPicture() {
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
}

// Function that returns the titles of the images in an array
async function getUnsplashTitles() {
  let titles = [];
  const data = await unsplashPicture();
  for (let i = 0; i < data.results.length; i++) {
    titles.push(data.results[i].alt_description);
  }
  return titles;
}

// Function that returns the links of the images in an array
async function getUnsplashPictures() {
  let urls = [];
  const data = await unsplashPicture();
  for (let i = 0; i < data.results.length; i++) {
    urls.push(data.results[i].urls.raw);
  }
  return urls;
}