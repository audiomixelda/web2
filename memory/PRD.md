# PRD - Audiomix Producciones Landing Page

## Original Problem Statement
Create a complete, production-ready responsive landing page for an audiovisual rental company in Elda, Alicante, Spain. Dark, modern, high-impact design with vibrant purple neon effects inspired by concerts and live shows.

## Company Information
- **Name**: Audiomix Producciones
- **Location**: C. Pablo Iglesias, 106, 03600 Elda, Alicante
- **Business**: Audiovisual equipment rental (sound, lighting, events)
- **Phone**: 684 23 79 96
- **Email**: producciones@audiomixelda.es
- **Coverage**: Toda la comarca de la Comunidad Valenciana
- **Availability**: 24/7

## User Personas
1. **Event Organizers**: Need professional audiovisual equipment for corporate events, weddings, parties
2. **Venues**: Looking for technical support and equipment rental for recurring events
3. **Companies**: Need production services for conferences, presentations, and corporate events

## Core Requirements
- [x] Dark, modern design with purple neon effects
- [x] Responsive mobile-first layout
- [x] Logo integration
- [x] Contact button with phone number (684 23 79 96)
- [x] Service inquiry form
- [x] Portfolio section with real work images
- [x] Emphasize coverage across Comunidad Valenciana
- [ ] Backend integration for form submissions
- [ ] Email notifications for new inquiries

## Architecture & Tech Stack
- **Frontend**: React 19 with Vite/CRA
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: Tailwind CSS with custom purple/black theme
- **Icons**: Lucide React (no emojis)
- **Fonts**: Inter (Google Fonts)
- **Backend**: FastAPI (to be implemented)
- **Database**: MongoDB (to be implemented)

## What's Been Implemented (December 2024)

### ✅ Frontend (MOCK DATA - Completed)
1. **Hero Section**
   - Animated gradient background with purple glow effects
   - Logo display with drop shadow
   - Main headline: "Soluciones Audiovisuales en Elda"
   - Coverage badge: "Cobertura en toda la comarca de la Comunidad Valenciana"
   - Two CTA buttons: "Llamar Ahora" and "Cómo Llegar"
   - 24/7 availability indicator

2. **Services Section**
   - 6 service cards with hover effects:
     * Servicio Técnico
     * Instalación de Sonido
     * Instalación de Iluminación
     * Instalaciones Eléctricas
     * Producción de Eventos
     * Alquiler de Equipos
   - Each card uses Lucide React icons (no emojis)
   - Purple glow on hover with lift animation

3. **Portfolio Section - "Trabajos Realizados"**
   - 4 real project images in 2x2 grid
   - Hover effects with image zoom and title overlay
   - Professional event photography showcasing lighting and sound work

4. **Contact Form Section**
   - Professional form card with purple border glow
   - Fields: Name, Email, Phone, Service Type (dropdown), Message
   - Service type selector with all 6 services
   - "Enviar Consulta" button with gradient purple styling
   - Toast notifications for form submission (MOCK - frontend only)

5. **Info Section**
   - Location, Phone, Hours displayed in cards
   - Purple icon styling
   - Clickable phone number

6. **Trust Section**
   - Star rating display (2.6/5)
   - Review count and testimonial

7. **Footer**
   - Company name
   - Email contact
   - Copyright information

8. **Floating CTA Button**
   - Fixed position bottom-right
   - "Llamar Ahora" with phone icon
   - Pulse animation with purple glow
   - Mobile responsive

### Design Implementation Details
- **Colors**: 
  - Black: #000000, #18181b (zinc-900)
  - Purple: #7c3aed (purple-600), #a855f7 (purple-500)
  - Gradients: Purple tones with glow effects
- **Animations**:
  - Float animation for logo
  - Pulse glow for CTA buttons
  - Hover lift for service cards
  - Image zoom on portfolio hover
- **Typography**: Inter font family (300, 400, 600, 700, 900 weights)
- **Spacing**: Generous whitespace with section padding
- **Responsive**: Mobile-first design with breakpoints

## Mock Data Structure
Located in: `/app/frontend/src/data/mock.js`
- Company information
- Services array (6 items)
- Portfolio images (4 items with real URLs)
- Service types for form dropdown

## Next Tasks (Priority Order)

### P0 - Backend Development (Required for Form Functionality)
- [ ] Create MongoDB schema for contact inquiries
  - Fields: name, email, phone, serviceType, message, createdAt, status
- [ ] Build POST /api/contact endpoint to save inquiries
- [ ] Add email notification service (SendGrid/nodemailer)
- [ ] Connect form to real backend endpoint
- [ ] Add form validation on backend
- [ ] Implement rate limiting for form submissions

### P1 - Enhanced Features
- [ ] Admin dashboard to view inquiries
- [ ] Service catalog page with detailed equipment info
- [ ] Image gallery with lightbox for portfolio
- [ ] Testimonials section with more reviews
- [ ] WhatsApp integration button
- [ ] Google Maps embed for location
- [ ] SEO optimization (meta tags, structured data)

### P2 - Nice to Have
- [ ] Multi-language support (English/Valencian)
- [ ] Blog section for event tips
- [ ] Equipment availability checker
- [ ] Online quote calculator
- [ ] Client portal for booking management
- [ ] Social media feed integration
- [ ] Analytics integration (Google Analytics)

## API Contracts (To Be Implemented)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "serviceType": "string",
  "message": "string"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Consulta recibida. Te contactaremos pronto.",
  "inquiryId": "string"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message"
}
```

### GET /api/services (Future)
Retrieve all services with details and pricing

### GET /api/portfolio (Future)
Retrieve portfolio items with categories and filters

## Notes
- Current implementation uses MOCK data for form submission (console.log + toast)
- All external assets (logo, images) are hosted on customer-assets.emergentagent.com
- Design follows dark concert/festival theme as requested
- No emoji icons used - all icons from Lucide React library
- Form currently has client-side validation only
- Backend needs to be built for actual form submission functionality

## Testing Requirements (Post Backend)
- [ ] Form submission with valid data
- [ ] Form validation (empty fields, invalid email/phone)
- [ ] Email delivery confirmation
- [ ] Database record creation
- [ ] Rate limiting effectiveness
- [ ] Mobile responsiveness across devices
- [ ] Cross-browser compatibility
- [ ] Performance optimization (load time, image optimization)
