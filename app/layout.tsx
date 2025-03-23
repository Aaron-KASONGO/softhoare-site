import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftHoare | Accueil",
  description: "L'agence de développement SoftHoare crée des solutions numériques sur-mesure pour répondre aux besoins spécifiques de votre entreprise. Nous allions innovation, expertise technique et design moderne pour vous aider à réussir sur internet (Lubumbahsi, logiciel, congo, rdc).",
  keywords: ["Agence", "Agence developpement", "developpement logiciel", "lubumbashi", "lubumbashi developpement", "devlopment", "web app", "mobile app", "software"],
  openGraph: {
    title: "SoftHoare | Accueil",
    description: "L'agence de développement SoftHoare crée des solutions numériques sur-mesure pour répondre aux besoins spécifiques de votre entreprise. Nous allions innovation, expertise technique et design moderne pour vous aider à réussir sur internet.",
    url: "https://softhoare.com",
    images: "/logos/logo_blue.png"
  },
  twitter: {
    title: "SoftHoare | Accueil",
    description: "L'agence de développement SoftHoare crée des solutions numériques sur-mesure pour répondre aux besoins spécifiques de votre entreprise. Nous allions innovation, expertise technique et design moderne pour vous aider à réussir sur internet.",
    card: "summary",
    images: "/logos/logo_blue.png"
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
