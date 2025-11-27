# Chitsulo Welding & Fabrication Landing Page

A modern, responsive landing page for Chitsulo Welding & Fabrication Company built with React, Vite, TypeScript, and Tailwind CSS with shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional layout tailored for industrial services with red accent branding
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Built with shadcn/ui components
- **Service Showcase**: Highlight welding and fabrication services
- **Project Gallery**: Visual portfolio of completed work
- **Contact Integration**: Professional quote request form
- **Client Testimonials**: Customer reviews and feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17 + shadcn/ui
- **Routing**: TanStack Router
- **TypeScript**: Full type safety
- **Icons**: Tabler Icons & Lucide React
- **Forms**: React Hook Form with validation
- **UI Components**: Comprehensive shadcn/ui component library

## 📦 Project Structure

```
src/
├── app/                    # Main application entry points
│   ├── __root.tsx         # Root layout with meta tags
│   ├── index.css          # Global styles and Tailwind config
│   └── index.tsx          # Home page component
├── components/            # React components
│   ├── layout/            # Layout components
│   │   ├── footer.tsx     # Site footer
│   │   └── navbar.tsx     # Navigation header
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Main banner section
│   │   ├── history.tsx    # Company history
│   │   ├── services.tsx   # Services showcase
│   │   ├── project-gallery.tsx # Project portfolio
│   │   ├── testimonials.tsx    # Client testimonials
│   │   ├── quote-form.tsx      # Contact form
│   │   └── process.tsx    # Work process (unused)
│   └── ui/                # shadcn/ui components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       └── ... (50+ other UI components)
├── content/               # Static content
│   ├── projects.json      # Project data
│   └── testimonials.json  # Testimonial data
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts      # Mobile detection hook
│   └── use-toast.ts       # Toast notifications hook
└── lib/                   # Utilities and data
    ├── data.ts            # Data fetching functions
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors

- **Primary**: Red (`#dc2626`) - Brand color
- **Background**: Dark theme with card-based layout
- **Typography**: Plus Jakarta Sans (body) + Mulish (headings)

### Key Sections

1. **Hero**: Compelling headline with background image and call-to-action
2. **History**: Company story with image collage and features
3. **Services**: Three main service offerings with images
4. **Project Gallery**: Filterable portfolio with lightbox
5. **Testimonials**: Client reviews with carousel
6. **Quote Form**: Professional contact form with service selection

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- bun or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chitsulo-landing-page
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5175`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

## 🛠️ Customization

### Content Updates

**Company Information**:

- Update company details in `src/components/sections/history.tsx`
- Modify services in `src/components/sections/services.tsx`
- Add projects to `src/content/projects.json`
- Update testimonials in `src/content/testimonials.json`

**Contact Information**:

- Update phone, email, and address in:
  - `src/components/layout/footer.tsx`
  - `src/components/sections/quote-form.tsx`

**Brand Colors**:
Update the CSS variables in `src/app/index.css`:

```css
:root {
  --primary: #dc2626; /* Your brand color */
}
```

### Images

Replace placeholder images in the `public/` directory:

- `public/welding-1.webp` - Hero background
- `public/welding-2.webp` - History section
- `public/welding-3.webp` - Services section
- Add project images for the gallery

## 📱 Responsive Design

The landing page is fully responsive with:

- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Optimized images and typography scaling

## 🔧 Configuration

### Environment Variables

Create a `.env` file for configuration:

```env
VITE_CONTACT_ENDPOINT=your_form_submission_url
VITE_PHONE_NUMBER=your_phone_number
VITE_EMAIL_ADDRESS=your_email@domain.com
```

### Form Integration

The quote form can be integrated with:

- Formspree
- Netlify Forms
- Custom backend API
- EmailJS

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

### Deploy to Vercel

```bash
bun install -g vercel
vercel
```

### Deploy to Netlify

```bash
bun run build
# Drag dist folder to Netlify dashboard
```

## 📊 SEO Optimization

- Meta tags configuration in `src/app/__root.tsx`
- Semantic HTML structure
- Open Graph tags
- Structured data markup ready
- Fast loading performance

## 🎯 Key Features Implemented

### Navigation

- Fixed navbar with scroll behavior
- Smooth scrolling to sections
- Mobile-responsive menu

### Hero Section

- Full-screen background image
- Compelling value proposition
- Clear call-to-action buttons

### Services Showcase

- Three main service cards with hover effects
- Professional imagery
- Clear service descriptions

### Project Gallery

- Filterable by category
- Lightbox modal for project details
- Grid layout with hover effects

### Testimonials

- Carousel functionality
- Split layout design
- Client photos and roles

### Contact Form

- Comprehensive form validation
- Service type selection
- Professional styling

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for fast build tools
- Tailwind CSS for utility-first styling
- shadcn/ui for beautiful components
- TanStack for routing solutions
- Tabler Icons for beautiful icons

---

**Chitsulo Fabricators** - Building with precision and quality since 1970
