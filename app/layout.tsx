import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Shashanka — Developer Portfolio',
  description: 'Personal developer portfolio (placeholder)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden bg-cp-base text-cp-text antialiased">{children}</body>
    </html>
  );
}
