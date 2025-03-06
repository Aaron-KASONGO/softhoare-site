import React from 'react'

export const MyProjects = () => {
  return (
    <>
        <section className="py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="container mx-auto">

                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h3 className="text-green-600 font-semibold">
                        Features
                    </h3>
                    <h2 className="text-slate-800 font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
                    <p className="mt-1 text-neutral-500">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <a href="#" className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                        src="https://i.pinimg.com/736x/f2/15/e1/f215e1a79b9bd322c71520fa65ce59a6.jpg" 
                        alt="Application web moderne"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold">Application SaaS</h3>
                        <p className="text-gray-300">Développement Fullstack</p>
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
                        <h3 className="text-xl font-semibold text-gray-900">Plateforme SaaS</h3>
                        <p className="text-gray-600">Application Web</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">2024</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">React</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Node.js</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">MongoDB</span>
                    </div>
                    </div>
                </a>

                <a href="#" className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                        src="https://i.pinimg.com/736x/59/e7/01/59e7019e468dad02b305f9e3a292ba02.jpg" 
                        alt="Design d'application mobile"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold">App Mobile</h3>
                        <p className="text-gray-300">UI/UX Design</p>
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
                        <h3 className="text-xl font-semibold text-gray-900">App Fitness</h3>
                        <p className="text-gray-600">Mobile iOS/Android</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">2023</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Flutter</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Firebase</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Figma</span>
                    </div>
                    </div>
                </a>

                <a href="#" className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                        src="https://i.pinimg.com/736x/66/cd/5f/66cd5fb45ce4f57e179c67dbd9aabf03.jpg" 
                        alt="Site e-commerce"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold">Boutique en ligne</h3>
                        <p className="text-gray-300">E-commerce</p>
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
                        <h3 className="text-xl font-semibold text-gray-900">Shop Modern</h3>
                        <p className="text-gray-600">E-commerce</p>
                        </div>
                        <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">2024</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Shopify</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Liquid</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">JavaScript</span>
                    </div>
                    </div>
                </a>
                </div>

                <div className='flex justify-center mt-10'>
                    <a href="#" className="block py-2 px-4 text-center text-white font-medium bg-slate-800 duration-150 hover:bg-slate-700 active:bg-slate-900 rounded-lg shadow-lg hover:shadow-none">
                        Voir plus →
                    </a>
                </div>
            </div>

        </section>
    </>
  )
}
