/**
 * JSON-LD structured data for local SEO.
 * Schema.org LocalBusiness + Restaurant + LodgingBusiness types.
 */
export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Restaurant", "LodgingBusiness"],
        "@id": "https://kesariya.in/#business",
        name: "Kesariya Restaurant Banquet & Hotel",
        alternateName: "Kesariya",
        url: "https://kesariya.in",
        image: [
          "https://kesariya.in/og-image.jpg",
        ],
        description:
          "Kesariya offers exceptional dining, grand banquet halls for weddings and events, and luxurious hotel rooms in Gorakhpur, Uttar Pradesh.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Gautam, Plot No. D, Buddha Vihar Colony, Taramandal",
          addressLocality: "Gorakhpur",
          addressRegion: "UP",
          postalCode: "273017",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.7606,
          longitude: 83.3732,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "250",
        },
        servesCuisine: ["Indian", "Chinese", "Continental"],
        priceRange: "₹₹",
        hasMenu: {
          "@type": "Menu",
          name: "Kesariya Restaurant Menu",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Signature Dishes",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Royal Thali",
                  description:
                    "A lavish platter with assorted Indian curries, breads, rice, and desserts",
                },
                {
                  "@type": "MenuItem",
                  name: "Saffron Biryani",
                  description:
                    "Aromatic basmati rice layered with spiced meat and saffron",
                },
                {
                  "@type": "MenuItem",
                  name: "Paneer Tikka",
                  description:
                    "Chargrilled cottage cheese cubes with aromatic spices",
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "The Lounge Bar",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Signature Cocktails",
                  offers: {
                    "@type": "Offer",
                    price: "499",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Mocktails & Refreshers",
                  offers: {
                    "@type": "Offer",
                    price: "299",
                    priceCurrency: "INR",
                  },
                },
              ],
            },
          ],
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
          { "@type": "LocationFeatureSpecification", name: "24/7 Room Service", value: true },
          { "@type": "LocationFeatureSpecification", name: "Banquet Hall", value: true },
          { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
          { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://kesariya.in/#website",
        url: "https://kesariya.in",
        name: "Kesariya",
        description:
          "Kesariya — Restaurant, Banquet Hall & Hotel in Gorakhpur, UP",
        publisher: {
          "@id": "https://kesariya.in/#business",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
