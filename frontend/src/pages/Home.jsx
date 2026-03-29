import { Phone, MapPin, Clock, Mail, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';
import { LogoBanner } from '../components/LogoBanner';
import { companyInfo, services, portfolioImages } from '../data/mock';
import { useState, useEffect } from 'react';
import { CustomCursor } from '../components/CustomCursor';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  // Handle scroll for floating button and cursor effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show floating button after scrolling past hero (viewport height)
      setShowFloatingButton(scrollPosition > viewportHeight * 0.8);

      // Show cursor effect only in hero section
      setIsInHero(scrollPosition < viewportHeight * 0.9);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleCallClick = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  const handleMapClick = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor Effect - Only in Hero Section */}
      {isInHero && <CustomCursor />}

      {/* Floating Call Button - Only after scrolling */}
      {showFloatingButton &&
      <a
        href={`tel:${companyInfo.phone}`}
        className="floating-call-btn fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-5 md:py-4 md:px-6 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-all duration-300 flex items-center gap-2 hover:scale-110 cursor-pointer text-sm md:text-base animate-slideIn">

          <Phone className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Llamar Ahora</span>
          <span className="sm:hidden">Llamar</span>
        </a>
      }

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Logo in top left - only on hero */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <img
            src={companyInfo.logo}
            alt="Audiomix Logo"
            className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-105 transition-transform duration-300 !-mt-[30px] !-mb-[30px]" />

        </div>

        {/* Navigation Menu - top right */}
        <nav className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#servicios"
              className="text-white hover:text-purple-400 font-semibold transition-colors duration-300 text-lg">

              Servicios
            </a>
            <a
              href="#trabajos"
              className="text-white hover:text-purple-400 font-semibold transition-colors duration-300 text-lg">

              Trabajos
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-purple-400 font-semibold transition-colors duration-300 text-lg">

              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 bg-purple-600/20 backdrop-blur-md rounded-lg border border-purple-500/30 hover:bg-purple-600/30 transition-all">

            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">

              {mobileMenuOpen ?
              <path d="M6 18L18 6M6 6l12 12" /> :

              <path d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen &&
        <div className="absolute top-20 right-6 md:hidden z-30 bg-zinc-900/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden">
            <div className="flex flex-col py-2">
              <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-purple-600/20 hover:text-purple-400 font-semibold transition-colors border-b border-purple-500/10">

                Servicios
              </a>
              <a
              href="#trabajos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-purple-600/20 hover:text-purple-400 font-semibold transition-colors border-b border-purple-500/10">

                Trabajos
              </a>
              <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-white hover:bg-purple-600/20 hover:text-purple-400 font-semibold transition-colors">

                Contacto
              </a>
            </div>
          </div>
        }

        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-800/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Company Name - Large */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] px-2">
              <span className="gradient-text block">AUDIOMIX</span>
              <span className="gradient-text block">PRODUCCIONES</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-light px-4 max-w-3xl mx-auto leading-relaxed">
              Sonido, iluminación y equipos profesionales para eventos
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 mb-12 font-medium px-4 tracking-wide">
               {companyInfo.coverage}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4 mb-12">
              <Button
                onClick={handleCallClick}
                className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 hover:from-purple-700 hover:via-purple-600 hover:to-purple-800 text-white font-bold py-6 md:py-7 px-10 md:px-12 rounded-full text-base md:text-lg shadow-[0_10px_40px_rgba(168,85,247,0.5)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.7)] transition-all duration-500 hover:scale-105 relative overflow-hidden group">

                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Phone className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Llamar Ahora</span>
              </Button>

              <Button
                onClick={handleMapClick}
                variant="outline"
                className="w-full sm:w-auto cursor-pointer border-2 border-purple-500/60 bg-purple-950/20 hover:bg-purple-900/40 backdrop-blur-sm text-white hover:text-purple-100 font-bold py-6 md:py-7 px-10 md:px-12 rounded-full text-base md:text-lg shadow-[0_10px_30px_rgba(168,85,247,0.2)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)] hover:border-purple-400 transition-all duration-500 hover:scale-105">

                <MapPin className="w-5 h-5 mr-2" />
                Cómo Llegar
              </Button>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-full backdrop-blur-xl border border-purple-500/20 shadow-[0_8px_32px_rgba(168,85,247,0.15)]">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-gray-200 font-medium tracking-wide">Disponible 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Banner - Client Logos with Infinite Scroll */}
      <LogoBanner />

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-4">
              <span className="text-purple-400 font-semibold text-sm md:text-base tracking-[0.2em] uppercase">Nuestros Servicios</span>
              <div className="h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 gradient-text leading-tight">
              Soluciones Audiovisuales
              <br />
              
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
              Equipos profesionales y experiencia técnica para hacer de tu evento algo memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) =>
            <ServiceCard key={service.id} service={service} />
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="trabajos" className="py-12 md:py-20 px-4 md:px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
Trabajos Realizados
            </h2>
            <p className="text-gray-400 text-base md:text-lg px-4">
              Algunos de nuestros proyectos más destacados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            {portfolioImages.map((image) =>
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl md:rounded-2xl border border-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] aspect-video cursor-pointer bg-zinc-900">

                <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                style={{ imageRendering: 'high-quality' }} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-bold text-lg md:text-xl p-4 md:p-6">{image.title}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-black border-t border-purple-600/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-xl border border-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer">
              <MapPin className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
              <p className="text-gray-400">
                C. Pablo Iglesias, 106<br />
                03600 Elda, Alicante
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-xl border border-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer">
              <Phone className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors cursor-pointer">

                684 23 79 96
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-xl border border-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer">
              <Clock className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Horario</h3>
              <p className="text-gray-400">Abierto 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="flex justify-center items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) =>
            <Star
              key={i}
              className={`w-6 h-6 ${
              i < Math.floor(companyInfo.rating) ?
              'text-yellow-400 fill-yellow-400' :
              'text-gray-600'}`
              } />

            )}
            <span className="ml-2 text-2xl font-bold text-white">
              {companyInfo.rating}/5
            </span>
          </div>
          <p className="text-gray-400 text-lg italic mb-2">
            "Servicio rápido, disponible en cualquier momento"
          </p>
          <small className="text-gray-500">({companyInfo.reviews} reseñas)</small>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-3">
            {companyInfo.name}
          </h3>
          <p className="text-gray-400 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">

              {companyInfo.email}
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 Audiomix Producciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>);

};

export default Home;