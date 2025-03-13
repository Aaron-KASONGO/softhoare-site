import React from 'react'
import { Navbar } from '../_components/navbar';
import { Footer } from '../_components/footer';

const projets = [
    {
        titre: "Kilunga Business",
        type: "Immobilier web",
        techno: ["Next js", "Neon", "Postgresql"],
        description: "Kilunga business est une agence immobilière avec une grande expérience de l'immobilier et un service de confiance qui a fait ses preuves.",
        image: "/projets_img/kilungabusiness.com.png",
        lien: "https://kilungabusiness.com",
        anne: 2024
    },
    {
        titre: "Legent",
        type: "Mobile IOS/Android",
        techno: ["React js", "Supabaise", "PWA"],
        description: "Legent facilite le partage de profils entièrement personnalisés contenant des liens, des photos, des informations de contact et bien plus encore.",
        image: "/projets_img/legent.me.png",
        lien: "https://legent.me",
        anne: 2024
    },
    {
        titre: "Whabitou",
        type: "Mobile Immobilier",
        techno: ["Next.js", "Neon", "API"],
        description: "Whabitout est une plateforme d'exposition et de gestion de biens immobiliers. Les utilisateurs peuvent consulter les différentes annonces",
        image: "/projets_img/whabitout.png",
        lien: "#",
        anne: 2024
    },
    {
        titre: "Maison safina",
        type: "Gestion de salles",
        techno: ["React js", "Supabase", "Google"],
        description: "Safina est une maison de formation culturelle formé autour du jeune avec une culture ouverte, riche et créative.",
        image: "/projets_img/safina.org.png",
        lien: "#",
        anne: 2024
    }
]


const Projet = () => {
  return (
    <div className='min-h-screen bg-slate-800'>
        <Navbar variant='dark' />

        <div className="container space-y-8 mx-auto px-4 sm:px-6 lg:px-8 pt-24">

            <div className="max-w-3xl pb-10">
                <h3 className="text-teal-600 font-semibold">
                    Projet
                </h3>
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Nos réalisations</h2>
                <p className="mt-1 text-gray-500">Découvrez nos réalisations, des projets innovants et sur mesure qui témoignent de notre expertise et de notre capacité à transformer vos idées en solutions concrètes et performantes.</p>
            </div>

            {/* <!-- Section Aide --> */}
            {/* <div className="bg-gray-900 text-white p-8 rounded-xl mb-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Need a help?</h2>
                    <p className="mb-6">We are available for hire.</p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Schedule a free consultation
                    </button>
                </div>
            </div> */}

        </div>
        
        <div className='bg-white'>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4 sm:px-6 lg:px-8">

            {
                        projets.map((item, index) => (
                            <a href={item.lien} key={index} className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                <img 
                                    src={item.image}
                                    alt="Application web moderne"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-gray-300">{item.description}</p>
                                    <div className="pt-4">
                                        <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                                        Voir le projet →
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="bg-white p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{item.titre}</h3>
                                    <p className="text-gray-600">{item.type}</p>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{item.anne}</span>
                                </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {
                                            item.techno.map((techno, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">{techno}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </a>
                        ))
                    }
            </div>
        </div>

        <Footer />

    </div>
  )
}


export default Projet;