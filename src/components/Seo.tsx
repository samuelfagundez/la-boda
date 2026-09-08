import { Head } from "vite-react-ssg";
import { content } from "../content";

export default function Seo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: content.name,
        url: content.siteUrl,
      },
      {
        "@type": "Restaurant",
        name: content.name,
        url: content.siteUrl,
        image: `${content.siteUrl}gallery/la-boda-interior-barra.jpg`,
        telephone: content.phone,
        priceRange: content.priceRange,
        servesCuisine: content.cuisine,
        address: {
          "@type": "PostalAddress",
          streetAddress: content.address.streetAddress,
          addressLocality: content.address.addressLocality,
          addressRegion: content.address.addressRegion,
          postalCode: content.address.postalCode,
          addressCountry: content.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: content.geo.lat,
          longitude: content.geo.lng,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: content.rating.value,
          ratingCount: content.rating.count,
        },
        openingHoursSpecification: content.openingHoursSchema.map((b) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: b.dayOfWeek,
          opens: b.opens,
          closes: b.closes,
        })),
        sameAs: [content.social.instagram].filter(Boolean),
        acceptsReservations: `https://wa.me/${content.whatsappNumber}`,
        keywords: content.keywords.join(", "),
      },
    ],
  };

  return (
    <Head>
      <title>{`${content.name} — Restaurante italiano en Valencia`}</title>
      <meta name="description" content={content.metaDescription} />
      <meta name="keywords" content={content.keywords.join(", ")} />
      <link rel="canonical" href={content.siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${content.name} — Restaurante italiano en Valencia`} />
      <meta property="og:description" content={content.metaDescription} />
      <meta property="og:url" content={content.siteUrl} />
      <meta property="og:image" content={`${content.siteUrl}gallery/la-boda-interior-barra.jpg`} />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${content.name} — Restaurante italiano en Valencia`} />
      <meta name="twitter:description" content={content.metaDescription} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
