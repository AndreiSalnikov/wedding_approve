'use client'
import React, {Suspense, useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import Image from "next/image";
import photo from "../../../public/img/00.jpg";
import {approve, getApproveStatus} from "@/utils/firebase";
import confetti from 'canvas-confetti';
import Questions from "@/components/Questions/Questions";

const Rsvp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RsvpContent/>
        </Suspense>
    );
};

const RsvpContent = () => {
    const searchParams = useSearchParams();
    const name1 = searchParams.get('name1');
    const name2 = searchParams.get('name2');
    const isSingleName = name1 && !name2;
    const [userid, setUserid] = useState('');
    const [approveWedding, setApproveWedding] = useState(false)

    const constructId = () => {
        let newId = '';
        if (name1 && name2) {
            newId = `${name1}&${name2}`;
        } else if (name1) {
            newId = name1;
        }
        setUserid(newId);
    };

    useEffect(() => {
        constructId();

        const fetchData = async () => {
            try {
                const status = await getApproveStatus(userid);
                // @ts-ignore
                setApproveWedding(status);
            } catch (error) {
                console.error("Error fetching approve status:", error);
            }
        };

        if (userid !== '') {
            fetchData();
        }

    }, [userid]);

    const onClickNo = async () => {
        try {
            await approve({userId: userid, rsvp: false});
            setApproveWedding(false)
        } catch (error) {
            console.error("Error occurred while disapproving:", error);
        }
    }
    const onClickYes = async () => {
        try {
            await approve({userId: userid, rsvp: true});
            const burstCount = 50;
            const angle = 60;
            const particleCount = 40;
            const spread = 40;
            const ticks = 200;

            for (let i = 0; i < burstCount; i++) {

                confetti({
                    ticks,
                    colors: ['#B565A7'],
                    particleCount,
                    spread,
                    angle,
                    origin: {x: 0, y: 0.5},
                });

                confetti({
                    ticks,
                    colors: ['#B565A7'],
                    particleCount,
                    spread,
                    angle: 120,
                    origin: {x: 1, y: 0.5},
                });

                await new Promise(resolve => setTimeout(resolve, 100));
                setApproveWedding(true)
            }
        } catch (error) {
            console.error("Error occurred while approving:", error);
        }

    }


    return (
        <div id='rsvp' className='pt-[70px] pb-[70px] bg-rsvp w-full bg-[length:428px] flex flex-col items-center'>
            <div className='flex flex-col items-center max-w-[490px] bg-whitealpha p-[10px]'>
                <div className='mobile-s:pb-[25px] mobile-s3:p-[30px]  '>

                    {(name1 || name2) && (
                        <p className='mobile-s:text-[30px] mobile-s4:text-[37px] font-scriptorama text-brown whitespace-pre-wrap text-center'>
                            {isSingleName ? (name1 === 'Анна' ? `Дорогая ${name1}!` : `Дорогой ${name1}!`) : `Дорогие${name2 ? '\n' : ' '}${name1}${name2 ? ` и ${name2}!` : '!'}`}
                                </p>
                                )}

                </div>
                <p className='font-comforta text-[17px] text-center mb-[20px] text-black'>
                    Мы рады сообщить Вам, что 31.05.2024 состоится самое главное торжество в нашей жизни - день нашей
                    свадьбы!
                    Приглашаем Вас разделить с нами радость этого незабываемого дня.
                </p>
                <p className='font-scriptorama text-brown text-[32px] mb-[20px]'>Ждём вас</p>
                <p className='font-comforta text-[14px] mb-[40px]'>31.05.2024 в 11:40</p>
                <Image src={photo} alt='Рита и Андрей улыбаются' width={440} height={380} className='rounded-[200px]'/>
                <p className='text-brown text-[22px] font-scriptorama mb-[30px] mt-[10px]'>Ваши Андрей и Маргарита</p>
                <p id='approve'
                   className='text-center font-comforta text-[14px] max-w-[408px] mb-[20px] text-black'>Будем
                    благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры</p>
                <div className="flex mb-[60px]">
                    <div className="w-[50px] h-[50px] bg-[#9896a4] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#b18f6a] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#dbbeac] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#88987d] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#6b7a4f] rounded-[50%]"></div>
                </div>
                {!approveWedding && (
                    <button
                        className='before:content-["\2713"] w-[300px] h-[50px] bg-lightbrown rounded-[200px] text-white font-comforta text-[19px]'
                        onClick={onClickYes}> Подтвердить
                    </button>
                )}

                {
                    approveWedding && /*!isLoading*/ (
                        <>
                            <div
                                className='font-rotunda bg-[#dff0d8] pt-[30px] pl-[20px] pr-[20px] pb-[20px] rounded-[7px] w-full max-w-[300px] flex justify-center flex-col'>
                                <div className='flex justify-around w-full h-full'>
                                    <div className='bg-hands w-[50px] h-[50px] block bg-contain bg-no-repeat'></div>
                                    <div className='max-w-[130px] text-[14px] text-[#3c763d] leading-[1.4]'>Спасибо, что
                                        подтвердили свое
                                        присутствие! <br/>
                                        <span className='font-bold'>Андрей </span> и
                                        <span className='font-bold'> Маргарита </span>
                                        уже оповещены об этом ;)
                                    </div>
                                </div>
                                <button id='approve' onClick={onClickNo}
                                        className='font-comforta bg-white mt-[20px] mb-[20px] rounded-[4px] p-[5px] font-semibold border-[1px] border-gray-300 text-black'>Отменить
                                    подтверждение
                                </button>
                            </div>
                            <Questions userId={userid}/>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Rsvp;
