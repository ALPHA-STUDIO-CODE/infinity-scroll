const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 20;
const apiKey = "-AOYisPo9H6IDDyCH_DINC5CFNXV7qkTZq2elf8RmMg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&per_page=${count}`;

// Get photo from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

getPhotos();
