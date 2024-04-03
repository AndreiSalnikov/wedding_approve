import React from 'react';

const Schedule = () => {
    return (
        <div id='schedule' className='bg-schedule min-h-[400px] w-full bg-cover bg-center bg-no-repeat relative flex  text-brown'>
            <div className='w-full h-full bg-whitealpha flex flex-col text-center items-center pb-[50px]'>
                <p className='text-[30px] font-scriptorama mb-[20px] pt-[50px]'>Свадебное расписание</p>
                <div className='flex max-w-[540px] pl-[20px] pr-[20px]'>
                    <p className='font-comforta text-[14px] text-left'>11:40
                        31.05.2024</p>
                    <div className='ml-[40px] pb-[30px]'>
                        <p className='text-left pl-[10px] font-comforta text-[17px]'>Торжественная роспись <br/>
                            <span className='font-corinthia text-[20px]'>ЗАГС</span></p>
                        <p className='pt-[20px] text-left text-[15px]'>Приглашаем вас разделить вместе с нами радость
                            создания новой семьи.</p>
                    </div>
                </div>
                <div className='flex max-w-[540px] pt-[20px] pl-[20px] pr-[20px]'>
                    <p className='font-comforta text-[14px] text-left'>14:30
                        31.05.2024</p>
                    <div className='ml-[40px]'>
                        <p className='text-left pl-[10px] font-comforta text-[17px]'>Фуршет <br/>
                            <span className='font-corinthia text-[20px]'>Банкетный зал</span></p>
                        <p className='pt-[20px] text-left text-[15px]'>После росписи и небольшой фотосессии ждём всех в банкетном зале.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;