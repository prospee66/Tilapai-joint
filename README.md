# Akopia Website

A modern, responsive website for Akopia - a Ghanaian smoked tilapia and banku restaurant, built with React and Vite.

## Features

### Pages
- **Home**: Hero section, features, signature dish showcase, and how it works
- **Menu**: Interactive fish size selector, pepper options, add-ons, and combo packs
- **Gallery**: Photo grid showcasing food, preparation process, and happy customers
- **About**: Business story, values, smoking process, and team information
- **Contact**: Contact form, location map, opening hours, and payment methods

### Design Highlights
- Mobile-first responsive design
- Warm color palette (oranges, browns, cream) evoking smoky, grilled flavors
- Modern sans-serif typography (Poppins for headings, Roboto for body text)
- Smooth animations and transitions
- Sticky navigation bar
- Interactive menu selection
- WhatsApp integration for easy ordering
- Ghana-focused payment methods (Mobile Money, Cash, Bank Transfer)

### Technical Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Google Fonts (Poppins, Roboto)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd akopia-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
akopia-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Menu.jsx
│   │   ├── Menu.css
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Color Palette

- **Deep Orange** (#D2691E): Primary accent, CTAs
- **Brown** (#8B4513): Headers, smoke effect
- **Cream/Beige** (#F5F5DC): Backgrounds
- **Dark Charcoal** (#333333): Body text
- **Green** (#228B22): Subtle accents (fresh)

## Customization

### Update Business Information

1. **Contact Details**: Edit the contact information in:
   - `src/components/Footer.jsx`
   - `src/components/Navbar.jsx`
   - `src/pages/Contact.jsx`

2. **Menu Prices**: Update prices in `src/pages/Menu.jsx`

3. **Opening Hours**: Modify hours in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

4. **Payment Details**: Update mobile money numbers and payment info in `src/pages/Contact.jsx`

5. **Social Media Links**: Change social media URLs in `src/components/Footer.jsx`

### Adding Images

Replace placeholder images by:
1. Adding your images to `src/assets/images/`
2. Importing them in the respective component files
3. Replacing the placeholder divs with `<img>` tags

Example:
```jsx
import heroImage from '../assets/images/hero.jpg';

<img src={heroImage} alt="Smoked Tilapia" />
```

### Google Maps Integration

To add a real Google Maps embed in the Contact page:
1. Get an embed code from Google Maps
2. Replace the `.map-placeholder` div in `src/pages/Contact.jsx` with the iframe

## Features to Add

### Recommended Enhancements
1. **Real Images**: Add professional food photography
2. **Online Ordering**: Integrate with delivery services
3. **Customer Reviews**: Add testimonials section
4. **Blog/News**: Share recipes and updates
5. **Language Toggle**: Add Twi/Ga translations
6. **Dark Mode**: Optional dark theme
7. **SEO Optimization**: Add meta tags and structured data
8. **Analytics**: Integrate Google Analytics
9. **Chat Widget**: Live customer support
10. **Email Marketing**: Newsletter signup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for mobile-first experience
- Fast loading with Vite
- Lazy loading for images (recommended to implement)
- Minimal dependencies
- CSS-based animations (no heavy libraries)

## Deployment

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## License

This project is created for Akopia restaurant.

## Support

For questions or support, contact the development team.

---

**Built with ❤️ for authentic Ghanaian cuisine**
