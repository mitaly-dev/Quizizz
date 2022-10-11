import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CorrectQuizeContext } from '../Layout/Layout';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const [correctQuize,setCorrectQuize] = useContext(CorrectQuizeContext)
    let quizes = useLoaderData().data
    let {name,questions} = quizes
    return (
        <div className='min-h-[90vh] bg-white'>
        <h3 className='text-center text-3xl font-semibold py-5 m-auto mb-5 capitalize'>Quize of {name}</h3>
           <div className='md:grid grid-cols-8'>
                <div className='col-span-6'>
                    <div className='px-5 lg:px-10 xl:px-20'>
                        {
                        questions.map(quize=><SingleQuiz quize={quize} key={quize.id}></SingleQuiz>)
                        }
                    </div>
                </div>
            <div className='col-span-2 bg-[#1b8097d6] rounded-lg border-[#ddd]'>
                <div className='sticky top-0 px-5 py-10 font-semibold text-white'>
                    <h3 className='text-center text-2xl mb-5'>Correct Answer : {correctQuize.length}</h3>
                    {
                    correctQuize.map((correct,index)=><h3 key={index} className="text-lg">{index+1+') '} {correct}</h3>)
                    }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Quiz;