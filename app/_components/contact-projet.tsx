import { AppWindow, Layers, TabletSmartphone } from 'lucide-react'
import React from 'react'

export const ContactProjet = () => {
  return (
    <>
    <div className='bg-gray-50 pb-8 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto'>
            <section className="bg-slate-800 rounded-2xl text-white">
                <div className="px-8 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
                    <div className='space-y-8'>
                        <h2 className="text-2xl font-semibold tracking-tight xl:text-3xl">
                            Parlons de la faisabilité de votre projet !
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            <div className='flex items-center gap-4'>
                                <div className='inline-flex justify-center items-center size-15.5 rounded-full border-4 border-slate-500 bg-slate-600'>
                                    <AppWindow />
                                </div>
                                <span>Application web</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='inline-flex justify-center items-center size-15.5 rounded-full border-4 border-slate-500 bg-slate-600'>
                                    <TabletSmartphone />
                                </div>
                                <span>Application mobile</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='inline-flex justify-center items-center size-15.5 rounded-full border-4 border-slate-500 bg-slate-600'>
                                    <Layers />
                                </div>
                                <span>Logiciel personnalisé</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">

                            <button className="px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-600 rounded-lg focus:ring focus:ring-green-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                Contactez-nous →
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}
