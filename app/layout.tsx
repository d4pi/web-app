import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'D4pi - Diablo4 Item Filter',
  title: 'D4pi - Diablo4 Item Filter'
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
