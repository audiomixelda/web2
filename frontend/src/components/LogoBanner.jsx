import { clientLogos } from '../data/mock';

export const LogoBanner = () => {
  // Duplicate logos array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="logo-banner-section relative w-full bg-black py-12 md:py-16 overflow-hidden">
      {/* Gradient fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling logos container */}
      <div className="logo-marquee">
        <div className="logo-track">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="logo-item group"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="logo-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtitle */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm uppercase tracking-[0.3em] font-medium">
          Confían en nosotros
        </p>
      </div>
    </section>
  );
};
