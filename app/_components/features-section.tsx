import { AppWindow, Layers, LayoutTemplate, ShoppingBag, Store, TabletSmartphone } from 'lucide-react'
import React from 'react'

export const FeaturesSection = () => {
    
  return (
    <>
        <div className='bg-slate-100'>

            <div className="container space-y-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-3xl">
                    <h3 className="text-teal-600 font-semibold">
                        Services
                    </h3>
                    <h2 className="text-slate-800 font-semibold text-2xl md:text-4xl md:leading-tight">Nos services</h2>
                    <p className="mt-1 text-neutral-500">Avec une approche centrée sur l’utilisateur et une maîtrise parfaite des technologies de pointe, nous proposons des services de développement logiciel qui vous aident à atteindre vos objectifs.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <Layers className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Logiciels et outils metiers</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous concevons des logiciels et des outils métiers sur mesure pour optimiser vos processus internes, améliorer la productivité et faciliter la gestion de vos opérations quotidiennes.</p>
                    </div>

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <TabletSmartphone className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Application mobile</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous développons des applications mobiles performantes et intuitives, adaptées à vos besoins spécifiques, afin de vous permettre d’atteindre vos utilisateurs où qu'ils soient, sur Android ou iOS.</p>
                    </div>

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <AppWindow className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Application web</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous créons des applications web robustes et scalables, offrant une expérience utilisateur fluide et une intégration parfaite avec vos systèmes existants, pour un usage en ligne optimal sur tous vos appareils.</p>
                    </div>

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <LayoutTemplate className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Sites vitrines</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous concevons des sites vitrines élégants et modernes qui reflètent l'image de votre entreprise et vous permettent de captiver vos visiteurs tout en présentant vos services et produits de manière professionnelle.</p>
                    </div>

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <ShoppingBag className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Plateforme e-commerce</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous développons des plateformes e-commerce sur mesure, sécurisées et faciles à gérer, permettant à votre entreprise de vendre vos produits en ligne, tout en offrant une expérience d'achat fluide à vos clients.</p>
                    </div>

                    <div className="size-full hover:bg-slate-50 hover:shadow-lg rounded-lg transition-shadow duration-300 group p-5">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100">
                                <Store className='text-slate-600' />
                            </div>
                            <div className="shrink-0">
                            <h3 className="block text-lg font-semibold text-slate-800">Marketplace</h3>
                            </div>
                        </div>
                        <p className="text-slate-600">Nous créons des marketplaces performantes et évolutives, permettant à des vendeurs tiers de proposer leurs produits, tout en facilitant la gestion des transactions et des utilisateurs sur une plateforme centralisée et sécurisée.</p>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
