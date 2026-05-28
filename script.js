const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let scrollTimeout = null;

// Unsplash API
const count = 30;
const apiKey = "-AOYisPo9H6IDDyCH_DINC5CFNXV7qkTZq2elf8RmMg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if image are loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

function setAttribute(elements, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    elements.setAttribute(key, value);
  });
}

// Create elements for links & photos, add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  const fragment = document.createDocumentFragment();

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

    // Check if image is loaded
    img.addEventListener("load", imageLoaded);

    // Put <img> inside <a>, then put both inside fragment
    item.appendChild(img);
    fragment.appendChild(item);
  });

  // Add all items to DOM at once
  imageContainer.appendChild(fragment);
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

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener("scroll", () => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      ready
    ) {
      ready = false;
      getPhotos();
    }
    scrollTimeout = null;
  }, 250);
});

// On load
getPhotos();
