# Alpha Photo Gallery

A modern, high-performance infinite scroll photo gallery built with vanilla JavaScript and the Unsplash API. The gallery automatically loads new images as you scroll down the page, providing a seamless browsing experience.

## Features

- **Infinite Scroll**: Automatically loads new photos as you approach the bottom of the page
- **Unsplash API Integration**: Fetches random high-quality photos from Unsplash
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Loading Indicator**: Visual feedback with an animated spinner while photos are loading
- **Performance Optimized**:
  - Document fragment batching for efficient DOM manipulation
  - Scroll event throttling to prevent excessive function calls
  - Content visibility optimization for rendering efficiency
  - Non-blocking script loading with `defer` attribute
- **Accessible**: Proper alt text and semantic HTML structure

## Project Structure

```
infinity-scroll/
├── index.html       # Main HTML structure
├── script.js        # JavaScript functionality
├── style.css        # Styling and responsive design
└── README.md        # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch images from Unsplash API)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start browsing! The gallery will automatically load photos

## How It Works

### Photo Loading

1. On page load, `getPhotos()` fetches 30 random photos from the Unsplash API
2. Photos are stored in the `photosArray` and rendered using `displayPhotos()`
3. As each image loads, `imageLoaded()` increments the counter
4. When all images finish loading, the loader disappears and `ready` is set to true

### Infinite Scroll

- A scroll event listener monitors when the user scrolls near the bottom (1000px from the bottom)
- Scroll events are throttled (250ms) to improve performance
- When the threshold is reached and the gallery is `ready`, new photos are fetched
- The `ready` flag prevents multiple simultaneous API requests

## Technology Stack

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Responsive design with media queries and animations
- **JavaScript (Vanilla)**: No frameworks or dependencies
- **Unsplash API**: Source of random photos

## API Configuration

The gallery uses the Unsplash API with the following configuration:

```javascript
const count = 30; // Photos per request
const apiKey = "[Your API Key]"; // Unsplash API key
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
```

### Getting Your Own API Key

1. Visit [unsplash.com/developers](https://unsplash.com/developers)
2. Sign up for a free account
3. Create a new application
4. Copy your Access Key and replace the existing `apiKey` in `script.js`

## Performance Optimizations

### JavaScript

- **Document Fragment**: Images are added to a fragment before being inserted into the DOM, reducing reflows
- **Scroll Throttling**: Events are throttled to 250ms intervals to reduce function call frequency
- **Efficient Attribute Setting**: Uses `Object.entries()` for cleaner iteration

### CSS

- **Content Visibility**: Images use `content-visibility: auto` to skip rendering off-screen elements
- **Will Change**: Applies `will-change: opacity` for optimized animations
- **Media Queries**: Responsive design adjustments for screens 800px and wider

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

The gallery adapts to different screen sizes:

- **Mobile (< 800px)**: Full-width images with minimal margins
- **Desktop (≥ 800px)**: Images displayed with 10% side margins for better visual spacing

## Customization

### Changing the Number of Photos Per Request

Edit `script.js`:

```javascript
const count = 30; // Change this number
```

### Modifying the Scroll Threshold

Edit `script.js`, find the scroll event listener:

```javascript
document.body.offsetHeight - 1000; // Change 1000 to your desired pixel value
```

### Adjusting Throttle Delay

Edit `script.js`:

```javascript
}, 250); // Change 250 to your desired milliseconds
```

## Troubleshooting

### Photos Not Loading

- Check that your Unsplash API key is valid
- Verify you have an active internet connection
- Check the browser console (F12) for error messages

### Scroll Events Not Triggering

- Ensure your viewport is smaller than the total page height
- Check that `ready` is set to true
- Verify the scroll threshold calculation in the event listener

### Performance Issues

- Clear your browser cache
- Close unnecessary tabs
- Try a different browser to isolate issues

## Future Enhancements

- [ ] Add search functionality to filter photos by keywords
- [ ] Implement lazy loading with Intersection Observer
- [ ] Add filters or sorting options
- [ ] Include user profiles and photographer information
- [ ] Add favorites/bookmarking feature
- [ ] PWA capabilities for offline support

## License

This project uses the Unsplash API. Please review [Unsplash's API Guidelines](https://unsplash.com/api-guidelines) for usage rights and attribution requirements.

## Author

Alpha Studio Code - Built with vanilla JavaScript and 💙

## Contributing

Feel free to submit issues and enhancement requests!
