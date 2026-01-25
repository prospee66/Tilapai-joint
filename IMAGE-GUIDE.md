# Image Replacement Guide

The website currently uses placeholder images from Unsplash. Follow this guide to replace them with your actual restaurant photos.

## Gallery Images (src/pages/Gallery.jsx)

Replace the image URLs in the `galleryItems` array (lines 34-46):

```javascript
const galleryItems = [
  {
    id: 1,
    category: 'food',
    title: 'Smoked Tilapia with Banku',
    description: 'Our signature dish',
    image: 'YOUR_IMAGE_URL_HERE' // Replace this URL
  },
  // ... more items
];
```

## Home Page Signature Dish (src/pages/Home.jsx)

Replace the image URL around line 107:

```javascript
<img
  src="YOUR_IMAGE_URL_HERE" // Replace this URL
  alt="Delicious Smoked Tilapia with Banku"
  className="signature-img"
/>
```

## How to Add Your Own Images

### Option 1: Using Local Images (Recommended)

1. Create a folder: `src/assets/images/`
2. Add your photos to this folder (e.g., `fish1.jpg`, `fish2.jpg`)
3. Import in your component:
   ```javascript
   import fish1 from '../assets/images/fish1.jpg';
   ```
4. Use in your code:
   ```javascript
   <img src={fish1} alt="Description" />
   ```

### Option 2: Using Image Hosting

1. Upload images to a service like:
   - Cloudinary (free tier available)
   - ImgBB
   - GitHub (for small projects)
   - Your own web hosting

2. Copy the direct image URLs
3. Replace the placeholder URLs in the code

## Recommended Image Specifications

- **Gallery Images**: 500x500px (square), optimized for web
- **Home Signature Dish**: 800x600px, optimized for web
- **Format**: JPG or WebP (for better compression)
- **File Size**: Under 200KB per image (use tools like TinyPNG to compress)

## Image Categories for Gallery

- **Food**: Photos of your dishes (fish, banku, pepper sauce)
- **Process**: Behind-the-scenes (smoking, grilling, preparation)
- **Customers**: Happy customers enjoying meals, restaurant atmosphere

## Tips

- Use high-quality, well-lit photos
- Show your food in an appetizing way
- Include variety (close-ups, wide shots, people)
- Compress images before uploading to improve page load speed
- Use consistent styling/editing for a professional look
