import React from 'react'
import { Navbar } from '../_components/navbar';
import { Footer } from '../_components/footer';

const budgets = [
    {
        title: "150$ - 250$",
        id: 1
    },
    {
        title: "250$ - 500$",
        id: 2
    },
    {
        title: "500$ - 1 000$",
        id: 3
    },
    {
        title: "1 000$ - 2 500$",
        id: 4
    },
    {
        title: "2 500$ - 5 000$",
        id: 5
    },
    {
        title: "5 000$ - plus",
        id: 6
    },
]

const Contact = () => {
  return (
    <div className='min-h-screen bg-slate-800'>
        <Navbar variant='dark' />

        <div className="container space-y-8 mx-auto px-4 sm:px-6 lg:px-8 pt-24">

            <div className="max-w-3xl pb-10">
                <h3 className="text-teal-600 font-semibold">
                    Contact
                </h3>
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contactez-nous</h2>
                <p className="mt-1 text-gray-500">Vous avez une question ou un projet en tête ? N'attendez plus ! Remplissez notre formulaire en quelques clics et nous serons ravis de vous accompagner dans vos démarches.</p>
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

            <div className="container space-y-8 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-1">
                {/* <!-- Étapes --> */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="pl-6">
                        <h3 className="text-2xl text-slate-800 font-bold mb-4">Matérialisez vos idées !</h3>
                        <p className="text-gray-500 mb-6">Remplissez le formulaire que voici <span className='md:hidden'> 👇</span><span className='hidden md:inline'> 👉</span></p>
                        
                        {/* <div className="space-y-8">
                            <div>
                                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                                <h4 className="font-bold mt-4">We'll prepare a proposal</h4>
                                <p className="text-gray-600 text-sm mt-2">Received scope, template and IP price will be included.</p>
                            </div>
                            <div>
                                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                                <h4 className="font-bold mt-4">Together we discuss it</h4>
                                <p className="text-gray-600 text-sm mt-2">Google Hangouts or Skype usually works great.</p>
                            </div>
                            <div>
                                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                                <h4 className="font-bold mt-4">Let's start building</h4>
                                <p className="text-gray-600 text-sm mt-2">When the contract is signed, we start the first sprint.</p>
                            </div>
                        </div> */}
                    </div>

                    {/* <!-- Formulaire --> */}
                    <div className="md:col-span-2 bg-slate-800 p-8 rounded-xl text-white">
                        {/* <p className="text-lg mb-6">Write us a few words about your project and we'll prepare a proposal for you within 24 hours.</p> */}
                        
                        <form>
                            <div className="mt-6 grid gap-4">
                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hs-firstname-hire-us-1" className="block mb-2 text-sm text-white font-medium">Nom</label>
                                        <input type="text" required placeholder='ex: KAWEJ' name="nom" id="hs-firstname-hire-us-1" className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-lastname-hire-us-1" className="block mb-2 text-sm text-white font-medium">Prénom</label>
                                        <input type="text" required placeholder='ex: Nathan' name="prenom" id="hs-lastname-hire-us-1" className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hs-work-email-hire-us-1" className="block mb-2 text-sm text-white font-medium">Work Email</label>
                                        <input type="email" required placeholder='ex: nathan.kawej@gmail.com' name="email" id="hs-work-email-hire-us-1" autoComplete="email" className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="hs-work-email-hire-us-1" className="block mb-2 text-sm text-white font-medium">Téléphone</label>
                                        <input type="tel" required placeholder='ex: 099 452 4...' name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autoComplete='tel' className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                </div>


                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hs-company-hire-us-1" className="block mb-2 text-sm text-white font-medium">Nom entreprise</label>
                                        <input type="text" placeholder='ex: Mc Donald' name="hs-company-hire-us-1" id="hs-company-hire-us-1" className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-company-website-hire-us-1" className="block mb-2 text-sm text-white font-medium">Votre budget</label>
                                        <select required className="py-2.5 px-4 pe-9 block border-2 w-full border-gray-200 rounded-lg text-sm focus:border-slate-500 focus:ring-slate-500 disabled:opacity-50 disabled:pointer-events-none">
                                            <option  className='text-black'>Chosissez un bugdet</option>
                                            {
                                                budgets.map((item) => (<option value={item.id} key={item.id} className='text-black'>{item.title}</option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div>
                                    <label htmlFor="hs-about-hire-us-1" className="block mb-2 text-sm text-white font-medium">Details</label>
                                    <textarea id="hs-about-hire-us-1" placeholder='Parlez nous de votre projet...' name="hs-about-hire-us-1" rows={4} className="py-2.5 border-2 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-slate-500 focus:ring-slate-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                                </div>

                                <div className="mt-6 grid">
                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none">Envoyer</button>
                                </div>
                            </div>
                        </form>

                        {/* <p className="mt-8 text-center text-sm text-gray-600">
                            If you need to have a DNA first, just contact us at<br />
                            <a href="mailto:contact@materio.co" className="font-semibold text-blue-600">contact@materio.co</a>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact;
