import '@styles/globals.scss'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Joseph Ryan: Portfolio',
  description: 'Portfolio web'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={jost.className}>{children}</body>
    </html>
  )
}
