import type { Metadata } from "next";
import "../styles/normalize.css";
import "../styles/webflow.css";
import "../styles/blanchard-orthodontics.webflow.css";
import { CMSProvider } from "../components/CMSProvider";

export const metadata: Metadata = {
  title: "Blanchard Orthodontics",
  description: "Blanchard Orthodontics website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CMSProvider>
          {children}
        </CMSProvider>
      </body>
    </html>
  );
}
