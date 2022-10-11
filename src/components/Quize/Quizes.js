import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CorrectQuizeContext } from '../Layout/Layout';
import SingleQuize from './SingleQuize';

const Quizes = () => {
    const [correctQuize,setCorrectQuize] = useContext(CorrectQuizeContext)
    console.log(correctQuize)
    let quizes = useLoaderData().data
    let {name,questions} = quizes
   
    return (
        <div className='min-h-[90vh] bg-white'>
           <div className='grid grid-cols-8'>
           <div className='col-span-6'>
                <h3 className='text-center text-3xl font-semibold py-5 m-auto mb-5 capitalize'>Quize of {name}</h3>
                <div className='px-20'>
                    {
                    questions.map(quize=><SingleQuize quize={quize} key={quize.id}></SingleQuize>)
                    }
                </div>
            </div>
            <div className='col-span-2 bg-[#b1e7f5]'>
             {
                correctQuize.map((correct,index)=><h3>{index+1+')'}{correct}</h3>)
             }
            </div>
           </div>
        </div>
    );
};

export default Quizes;