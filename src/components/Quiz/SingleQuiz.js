import { CheckBadgeIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CorrectQuizeContext, QuizeIdContext } from '../Layout/Layout';

const SingleQuiz = ({quize}) => {
    let [open,setOpen] = useState(true)
    const [correctQuize,setCorrectQuize] = useContext(CorrectQuizeContext)
    let {correctAnswer,options,question} = quize

    // option click function
    const clickAnswer=(event,option)=>{
       if(option===correctAnswer){
        event.target.className='font-medium text-lg mb-3 w-full border rounded-lg py-5 text-left px-10 bg-gray-50 text-gray-900'
        toast.success(`Answer is Correct ✔️` , {autoClose:1000})
        setCorrectQuize(prev=>[...prev,option])
        event.target.setAttribute('disabled',true)
       }
       else{
        toast.warn('Answer is not Correct' , {autoClose:1000})
       }
    }

    // eye click function
    const eyeClick =()=>{
        if(open===true){
            setOpen(!open)
            toast.info(`Answer : ${correctAnswer}` , {autoClose:1500})
            setTimeout(() => {
                setOpen(true)
            }, 2800);
        }
    }
   
    return (
        <div className=' m-auto mb-10 bg-[#438d9f] text-white p-3 py-5 sm:p-10 rounded-lg shadow-lg shadow-teal-800'>
           <div className='flex justify-between text-xl sm:text-2xl font-semibold mb-5 text-center'>
                {
                <div className='px-3 md:px-10' dangerouslySetInnerHTML={{__html: question}}></div>
                }
                <button onClick={eyeClick}>
                    {
                        open ? <EyeSlashIcon className='w-5'></EyeSlashIcon> : <EyeIcon className='w-5'></EyeIcon>
                    }
                </button>
            </div>
           <div className='lg:grid grid-cols-2 gap-2 gap-x-4'>
            {
                options.map((option,index)=>{
                    return (
                            <button key={index} onClick={(event)=>clickAnswer(event,option)} className='font-medium text-lg mb-3 w-full border rounded-lg py-5 text-white text-left px-5 sm:px-10 bg-[#ffffff4a]'>
                            {index+1 +')'} {option}
                            </button>
                        )
                    }
                )
            }
           </div>
        </div>
    );
};

export default SingleQuiz;