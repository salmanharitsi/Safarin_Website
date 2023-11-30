import React from 'react'
import { useState } from 'react'
import {GrLanguage} from "react-icons/gr"
import {FaXmark} from "react-icons/fa6"
import {FaBars} from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {link:"Beranda", path: "#beranda"},
        {link:"Projek", path: "#projek"},
        {link:"Tentang Kami", path: "#about"},
        {link:"Penawaran", path: "#penawaran"},
    ]
  return (
    

    // nav item
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-3xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between item-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'> <img src="#" alt="" className='w-10 inline-block items-center' />SAFARIN</a>

                {/* showing navitem using map */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path })=> <a key={link} href={path} className='block hover:text-grey-300'>{link}</a>)
                    }
                </ul>
            </div>

            {/* language and signup */}
            <div className='space-x-12 hidden md:flex items-center'>
                <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className="mr-2"/><span>Language</span></a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
            </div>
            {/* Menu btn. only display */}
            <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark  className='w-6 h-6 text-primary  '/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                        }

                    </button>
            </div>
        </div>
    </nav>

    <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                
                navItems.map(({link,path })=> <a key={link} href={path} className='block hover:text-grey-300'>{link}</a>)
                
            } 
    </div>
    </>

  );
}

export default Navbar