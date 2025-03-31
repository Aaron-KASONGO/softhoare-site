import React from 'react'

export const WhyUs = () => {
  return (
    <>
        {/* Approach */}
        <div className="bg-slate-800 px-4 sm:px-6 lg:px-8">
        {/* Approach */}
        <div className="container py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
                    <h3 className="text-teal-600 font-semibold">
                        À propos
                    </h3>
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Pourquoi nous</h2>
                <p className="mt-1 text-neutral-400">Nous mettons l’utilisateur au cœur de nos solutions, garantissant des délais respectés et une qualité irréprochable à chaque étape du projet.</p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="">
                <img className="w-full object-cover rounded-xl h-[30rem]" src="https://images.pexels.com/photos/5922530/pexels-photo-5922530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image" />
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
        </div>
        {/* End Approach */}
    </>
  )
}
