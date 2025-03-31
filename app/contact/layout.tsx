import { Metadata } from "next";


export const metadata: Metadata = {
    title: "SoftHoare | Projets",
    description: "Vous avez une question ou un projet en tête ? N'attendez plus ! Remplissez notre formulaire en quelques clics et nous serons ravis de vous accompagner dans vos démarches.",
    keywords: ["Agence", "Agence developpement", "developpement logiciel", "lubumbashi", "lubumbashi developpement", "devlopment", "web app", "mobile app", "software"],
    openGraph: {
      title: "SoftHoare | Contact",
      description: "Vous avez une question ou un projet en tête ? N'attendez plus ! Remplissez notre formulaire en quelques clics et nous serons ravis de vous accompagner dans vos démarches.",
      url: "https://softhoare.com/contact",
      images: "/logos/logo_blue.png"
    },
    twitter: {
      title: "SoftHoare | Contact",
      description: "Vous avez une question ou un projet en tête ? N'attendez plus ! Remplissez notre formulaire en quelques clics et nous serons ravis de vous accompagner dans vos démarches.",
      card: "summary",
      images: "/logos/logo_blue.png",
        site: "https://softhoare.com/contact"
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