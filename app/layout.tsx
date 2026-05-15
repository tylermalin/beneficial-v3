import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

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

export const metadata: Metadata = {
  title: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
  description: 'Fractional and project-based structural strategy for founders launching tokens, navigating multi-jurisdiction structures, and building in regulated verticals. Operator-attorney led.',
  keywords: ['legal engineering', 'token launch', 'SAFT', 'regulatory positioning', 'fractional general counsel', 'climate finance', 'DePIN', 'crypto', 'multi-entity structure'],
  authors: [{ name: 'Beneficial Technology' }],
  openGraph: {
    title: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
    description: 'Fractional and project-based structural strategy for founders launching tokens, navigating multi-jurisdiction structures, and building in regulated verticals.',
    url: 'https://www.beneficial.technology',
    siteName: 'Beneficial Technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficial Technology — Legal engineering for founders at the regulated frontier',
    description: 'Fractional and project-based structural strategy for founders launching tokens, navigating multi-jurisdiction structures, and building in regulated verticals.',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
