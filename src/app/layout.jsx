import '@styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joseph Ryan: Portfolio',
  description: 'Portfolio web'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
