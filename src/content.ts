export const content = {
  name: "La Boda",
  shortName: "La Boda",
  tagline: "Cocina italiana de cercanía y cócteles de autor en el corazón de L'Eixample, Valencia",
  description:
    "La Boda es un restaurante italiano en el barrio de L'Eixample (zona de Cánovas), Valencia, donde la pasta, las pinsas y los platos caseros se preparan con recetas auténticas y producto de mercado. Un trato familiar y cercano, terraza en la calle y una buena carta de vinos y cócteles convierten cada visita en un plan tranquilo para comer o cenar en buena compañía.",
  metaDescription:
    "Restaurante italiano en Valencia (L'Eixample). Pasta casera, pinsas, cócteles y trato cercano. Terraza, reservas y opciones vegetarianas. ★ 4.7 en Google.",
  keywords: [
    "La Boda Valencia",
    "restaurante italiano Valencia",
    "pasta casera Valencia",
    "pinsas Valencia",
    "restaurante L'Eixample",
    "cócteles Valencia",
    "restaurante zona Cánovas",
    "restaurante con terraza Valencia",
  ],
  priceRange: "20 € - 30 €",
  priceRangeDisplay: "20 € – 30 € por persona",
  cuisine: "Italiana",

  rating: { value: 4.7, count: 343, countDisplay: "343 reseñas" },
  highlights: [
    "Pasta fresca y recetas italianas auténticas, con producto de mercado",
    "Pinsas al horno y cócteles de autor",
    "Trato familiar y cercano, como en casa",
    "Terraza en la calle y ambiente tranquilo",
  ],

  address: {
    streetAddress: "Carrer de Salamanca, 29",
    addressLocality: "València",
    addressRegion: "Valencia",
    postalCode: "46005",
    addressCountry: "ES",
    full: "Carrer de Salamanca, 29, L'Eixample, 46005 València, Valencia",
  },
  geo: { lat: 39.4660851, lng: -0.3640177 },

  phone: "+34678032387",
  phoneDisplay: "678 03 23 87",
  whatsappNumber: "34678032387",
  email: "",

  siteUrl: "https://samuelfagundez.github.io/la-boda/",

  social: {
    instagram: "https://www.instagram.com/labodavalencia",
    facebook: "",
    tiktok: "",
    whatsapp: "",
  },

  hours: [
    { day: "Lunes", hours: "17:30 – 23:30" },
    { day: "Martes", hours: "17:30 – 23:30" },
    { day: "Miércoles", hours: "17:30 – 23:30" },
    { day: "Jueves", hours: "17:30 – 00:30" },
    { day: "Viernes", hours: "13:30 – 00:30" },
    { day: "Sábado", hours: "13:30 – 01:00" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  openingHoursSchema: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "17:30", closes: "23:30" },
    { dayOfWeek: ["Thursday"], opens: "17:30", closes: "23:59" },
    { dayOfWeek: ["Friday"], opens: "13:30", closes: "23:59" },
    { dayOfWeek: ["Saturday"], opens: "13:30", closes: "23:59" },
  ],

  gallery: [
    { src: "/gallery/la-boda-interior-barra.jpg", alt: "Interior y barra del restaurante italiano La Boda en Valencia" },
    { src: "/gallery/la-boda-fachada.jpg", alt: "Fachada y terraza de La Boda, restaurante en L'Eixample, Valencia" },
    { src: "/gallery/la-boda-pinsa-jamon.jpg", alt: "Pinsa de jamón ibérico de La Boda con una cerveza" },
    { src: "/gallery/la-boda-pasta-bolonesa.jpg", alt: "Pasta fresca a la boloñesa de La Boda" },
    { src: "/gallery/la-boda-coctel.jpg", alt: "Cóctel de autor con frutos rojos y menta de La Boda" },
    { src: "/gallery/la-boda-berenjena.jpg", alt: "Berenjena a la parmigiana con pan tostado de La Boda" },
    { src: "/gallery/la-boda-pinsa-setas.jpg", alt: "Pinsa de setas de temporada de La Boda" },
    { src: "/gallery/la-boda-gin-tonic.jpg", alt: "Gin tonic servido en copa de balón en La Boda" },
    { src: "/gallery/la-boda-pinsa-blanca.jpg", alt: "Pinsa blanca de calabacín crujiente de La Boda" },
  ],

  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("La Boda, Carrer de Salamanca, 29, 46005 València") +
    "&hl=es&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/vWZbafauxfDedJ3Y7",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de La Boda y tengo una consulta.";
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de La Boda y me gustaría hacer una reserva.";

export const reservationLink = "";

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
