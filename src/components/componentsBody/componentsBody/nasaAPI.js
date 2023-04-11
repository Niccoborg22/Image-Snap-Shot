const requestOptions = {
  method: "GET",
  headers: {},
};

// Define the base URL for the API endpoint
const baseUrl = "https://api.nasa.gov/planetary/apod";

// Define the API key to use (replace "DEMO_KEY" with your own API key)
const apiKey = "DEMO_KEY";

// Define the parameters you want to include in the API request
const date = "2023-04-10"; // replace with your desired date
const thumbs = true; // replace with your desired value

// Add the parameters to the URL string
const url = `${baseUrl}?api_key=${apiKey}&start_date=${date}&thumbs=${thumbs}`;

async function nasaPicture() {
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
}
