import type { Metadata } from "next";
import "../styles/normalize.css";
import "../styles/webflow.css";
import "../styles/blanchard-orthodontics.webflow.css";
import { CMSProvider } from "../components/CMSProvider";
import Scripts from "../components/Scripts";

export const metadata: Metadata = {
  title: "Braces in Jacksonville & Tyler | Blanchard Orthodontics",
  description: "Blanchard Orthodontics exists to help you have a smile that you love through braces, retainers, and more.",
  keywords: "braces, orthodontics, Jacksonville, Tyler, Texas, orthodontist, clear braces, retainers, smile transformation",
  authors: [{ name: "Blanchard Orthodontics" }],
  creator: "Blanchard Orthodontics",
  publisher: "Blanchard Orthodontics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blanchardorthodontics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Braces in Jacksonville & Tyler | Blanchard Orthodontics",
    description: "Blanchard Orthodontics exists to help you have a smile that you love through braces, retainers, and more.",
    url: 'https://blanchardorthodontics.com',
    siteName: 'Blanchard Orthodontics',
    images: [
      {
        url: '/images/Blanchard-Orthodontics-OpenGraph.webp',
        width: 1200,
        height: 630,
        alt: 'Blanchard Orthodontics - Your Smile, Our Passion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Braces in Jacksonville & Tyler | Blanchard Orthodontics",
    description: "Blanchard Orthodontics exists to help you have a smile that you love through braces, retainers, and more.",
    images: ['/images/Blanchard-Orthodontics-OpenGraph.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-VZ37QDRHNB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-page="6512cf86865dd3d45d66087f" data-wf-site="6512cf86865dd3d45d660809">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.jpg" />
      </head>
      <body className="body">
        <Scripts />
        <CMSProvider>
          {children}
        </CMSProvider>
      </body>
    </html>
  );
}
