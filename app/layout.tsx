import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { Grain } from '@/components/ui/grain'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      description: 'Fractional and project-based legal engineering and structural strategy for founders building at the regulated frontier — tokens, climate assets, multi-jurisdiction structures, and regulated AI.',
      areaServed: ['United States', 'European Union', 'Cayman Islands'],
      knowsAbout: ['Token Launches', 'SAFT', 'Multi-Entity Structures', 'Regulatory Positioning', 'Climate Asset Frameworks', 'DePIN', 'Tokenization', 'Compliance Architecture'],
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
        email: 'tyler@beneficial.tech',
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
      description: 'Operator-attorney. Former Cravath litigator, CFTC regulatory fellow. CEO of Mālama Labs. Two prior startup exits.',
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
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <Grain />
        </ThemeProvider>
      </body>
    </html>
  )
}
