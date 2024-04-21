'use client'
import React, {useState, useEffect, useRef} from 'react';
import {useSearchParams} from "next/navigation";
import Fireworks from 'fireworks-js';
const AnimationComponent = () => {

    const searchParams = useSearchParams();
    const name1 = searchParams.get('name1');
    const name2 = searchParams.get('name2');
    const [clickedLetters, setClickedLetters] = useState([false, false, false, false]);
    const [questWin, setQuestWin] = useState(false)
    const containerRef = useRef(null);

    useEffect(() => {
        if (questWin) {
            // @ts-ignore
            const fireworks = new Fireworks(containerRef.current, {sound: {enabled: true, files: ['explosion0.mp3']}});
            fireworks.updateSize({width: window.innerWidth, height: window.innerHeight})
            fireworks.start();

            setTimeout(() => {
                if (fireworks) {
                    fireworks.stop();
                    setQuestWin(false)
                }
            }, 5000);


            return () => {
                fireworks.stop();
            };

        }

    }, [questWin]);

    const handleClick = (index: number) => {
        const updatedClickedLetters = [...clickedLetters];
        updatedClickedLetters[index] = !updatedClickedLetters[index];
        setClickedLetters(updatedClickedLetters);
        if (updatedClickedLetters.every(letterClicked => letterClicked)) {
            setQuestWin(true)
        }
    };


    return (
        <>
            {name1 === "Владислав" && name2 === "Елизавета" &&
                <div className="interactive-game ">
                    <div className={`z-[9999999999]  absolute top-[1000px] letter ${clickedLetters[0] ? 'text-red-500' : 'opacity-5 text-black'}`} onClick={() => handleClick(0)}>В
                    </div>
                    <div className={`z-[9999999999]  absolute left-[70%] top-[900px] letter transition- ${clickedLetters[1] ? 'text-red-500' : 'opacity-5 text-black'}`} onClick={() => handleClick(1)}>Л
                    </div>
                    <div className={`z-[9999999999]  absolute left-[60%] top-[1865px] letter ${clickedLetters[2] ? 'text-red-500' : 'opacity-10 text-black'}`} onClick={() => handleClick(2)}>А
                    </div>
                    <div className={`z-[9999999999]  absolute top-[2550px] letter ${clickedLetters[3] ? 'text-red-500' : 'opacity-5 text-black'}`} onClick={() => handleClick(3)}>Д
                    </div>
                </div>}

            {questWin &&
                <div className='w-screen h-screen flex bg-[#222] fixed left-0 top-0 bg-opacity-70 z-[10000]'>
                    <div ref={containerRef} className="fireworks-container"></div>
                </div>}
        </>

    );
};

export default AnimationComponent;