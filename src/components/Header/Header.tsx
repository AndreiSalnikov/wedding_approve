import React from 'react';

const Header = () => {
    return (<header className="z-[999] animate-a flex bg-brown bg-opacity-[0.37] h-[60px] w-full fixed">
        <div className='absolute top-[60px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]  bg-blackbrown'>
            <ul className='bg-blackbrown pt-[12px] pr-[40px] pb-[60px] pl-[60px]  rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]'>
                <li>
                    <a className='flex'>
                       <i className='fa fa-star before:content-["\f037"] w-[30px]'></i>
                        <p>Главная</p>
                    </a>
                </li>
                <li>Приглашение</li>
                <li>Расписание</li>
                <li>Подтвердить</li>
                <li>Карта</li>
            </ul>
        </div>
        <button id="burger-menu" className="block focus:outline-none p-[13px]">
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
        <div className="p-[18px] text-white">Приглашение</div>
    </header>);
};

export default Header;
