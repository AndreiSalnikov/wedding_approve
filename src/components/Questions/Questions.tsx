import React from 'react';
import MuiCheckBox from "@/components/MuiCheckbox/MuiCheckBox";
interface QuestionsProps {
    userId: string;
}
const Questions: React.FC<QuestionsProps> = ({userId}) => {
    return (
        <div className='max-w-[600px] relative bg-[#417e77] mt-[20px]  rounded-[20px] p-[20px]'>
            <div className='absolute border-[15px] border-solid border-b-[20px] border-b-[#417e77] border-transparent left-[46%] top-[-35px] font-'></div>
            <div className='bg-marine border-l-[4px] border-l-[#f4623e] p-[15px] text-center font-comforta text-[13px]'>Пожалуйста, ответьте на вопросы, которые для вас
                подготовили <span className='font-bold'>Андрей</span> и <span className="font-bold">Маргарита</span>:
            </div>
            <div className='mt-[20px] p-[25px]'>
                <div>
                    <MuiCheckBox userId={userId}/>
                </div>

            </div>
        </div>
    );
};

export default Questions;