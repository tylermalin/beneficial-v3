# Beneficial Technology Website

A high-end crypto-native legal engineering and venture studio website built with Next.js 14, featuring professional email handling and modern design.

## Features

- 🚀 **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- 🎨 **Professional Design**: Framer Motion animations, Three.js backgrounds
- 📧 **Email Integration**: Server-side form handling with Resend
- 🔒 **Form Validation**: Zod validation with comprehensive error handling
- 📱 **Responsive**: Mobile-first design with dark mode support
- ⚡ **Performance**: Optimized for Core Web Vitals

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd beneficial-technology-website
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your Resend API key to `.env.local`:
\`\`\`
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

4. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Email Setup

This website uses [Resend](https://resend.com) for email delivery:

1. Sign up for a Resend account
2. Verify your domain or use their test domain
3. Get your API key from the dashboard
4. Add the API key to your environment variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── sections/         # Page sections
│   └── ui/              # UI components (shadcn/ui)
├── lib/                  # Utilities and server actions
├── public/              # Static assets
└── styles/             # Global styles
\`\`\`

## Key Components

- **Contact Form**: Server-side processing with email notifications
- **Newsletter**: Subscription handling with welcome emails
- **Consultation Booking**: Appointment scheduling system
- **Three.js Background**: Interactive particle system
- **Responsive Navigation**: Mobile-friendly navigation

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Email**: Resend API
- **Validation**: Zod
- **TypeScript**: Full type safety

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.
