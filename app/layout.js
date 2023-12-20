import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { SITE_NAME } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: SITE_NAME,
  description: 'Smoke In',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  )
}
