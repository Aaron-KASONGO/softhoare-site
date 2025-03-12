import React from 'react'

export const Testimonial = () => {
  return (
    <>
        <section className="py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">

                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h3 className="text-teal-600 font-semibold">
                        Commentaires
                    </h3>
                    <h2 className="text-slate-800 font-semibold text-2xl md:text-4xl md:leading-tight">Nos commentaires</h2>
                    <p className="mt-1 text-neutral-500">Découvrez ce que nos clients disent de nous : des témoignages qui témoignent de notre engagement, de notre expertise et de l'impact positif de nos solutions sur leurs projets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group relative">
                    <div className="absolute top-0 right-0 w-16 h-16 z-50 to-transparent rounded-tr-2xl"></div>
                        <div className="flex items-start gap-4 mb-6">
                            <img 
                                src="https://i.pinimg.com/736x/ad/92/97/ad92977e0f56d1fea0dde144598640e0.jpg" 
                                alt="Marie Dupont" 
                                className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900">Marie Dupont</h4>
                                <p className="text-sm text-gray-600">CEO @TechStart</p>
                            </div>
                            <img 
                                src="https://i.pinimg.com/736x/0b/81/b1/0b81b10dd625feda99500d7f244f7e84.jpg" 
                                alt="Logo TechStart" 
                                className="absolute object-cover top-0 right-0 w-16 h-16 rounded-tr-2xl rounded-bl-2xl ml-auto opacity-100"
                            />
                        </div>
                        {/* <div className="mb-4 flex text-amber-400">
                        ★★★★★
                        </div> */}
                        <p className="text-gray-700 relative z-10">
                        "Une plateforme révolutionnaire qui a transformé notre façon de collaborer. L'interface intuitive et le support réactif font toute la différence !"
                        </p>
                    {/* <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">12 projets réalisés</span>
                    <span className="text-blue-600 font-medium">Lire plus →</span>
                    </div> */}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group relative">
                    <div className="absolute top-0 right-0 w-16 h-16 z-50 to-transparent rounded-tr-2xl"></div>
                    <div className="flex items-start gap-4 mb-6">
                    <img 
                        src="https://i.pinimg.com/736x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg" 
                        alt="Pierre Martin" 
                        className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                    />
                    <div>
                        <h4 className="font-bold text-gray-900">Pierre Martin</h4>
                        <p className="text-sm text-gray-600">Directeur Marketing</p>
                    </div>
                    <img 
                        src="https://i.pinimg.com/736x/26/e9/08/26e908aebdcd86de9cbcdc2571e43847.jpg" 
                        alt="Logo entreprise" 
                        className="absolute object-cover top-0 right-0 w-16 h-16 rounded-tr-2xl rounded-bl-2xl ml-auto opacity-100"
                    />
                    </div>
                    {/* <div className="mb-4 flex text-amber-400">
                    ★★★★☆
                    </div> */}
                    <p className="text-gray-700 relative z-10">
                    "Des résultats mesurables dès le premier mois d'utilisation. La personnalisation des outils a dépassé nos attentes."
                    </p>
                    {/* <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">8 mois d'utilisation</span>
                    <span className="text-blue-600 font-medium">Lire plus →</span>
                    </div> */}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group relative">
                    <div className="absolute top-0 right-0 w-16 h-16 z-50 to-transparent rounded-tr-2xl"></div>
                    <div className="flex items-start gap-4 mb-6">
                    <img 
                        src="https://i.pinimg.com/736x/e6/77/d5/e677d532074ad286dc60b9a915e4adee.jpg" 
                        alt="Sophie Leroy" 
                        className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                    />
                    <div>
                        <h4 className="font-bold text-gray-900">Sophie Leroy</h4>
                        <p className="text-sm text-gray-600">CTO @StartupX</p>
                    </div>
                    <img 
                        src="https://i.pinimg.com/736x/ef/23/f7/ef23f7ac15dd7e2f8c545649503f1c71.jpg" 
                        alt="Logo StartupX" 
                        className="absolute object-cover top-0 right-0 w-16 h-16 rounded-tr-2xl rounded-bl-2xl ml-auto opacity-100"
                    />
                    </div>
                    {/* <div className="mb-4 flex text-amber-400">
                    ★★★★★
                    </div> */}
                    <p className="text-gray-700 relative z-10">
                    "L'intégration parfaite avec nos outils existants et une équipe toujours à l'écoute. Un partenaire technologique de premier choix."
                    </p>
                    {/* <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">25 collaborateurs</span>
                    <span className="text-blue-600 font-medium">Lire plus →</span>
                    </div> */}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}
