import React from 'react';
import {useTimer} from 'react-timer-hook';

interface TimerProps {
    expiryTimestamp: Date;
    autoStart?: boolean;
}

function Timer({expiryTimestamp}: TimerProps) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({expiryTimestamp, onExpire: () => console.warn('onExpire called')});

    const addLeadingZero = (value: number) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    // Calculate weeks based on days
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    return (
        <div className='animate-q absolute bottom-[10%] m-0 bg-whitealpha flex justify-center font-comic-neue rounded-[40px] text-brown'>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold' suppressHydrationWarning> {addLeadingZero(weeks)}</span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>недель</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold' suppressHydrationWarning> {addLeadingZero(remainingDays)}</span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>дней</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold' suppressHydrationWarning> {addLeadingZero(hours)}</span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>часов</span>
            </div>
            <div className='flex flex-col text-center mr-[20px]'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold' suppressHydrationWarning> {addLeadingZero(minutes)}</span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>минут</span>
            </div>
            <div className='flex flex-col text-center'>
                <span className='mobile-s:text-[30px] mobile-s3:text-[37px] font-bold' suppressHydrationWarning>{addLeadingZero(seconds)}</span>
                <span className='mobile-s:text-[13px] mobile-s3:text-[14px]'>секунд</span>
            </div>
        </div>
    );
}

export default Timer;

