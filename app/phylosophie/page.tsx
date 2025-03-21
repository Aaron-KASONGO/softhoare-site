import React from 'react'
import { Navbar } from '../_components/navbar'
import { Footer } from '../_components/footer';

const Phylosophie = () => {
  return (
    <div className='min-h-screen bg-white'>
            <Navbar />
    
            <div className="container space-y-4 mx-auto px-4 sm:px-6 lg:px-8 pt-24">
    
                <div className="max-w-3xl">
                    <h3 className="text-teal-600 font-semibold">
                        À propos
                    </h3>
                    <h2 className="text-slate-800 font-semibold text-2xl md:text-4xl md:leading-tight">Notre philosophie</h2>
                </div>

                <div className='pb-10 text-gray-500 space-y-2'>
                    <p>
                    Chez <strong>SoftHoare</strong>, l'utilisateur est au cœur de nos projets. Nous développons des applications en écoutant attentivement les besoins des utilisateurs pour offrir des solutions simples, intuitives et efficaces.
                    </p>
                    <p className='font-bold text-lg'>Le respect du temps</p>
                    <p>
                    Nous comprenons l'importance du temps. C’est pourquoi nous nous engageons à respecter les délais et à fournir des solutions rapides, tout en garantissant leur qualité.
                    </p>
                    <p className='font-bold text-lg'>La qualité avant tout !</p>
                    <p>
                    La qualité est notre priorité. Chaque application que nous créons est testée, optimisée et conçue pour offrir une performance irréprochable à long terme.
                    </p>
                    <p className='font-bold text-lg'>Servir des causes plus grandes</p>
                    <p>
                    Nous soutenons des projets à but non lucratif, mettant l’humain et l’environnement au cœur de nos priorités. Nous croyons que la technologie doit servir des causes qui ont un impact positif sur la société et la planète.
                    </p>
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

            <div className='bg-slate-800'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <img className="w-full object-cover rounded-xl h-[30rem]" src="https://images.pexels.com/photos/8111891/pexels-photo-8111891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image" />
                    </div>
                    {/* End Col */}

                    {/* Timeline */}
                    <div>
                        {/* Heading */}
                        <div className="mb-4">
                        <h3 className="text-teal-400 text-xs font-medium uppercase">
                            Processus
                        </h3>
                        </div>
                        {/* End Heading */}

                        {/* Item */}
                        <div className="flex gap-x-5 ms-1">
                        {/* Icon */}
                        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-500">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-500 text-teal-400 font-semibold text-xs uppercase rounded-full">
                                1
                            </span>
                            </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                            <p className="text-sm lg:text-base text-neutral-400">
                            <span className="text-white">Expression des besoins: </span>
                            Nous collaborons étroitement avec vous pour comprendre vos besoins spécifiques et définir les fonctionnalités clés de votre projet.
                            </p>
                        </div>
                        {/* End Right Content */}
                        </div>
                        {/* End Item */}

                        {/* Item */}
                        <div className="flex gap-x-5 ms-1">
                        {/* Icon */}
                        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-500">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-500 text-teal-400 font-semibold text-xs uppercase rounded-full">
                                2
                            </span>
                            </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                            <p className="text-sm lg:text-base text-neutral-400">
                            <span className="text-white">Conception: </span>
                            Nous concevons des prototypes interactifs qui reflètent vos attentes, permettant des ajustements rapides avant le développement.
                            </p>
                        </div>
                        {/* End Right Content */}
                        </div>
                        {/* End Item */}

                        {/* Item */}
                        <div className="flex gap-x-5 ms-1">
                        {/* Icon */}
                        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-500">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-500 text-teal-400 font-semibold text-xs uppercase rounded-full">
                                3
                            </span>
                            </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                            <p className="text-sm md:text-base text-neutral-400">
                            <span className="text-white">Construction: </span>
                            Nous développons rapidement des versions fonctionnelles, intégrant les retours immédiats pour garantir une solution sur mesure.
                            </p>
                        </div>
                        {/* End Right Content */}
                        </div>
                        {/* End Item */}

                        {/* Item */}
                        <div className="flex gap-x-5 ms-1">
                        {/* Icon */}
                        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-500">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-500 text-teal-400 font-semibold text-xs uppercase rounded-full">
                                4
                            </span>
                            </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                            <p className="text-sm md:text-base text-neutral-400">
                            <span className="text-white">Mise en oeuvre: </span>
                            Nous déployons la solution finale, assurant une transition fluide et un support post-lancement pour garantir sa pérennité.
                            </p>
                        </div>
                        {/* End Right Content */}
                        </div>
                        {/* End Item */}

                        <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-teal-400 font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="/contact">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                        Nous contacter
                        </a>
                    </div>
                    {/* End Timeline */}
                </div>
                {/* End Grid */}
            </div>

            <Footer />
    </div>
  )
}


export default Phylosophie;