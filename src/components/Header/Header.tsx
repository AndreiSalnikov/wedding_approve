'use client'
import React from 'react';
import Script from 'next/script'
import {useState} from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setMenuOpen(!menuOpen);
    };
    return (<header className="z-[999] animate-a flex bg-brown bg-opacity-[0.37] h-[60px] w-full fixed">
        <div
            className={`absolute top-[60px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]  bg-blackbrown  ${menuOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} transition-all transition-duration: 300ms`}>
            <ul className='bg-blackbrown pt-[12px] pr-[40px] pb-[25px] pl-[25px]  rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[15px] font-patriciana text-white'>
                <li className='mb-[10px]'>
                    <a className='hover:cursor-pointer flex items-center' onClick={() => scrollToSection('welcome')}>
                        <i className='fa-solid fa-star w-[30px]'></i>
                        <p>Главная</p>
                    </a>
                </li>
                <li className='mb-[10px]'>
                    <a className='hover:cursor-pointer flex items-center' onClick={() => scrollToSection('rsvp')}>
                        <i className="fa-solid fa-envelope w-[30px] "></i>
                        <p>Приглашение</p>
                    </a>
                </li>
                <li className='mb-[10px]'>
                    <a className='hover:cursor-pointer flex items-center'  onClick={() => scrollToSection('approve')}>
                        <i className="fa fa-plus-square w-[30px]"></i>
                        <p>Подтвердить</p>
                    </a>
                </li>
                <li className='mb-[10px]'>
                    <a className='hover:cursor-pointer flex items-center' onClick={() => scrollToSection('schedule')}>
                        <i className="fa fa-list-ul  w-[30px]"></i>
                        <p>Расписание</p>
                    </a>
                </li>
                <li>
                    <a className='hover:cursor-pointer flex items-center' onClick={() => scrollToSection('map')}>
                        <i className="fa-solid fa-map  w-[30px]"></i>
                        <p>Карта</p>
                    </a>

                </li>
            </ul>
        </div>
        <button onClick={toggleMenu} id="burger-menu" className="block focus:outline-none p-[13px]">
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
        <div className="p-[18px] text-white">Приглашение</div>
        <Script src="https://kit.fontawesome.com/2fd57f35cd.js" crossOrigin="anonymous"/>
    </header>);
};

export default Header;
