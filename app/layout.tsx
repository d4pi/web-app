import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D4pi - Diablo 4 Item Filter inside Web Browser',
  description: 'D4pi - Diablo 4 Item Filter inside Web Browser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
