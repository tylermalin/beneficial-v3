import type { Metadata } from 'next'
import { JetBrains_Mono, Fraunces } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { AnalyticsProvider } from '@/components/providers/analytics-provider'


const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const siteUrl = 'https://www.beneficial.technology'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
    template: '%s · Beneficial Technology',
  },
  description: 'Fractional and project-based structural strategy for founders launching tokens, navigating multi-jurisdiction structures, and building in regulated verticals. Operator-attorney led.',
  keywords: ['legal engineering', 'token launch', 'SAFT', 'SAFE-T', 'regulatory positioning', 'fractional general counsel', 'climate finance', 'DePIN', 'crypto', 'multi-entity structure', 'tokenization', 'Cayman SPV', 'climate-asset issuance'],
  authors: [{ name: 'Tyler Malin', url: siteUrl }],
  creator: 'Beneficial Technology, LLC',
  publisher: 'Beneficial Technology, LLC',
  applicationName: 'Beneficial Technology',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
    description: 'Fractional and project-based structural strategy for founders launching tokens, navigating multi-jurisdiction structures, and building in regulated verticals.',
    url: siteUrl,
    siteName: 'Beneficial Technology',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficial Technology — Legal engineering for the regulated frontier',
    description: 'Fractional and project-based structural strategy for founders launching tokens, multi-jurisdiction structures, and regulated verticals.',
    images: ['/og'],
    creator: '@tyler_malin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}#organization`,
      name: 'Beneficial Technology',
      legalName: 'Beneficial Technology, LLC',
      url: siteUrl,
      logo: `${siteUrl}/og`,
      image: `${siteUrl}/og`,
      description: 'Structural and technical consulting for founders building at the regulated frontier: token launches, multi-jurisdiction entity structures, climate-asset frameworks, and regulated AI systems. Legal engineering is the coordination layer between a client\u2019s retained counsel and their operating team. Beneficial Technology is a consulting firm, not a law firm, and does not provide legal advice.',
      disambiguatingDescription: 'Beneficial Technology, LLC is a consulting firm, not a law firm. It does not provide legal advice, does not represent clients in legal matters, and does not file regulatory submissions. It performs structural and technical work upstream of legal and coordinates with the counsel each client separately retains.',
      areaServed: ['United States', 'European Union'],
      knowsAbout: ['Token Launches', 'SAFT', 'SAFE-T', 'Multi-Entity Structures', 'Cayman and BVI Entity Structuring', 'Regulatory Positioning', 'Climate Asset Frameworks', 'DePIN', 'Tokenization', 'Compliance Architecture'],
      founder: {
        '@type': 'Person',
        '@id': `${siteUrl}/about#tyler-malin`,
        name: 'Tyler Malin',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 The Green, Ste A',
        addressLocality: 'Dover',
        addressRegion: 'DE',
        postalCode: '19901',
        addressCountry: 'US',
      },
      sameAs: [
        'https://github.com/tylermalin',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'business',
        email: 'tyler@beneficial.technology',
        url: 'https://cal.com/beneficialtech',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Engagements',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Operator',
            price: '8500',
            priceCurrency: 'USD',
            description: 'Fractional structural partner for pre-seed and seed founders. Up to 8h/month.',
          },
          {
            '@type': 'Offer',
            name: 'Architect',
            price: '15000',
            priceCurrency: 'USD',
            description: 'Token launches, multi-jurisdiction structures, heavily regulated verticals. Up to 16h/month.',
          },
          {
            '@type': 'Offer',
            name: 'Project',
            price: '25000',
            priceCurrency: 'USD',
            description: 'Flat-fee, scoped engagements with defined deliverables.',
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/about#tyler-malin`,
      name: 'Tyler Malin',
      jobTitle: 'Founder & Principal',
      worksFor: { '@id': `${siteUrl}#organization` },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Fordham University School of Law' },
      ],
      description: 'Founder and Principal of Beneficial Technology, a consulting firm. Background includes 15+ years of law firm experience as a litigator and a CFTC regulatory fellowship. Does not practice law or provide legal advice through Beneficial Technology. CEO of Mālama Labs. Two prior startup exits.',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${GeistSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} font-sans antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>
          </AnalyticsProvider>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
