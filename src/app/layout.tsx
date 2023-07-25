import './globals.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: '블라블라',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
