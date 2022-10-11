import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizcalculate from './Quizcalculate';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const [correct,setCorrect] = useState([])
    let quizes = useLoaderData().data
    let {name,questions} = quizes
    return (
        <div className='min-h-[90vh] bg-[#4AA5B7]'>
             <div className='md:grid grid-cols-8 py-10'>
                <div className='md:col-span-5 lg:col-span-6'>
                <h3 className='text-center text-3xl md:text-4xl font-semibold m-auto pb-8 capitalize'>Quiz of {name}</h3>
                    <div className='px-5 lg:px-10 xl:px-20'>
                        {
                        questions.map(quize=><SingleQuiz quize={quize} key={quize.id} setCorrect={setCorrect}></SingleQuiz>)
                        }
                    </div>
                </div>
            <div className='md:col-span-3 lg:col-span-2 bg-[#1b8097d6] rounded-lg border-[#ddd]'>
                <div className='sticky top-0 px-5 py-10 font-semibold text-white'>
                    <h3 className='text-center text-2xl mb-5 border-b-2 pb-4'>Correct Answer : {correct.length}</h3>
                    {
                    correct.map((quiz,index)=><Quizcalculate key={index} index={index} quiz={quiz}></Quizcalculate>)
                    }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Quiz;