/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app']
    }
  },
  images: {
    domains: ['blob.v0.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/studio', destination: '/', permanent: true },
      { source: '/focus', destination: '/', permanent: true },
      { source: '/ventures', destination: '/', permanent: true },
      { source: '/services', destination: '/#engagements', permanent: true },
      { source: '/services/:path*', destination: '/#engagements', permanent: true },
      { source: '/investor-services', destination: '/', permanent: true },
      { source: '/book-consultation', destination: 'https://cal.com/beneficialtech', permanent: true, basePath: false },
      { source: '/reserve-sprint', destination: 'https://cal.com/beneficialtech', permanent: true, basePath: false },
      { source: '/contact', destination: 'https://cal.com/beneficialtech', permanent: true, basePath: false },
      { source: '/start-your-venture-journey', destination: '/', permanent: true },
      { source: '/enterprise-ai-strategy-sprint', destination: '/#engagements', permanent: true },
      { source: '/tools/:path*', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
