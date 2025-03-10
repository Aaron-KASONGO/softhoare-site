"use client"

import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [state, setState] = useState(false)
    
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Accueil", path: "/" },
        { title: "Projets", path: "/projets" },
        { title: "Phylosophie", path: "javascript:void(0)" },
        { title: "Blog", path: "#" },

    ]

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <>
        {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="relative items-center py-3 px-4 mx-auto container sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between items-center pt-8 md:pt-0 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-slate-800 font-semibold" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                    <li className="order-2 py-5 md:py-0">
                        <a href="/contact" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-slate-800 hover:bg-slate-700 active:bg-slate-900 duration-150 block md:py-3 md:inline">
                            Nous contacter
                        </a>
                    </li>
                </ul>
            </div>
      </nav>
    </>
  )
}
