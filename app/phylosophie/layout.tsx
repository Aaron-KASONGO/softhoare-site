import { Metadata } from "next";


export const metadata: Metadata = {
    title: "SoftHoare | Projets",
    description: "Découvrez nos réalisations, des projets innovants et sur mesure qui témoignent de notre expertise et de notre capacité à transformer vos idées en solutions concrètes et performantes.",
    keywords: ["Agence", "Agence developpement", "developpement logiciel", "lubumbashi", "lubumbashi developpement", "devlopment", "web app", "mobile app", "software"],
    openGraph: {
      title: "SoftHoare | Accueil",
      description: "Découvrez nos réalisations, des projets innovants et sur mesure qui témoignent de notre expertise et de notre capacité à transformer vos idées en solutions concrètes et performantes.",
      url: "https://softhoare.com/projets",
      images: "/logos/logo_blue.png"
    },
    twitter: {
      title: "SoftHoare | Accueil",
      description: "Découvrez nos réalisations, des projets innovants et sur mesure qui témoignent de notre expertise et de notre capacité à transformer vos idées en solutions concrètes et performantes.",
      card: "summary",
      images: "/logos/logo_blue.png",
        site: "https://softhoare.com/projets"
    }
};
  
  export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            {children}
        </div>
    );
  }