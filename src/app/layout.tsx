import type { Metadata } from "next";
import "./globals.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header />
        <div className="main-wrapper pt-18">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
