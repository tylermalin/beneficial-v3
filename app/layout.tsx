import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Beneficial Technology - Crypto-Native Legal Engineering & Venture Studio',
  description: 'High-end crypto-native legal engineering and venture studio specializing in AI, Deep Science, Energy Transition, and Blockchain innovations.',
  keywords: ['crypto', 'legal engineering', 'venture studio', 'AI', 'blockchain', 'deep science', 'energy transition'],
  authors: [{ name: 'Beneficial Technology' }],
  openGraph: {
    title: 'Beneficial Technology - Crypto-Native Legal Engineering & Venture Studio',
    description: 'High-end crypto-native legal engineering and venture studio specializing in AI, Deep Science, Energy Transition, and Blockchain innovations.',
    url: 'https://www.beneficial.technology',
    siteName: 'Beneficial Technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficial Technology - Crypto-Native Legal Engineering & Venture Studio',
    description: 'High-end crypto-native legal engineering and venture studio specializing in AI, Deep Science, Energy Transition, and Blockchain innovations.',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
