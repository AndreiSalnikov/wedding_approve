import React from 'react';

const Header = () => {
    return (
        <header className="z-[999] animate-a flex bg-brown bg-opacity-[0.37] h-[60px] w-full fixed">
                <button id="burger-menu" className="block focus:outline-none p-[13px]">
                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            <div className="p-[18px] text-white">Приглашение</div>
        </header>
    );
};

export default Header;
