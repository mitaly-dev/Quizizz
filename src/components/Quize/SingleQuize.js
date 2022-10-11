import { CheckBadgeIcon, EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CorrectQuizeContext, QuizeIdContext } from '../Layout/Layout';
import Option from './Option';

const SingleQuize = ({quize}) => {
    const [correctQuize,setCorrectQuize] = useContext(CorrectQuizeContext)
    let {id,correctAnswer,options,question} = quize

    const clickAnswer=(event,option)=>{
      
       if(option===correctAnswer){
        event.target.classList.add('bg-green-600')
        toast.success(`Answer is Correct ✔️` , {autoClose:1000})
        setCorrectQuize(prev=>[...prev,option])
       }
       else{
        toast.warn('Answer is not Correct' , {autoClose:1000})
       }
    }
   
    return (
        <div className=' m-auto mb-10 bg-[#438d9f] text-white p-10 rounded-lg shadow-lg shadow-teal-800'>
           <div className='text-2xl font-semibold mb-5 text-center'>
                {
                <div dangerouslySetInnerHTML={{__html: question}}></div>
                }
            <EyeIcon className='w-5'></EyeIcon>
            </div>
           <div className='md:grid grid-cols-2 gap-2 gap-x-4'>
            {
                options.map((option,index)=>{
                    return (
                            <button key={index} onClick={(event)=>clickAnswer(event,option)} className='font-medium text-lg mb-3 w-full border rounded-lg py-5 text-white text-left px-10 bg-[#ffffff4a] hover:text-white'>
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
// [#1b8097d6]
export default SingleQuize;