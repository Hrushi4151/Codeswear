
import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from './context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodesWear-Wear The Code',
  description: 'CodesWear - Wear the Code',
  icon: '/logo.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
