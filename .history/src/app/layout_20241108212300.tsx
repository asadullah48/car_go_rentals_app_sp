// src/app/layout.tsx
import './globals.css' // Import global styles if needed
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="This is my Next.js application." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <nav>
            {/* Navigation Links */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer Content */}
        </footer>
      </body>
    </html>
  )
}
