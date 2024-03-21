'use client'
import React from 'react';
import Timer from "@/components/Timer/Timer";

const Welcome = () => {
    const expiryDate = new Date('2024-05-31T00:00:00');

    return (
        <>
            <div className='w-full h-full'>
                <div className="bg-welcome max-w-[620px] h-full  m-auto bg-no-repeat bg-contain relative p-[30px]">
                    <div className='flex flex-col h-full max-w-[350px] m-auto'>
                        <p className='font-comic-neue text-[11px] uppercase tracking-widest text-right pt-[100px] mb-[150px] text-black'>Вместе <br/> и
                            навсегда</p>
                        <p className='mb-[200px] text-center font-scriptorama text-[40px] flex flex-col text-brown'>Андрей <span
                            className='text-[19px] pt-[10px]'>&</span> Маргарита
                        </p>
                        <p className='mb-[100px] flex flex-col font-comic-neue uppercase text-[10px] tracking-widest text-black'>Приглашаем
                            на свадьбу <span className='text-[19px] font-scriptorama lowercase text-black'>31 мая 2024</span></p>
                        <Timer expiryTimestamp={expiryDate} autoStart={true}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;