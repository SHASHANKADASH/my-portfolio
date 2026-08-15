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
        <div className="max-w-4xl mx-auto px-6 md:px-8">{children}</div>
      </body>
    </html>
  );
}
