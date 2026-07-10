# Mini E-Commerce Front-End

A responsive e-commerce front-end with product listings, shopping cart functionality, and clean UI built with modern vanilla JavaScript.

## Live Demo

[View Live Store](https://developer-nkosi.github.io/mini-ecommerce/)

## Features

### Product Listing
- 18 sample products across 4 categories
- Product cards with high-quality lifestyle imagery, ratings, prices, and badges
- Sale/New badges
- Wishlist toggle with premium "pop" animation
- Single sleek star rating with review counts

### Shopping Cart
- Add products to cart with real-time feedback
- Modern slide-in cart sidebar with professional spacing
- Adjust quantity (+/-) or remove items
- Real-time total calculation
- Cart persists in localStorage
- Simulated professional checkout flow

### Search & Filter
- Real-time product search with sleek "ghost" style search bar
- Category filter tabs (All, Electronics, Clothing, Accessories, Home & Living)
- Perfectly aligned grid system with enforced 1:1 aspect ratios

### UI/UX
- Professional eBay-inspired minimalist design
- Responsive design (mobile, tablet, desktop) with optimized breakpoints
- Automatic dark mode (follows system preference)
- Smooth animations and transitions
- Toast notifications on add to cart
- Mobile-optimized navigation with full-screen overlay

## Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, CSS Variables, Animations) |
| Language | Vanilla JavaScript |
| Icons | Font Awesome 6.4.0 |
| Imagery | Unsplash Lifestyle Photography |

## Design Approach

- **Professional Aesthetic**: A high-end marketplace feel inspired by modern retail standards (eBay/Minimalist).
- **Color System**: Strict 60-30-10 palette formula using a monochromatic base with professional blue (#0968f6) and gold accents.
- **Grid Layout**: Enforced 1:1 image aspect ratios to ensure perfectly aligned rows and a clean, architectural look.
- **Interactivity**: Hover-to-reveal effects and glassmorphism elements for a premium user experience.
- **Responsive**: Mobile-first with fluid transitions across a comprehensive set of breakpoints.
- **Data Persistence**: localStorage for persistent shopping sessions.

## Project Structure

```
mini-ecommerce/
├── index.html      # Main HTML file
├── style.css       # All styles with dark mode support
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/developer-nkosi/mini-ecommerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mini-ecommerce
   ```

3. Open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html
   ```

## How It Works

### Products
- Products are stored in a JavaScript array
- Each product has: id, name, category, price, rating, icon
- Products render dynamically based on filter/search

### Cart
- Cart items stored in localStorage
- Add: Click "Add to Cart" button
- Update: Use +/- buttons in cart sidebar
- Remove: Click trash icon
- Total updates automatically

### Categories
- Filter products by clicking category tabs
- Combine with search for precise results

## Customization

### Add Products
Add new products to the `products` array in `script.js`:
```javascript
const products = [
    {
        id: 19,
        name: "New Product",
        category: "electronics",  // electronics, clothing, accessories, home
        price: 49.99,
        originalPrice: 69.99,  // null if no sale
        rating: 4.5,
        reviews: 100,
        badge: "new",  // "new", "sale", or null
        image: "https://images.unsplash.com/photo-..." // Unsplash image URL
    },
    // Add more products...
];
```

### Change Colors
Edit CSS variables in `style.css` (follows eBay-inspired palette):
```css
:root {
    --primary: #0968f6;
    --accent: #3662f4;
    --text-primary: #191919;
    --bg-body: #ffffff;
}
```

## License

This project is licensed under the GNU Lesser General Public License v2.1.

## Author

**Wongani Kasawala Nkosi** (Developer Nkosi)
- GitHub: [developer-nkosi](https://github.com/developer-nkosi)
- LinkedIn: [Wongani Nkosi](https://www.linkedin.com/in/wongani-nkosi-36b53b297)
- Email: eugenenkose@gmail.com
