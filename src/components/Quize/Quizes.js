import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from './SingleQuize';

const Quizes = () => {
    let quizes = useLoaderData().data
    let {name,questions} = quizes
   
    // let {total,name,logo,questions} = quizes.questions
    console.log(quizes)
    return (
        <div className='min-h-[90vh] bg-[#5AA5B7]'>
            <h3 className='text-center text-3xl font-semibold py-5 w-10/12 m-auto mb-5 border-b-2'>Quize of {name}</h3>
            <div className=''>
                {
                   questions.map(quize=><SingleQuize quize={quize} key={quize.id}></SingleQuize>)
                }
            </div>
        </div>
    );
};

export default Quizes;