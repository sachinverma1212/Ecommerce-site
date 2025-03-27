const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
    filename: 'hero-fashion.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    filename: 'men-category.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    filename: 'women-category.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    filename: 'men-tshirt.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg',
    filename: 'men-jeans.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    filename: 'men-jacket.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
    filename: 'women-dress.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg',
    filename: 'women-pants.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
    filename: 'women-blouse.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '..', 'public', 'images', filename);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download all images
images.forEach(image => {
  downloadImage(image.url, image.filename);
}); 