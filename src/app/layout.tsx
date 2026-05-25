import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATB.STUDIO',
  description: 'A creative design studio focused on pushing boundaries through digital art, photography, and experimental media.',
  keywords: ['ATB.STUDIO', 'design studio', 'digital art', 'photography', 'portfolio', 'creative'],
  authors: [{ name: 'ATB.STUDIO' }],
  generator: 'ATB.STUDIO',
  openGraph: {
    title: 'ATB.STUDIO — Creative Design Studio',
    description: 'A creative design studio focused on pushing boundaries through digital art, photography, and experimental media.',
    siteName: 'ATB.STUDIO',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className="antialiased">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}