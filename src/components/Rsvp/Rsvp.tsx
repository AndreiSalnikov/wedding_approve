'use client'
import React from 'react';
import {useSearchParams} from 'next/navigation';
import Image from "next/image";
import photo from "../../../public/img/love.jpg"
const Rsvp = () => {
    const searchParams = useSearchParams()
    const name1 = searchParams.get('name1');
    const name2 = searchParams.get('name2');
    const isSingleName = name1 && !name2;

    return (
        <div className='bg-rsvp h-[1060px] w-full mt-[100px] bg-[length:428px] flex flex-col items-center'>
            <div className='flex flex-col items-center max-w-[490px] bg-whitealpha p-[10px]'>
                <div className='max-w-[550px] p-[30px] '>
                    {name1 ?? name2 ? (
                        <p className='text-[36px] font-scriptorama text-brown'>{isSingleName ? 'Дорогой' : 'Дорогие'} {name1} {name2 && `и ${name2}!`}
                        </p>
                    ) : null}
                </div>
                <p className='font-comforta text-[17px] text-center mb-[20px]'>
                    Мы рады сообщить Вам, что 31.05.2024 состоится самое главное торжество в нашей жизни - день нашей
                    свадьбы!
                    Приглашаем Вас разделить с нами радость этого незабываемого дня.
                </p>
                <p className='font-scriptorama text-brown text-[32px] mb-[20px]'>Ждём вас</p>
                <p className='font-comforta text-[14px] mb-[40px]'>31.05.2024 в 11:40</p>
                <Image src={photo} alt='Рита и Андрей улыбаются' width={440} height={380} className='rounded-[200px]'/>
                <p className='text-brown text-[22px] font-scriptorama mb-[30px] mt-[10px]'>Ваши Андрей и Маргарита</p>
                <p className='text-center font-comforta text-[14px] max-w-[408px] mb-[20px]'>Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры</p>
                <div className="flex mb-[60px]">
                    <div className="w-[50px] h-[50px] bg-black opacity-50 rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-black opacity-50 rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-black opacity-50 rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-black opacity-50 rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-black opacity-50 rounded-[50%] "></div>
                </div>
                <button className='before:content-["\2713"] w-[300px] h-[50px] bg-lightbrown rounded-[200px] text-white font-comforta text-[19px]'> Подтвердить</button>
            </div>
        </div>
    );
};

export default Rsvp;