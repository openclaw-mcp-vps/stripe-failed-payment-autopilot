import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Failed Payment Autopilot — Auto-retry failed payments',
  description: 'Automatically retries failed Stripe payments using ML-optimized timing, sends personalized recovery emails, and updates payment methods.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a1cd68c-f8a5-4b8c-af2c-1908b7815a84"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
