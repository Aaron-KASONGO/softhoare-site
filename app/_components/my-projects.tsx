import React from 'react'

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
    }
]

export const MyProjects = () => {
  return (
    <>
        <section className="py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="container mx-auto">

                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h3 className="text-teal-600 font-semibold">
                        Projets
                    </h3>
                    <h2 className="text-slate-800 font-semibold text-2xl md:text-4xl md:leading-tight">Nos réalisations</h2>
                    <p className="mt-1 text-neutral-500">Découvrez nos réalisations, des projets innovants et sur mesure qui témoignent de notre expertise et de notre capacité à transformer vos idées en solutions concrètes et performantes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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

                <div className='flex justify-center mt-10'>
                    <a href="/projets" className="block py-2 px-4 text-center text-white font-medium bg-slate-800 duration-150 hover:bg-slate-700 active:bg-slate-900 rounded-lg shadow-lg hover:shadow-none">
                        Voir plus →
                    </a>
                </div>
            </div>

        </section>
    </>
  )
}
