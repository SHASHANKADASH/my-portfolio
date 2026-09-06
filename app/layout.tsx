import '../styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Shashanka — Developer Portfolio',
  description: 'Personal developer portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
