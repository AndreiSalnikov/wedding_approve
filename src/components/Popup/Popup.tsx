import React, {useState} from 'react';

 interface IPopupProps {
     visible: boolean,
     top: number
 }
const Popup: React.FC<IPopupProps> = ({visible,top}) => {

    return (
        <div className='fixed bg-[#00ac46] top-[70px] z-[1000] rounded-[5px] min-w-[252px] right-[10px] justify-between items-center p-[15px]' style={{ display: visible ? 'flex' : 'none', top: `${top}px` }}>
            <div className='bg-galka w-[35px] h-[40px] bg-no-repeat bg-center'></div>
            <div className=' text-[13px] max-w-[160px] text-white'>Спасибо, ваш ответ сохранен и отправлен!</div>
        </div>
    );
};

export default Popup;

