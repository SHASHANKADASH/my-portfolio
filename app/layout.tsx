import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Shashanka — Developer Portfolio',
  description: 'Personal developer portfolio (placeholder)'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cp-base text-cp-text antialiased">
        <div className="mx-auto max-w-6xl px-6 md:px-10">{children}</div>
      </body>
    </html>
  );
}
