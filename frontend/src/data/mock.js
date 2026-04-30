// Mock data para Audiomix Producciones

export const companyInfo = {
  name: "Audiomix Producciones",
  tagline: "Soluciones Audiovisuales Profesionales",
  description: "Servicio 24/7 para toda la Comunidad Valenciana",
  phone: "684237996",
  email: "producciones@audiomixelda.es",
  address: "Carrer Societat Musical Verge del Remei, 3, 03610 Petrer, Alicante",
  coverage: "Cobertura en toda la comarca de la Comunidad Valenciana",
  rating: null,  // Removed fake rating
  reviews: null,  // Removed fake review count
  logo: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/bxap1zub_Copia%20de%20Cartel%20Collage%20texto%20blanco%20e%20i%CC%81ndigo%20sobre%20foto%20Concierto-4.png"
};

export const services = [
  {
    id: 1,
    title: "Servicio Técnico",
    description: "Soporte técnico profesional para eventos de cualquier magnitud",
    icon: "wrench"
  },
  {
    id: 2,
    title: "Instalación de Sonido",
    description: "Sistemas de audio de alta calidad para cualquier tipo de evento",
    icon: "volume2"
  },
  {
    id: 3,
    title: "Instalación de Iluminación",
    description: "Iluminación profesional que crea la atmósfera perfecta",
    icon: "lightbulb"
  },
  {
    id: 4,
    title: "Instalaciones Eléctricas",
    description: "Instalaciones eléctricas seguras y certificadas",
    icon: "zap"
  },
  {
    id: 5,
    title: "Producción de Eventos",
    description: "Producción completa de eventos desde la planificación hasta la ejecución",
    icon: "calendar"
  },
  {
    id: 6,
    title: "Alquiler de Equipos",
    description: "Amplio catálogo de equipos audiovisuales profesionales",
    icon: "package"
  }
];

export const portfolioImages = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/g8cziq7g_471251347_2078860312566138_5872974820478959273_n.jpg",
    title: "Iluminación para eventos"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/qwmvt7no_476385264_1053523906790356_7470528526085261009_n.jpg",
    title: "Instalación completa de sonido"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/dy0n2slj_476411434_1053523966790350_2226184457241793226_n.jpg",
    title: "Proyección y audio profesional"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/9dyhhss5_648663655_18061862756671890_680534569477131672_n.jpg",
    title: "Producción de eventos corporativos"
  }
];

export const clientLogos = [
  {
    id: 1,
    name: "C.D. Eldense",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/fcx3ga6m_78392742-2c00-4c91-8fcc-1408360c1843-479.png",
    website: "https://www.cdeldense.es"
  },
  {
    id: 2,
    name: "Cadena SER",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/ctgvmfn7_Cadena_Ser_logo.svg-2.png",
    website: "https://cadenaser.com"
  },
  {
    id: 3,
    name: "Elche CF",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/o1wb4kuy_Elche_CF_logo.svg.png",
    website: "https://www.elchecf.es"
  },
  {
    id: 4,
    name: "Halo Club",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/dyh7frww_halo-club.png",
    website: "https://haloclub.es"
  },
  {
    id: 5,
    name: "Ayuntamiento de Elda",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/laucr907_LOGO%20AYUNTAMIENTO%20ELDA.png",
    website: "https://www.elda.es"
  },
  {
    id: 6,
    name: "Los 40",
    url: "https://customer-assets.emergentagent.com/job_audiomix-stage/artifacts/ldbklej5_hq720.png",
    website: "https://los40.com"
  }
];

export const serviceTypes = [
  "Servicio Técnico",
  "Instalación de Sonido",
  "Instalación de Iluminación",
  "Instalaciones Eléctricas",
  "Producción de Eventos",
  "Alquiler de Equipos"
];

// Real client testimonials - UPDATE THESE WITH ACTUAL REVIEWS
// For legal compliance, only use real testimonials from actual clients
export const testimonials = [
  {
    id: 1,
    name: "Cliente Satisfecho",
    event: "Evento Profesional",
    rating: 5,
    comment: "Profesionales en todo momento. Servicio de calidad garantizado."
  }
];
