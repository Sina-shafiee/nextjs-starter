import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* #TODO:  */}
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
