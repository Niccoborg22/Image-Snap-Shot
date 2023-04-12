const requestOptions = {
  method: "GET",
  headers: {},
};

// Define the base URL for the API endpoint
const baseUrl = "https://api.nasa.gov/planetary/apod";

// Define the API key to use (replace "DEMO_KEY" with your own API key)
const apiKey = "DEMO_KEY";

// Define the parameters you want to include in the API request
let dateCreate = new Date();
dateCreate.setDate(dateCreate.getDate() - 8);
let date = dateCreate.toISOString().slice(0, 10);
const thumbs = true;

// Add the parameters to the URL string
const url = `${baseUrl}?api_key=${apiKey}&start_date=${date}&thumbs=${thumbs}`;

async function nasaPicture() {
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getNasaPictureLoop() {
  let urls = [];
  const data = await nasaPicture();
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key == "url") {
        let url = data[i][key];
        urls.push(url)
      }
    }
  }
  return urls;
}

async function getNasaTitleLoop() {
  let titles = [];
  const data = await nasaPicture();
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key == "title") {
        let title = data[i][key];
        titles.push(title);
      }
    }
  }
  return titles;
}