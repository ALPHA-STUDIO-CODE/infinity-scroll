const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 20;
const apiKey = "-AOYisPo9H6IDDyCH_DINC5CFNXV7qkTZq2elf8RmMg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function setAttribute(elements, attribute) {
  for (const key in attribute) {
    elements.setAttribute(key, attribute[key]);
  }
}

// Create elements for links & photos, add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");

    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for photo
    const img = document.createElement("img");

    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photo from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

// On load
getPhotos();
