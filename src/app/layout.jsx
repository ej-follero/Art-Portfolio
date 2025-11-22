import './globals.css'
import { DM_Sans } from 'next/font/google'
import ThemeProvider from '@/components/theme/ThemeProvider'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Art by EJ Yu',
  description: 'A beautiful art portfolio showcasing creative works',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} text-gray-900 dark:text-gray-100 antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

