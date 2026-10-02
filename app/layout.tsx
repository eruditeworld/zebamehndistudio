import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeba Mehndi Studio | Bridal Mehndi Artist in Aminabad, Lucknow',
  description: 'Zeba Mehndi Studio in Aminabad, Lucknow offers bespoke bridal, Arabic, and traditional henna artistry. Where Tradition Meets Timeless Beauty. WhatsApp: 08931020349.',
  keywords: [
    'Mehndi Artist in Lucknow',
    'Bridal Mehndi Artist in Aminabad',
    'Mehndi Artist in Aminabad Lucknow',
    'Bridal Henna Lucknow',
    'Zeba Mehndi Studio'
  ],
  openGraph: {
    title: 'Zeba Mehndi Studio | Bridal Mehndi Artist in Lucknow',
    description: 'Where Tradition Meets Timeless Beauty. Bespoke bridal, Arabic, and traditional henna in Aminabad, Lucknow.',
    url: 'https://zebamehndistudio.com',
    siteName: 'Zeba Mehndi Studio',
    images: [
      {
        url: '/images/hero_bridal.jpg',
        width: 1200,
        height: 630,
        alt: 'Zeba Mehndi Studio Bridal Mehndi Artwork'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeba Mehndi Studio | Bridal Mehndi Artist in Lucknow',
    description: 'Where Tradition Meets Timeless Beauty. Bespoke bridal and occasion henna in Aminabad, Lucknow.',
    images: ['/images/hero_bridal.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BeautySalon',
              name: 'Zeba Mehndi Studio',
              description: 'Premium bridal, Arabic, and traditional mehndi artist studio in Aminabad, Lucknow.',
              telephone: '+918931020349',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '195, Ama Diagnostic Center, 17, Jagat Narayan Rd, Near City Station Bridge, Maulviganj',
                addressLocality: 'Aminabad, Lucknow',
                addressRegion: 'Uttar Pradesh',
                postalCode: '226018',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.8524,
                longitude: 80.9238,
              },
              priceRange: '$$',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '09:00',
                  closes: '21:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
