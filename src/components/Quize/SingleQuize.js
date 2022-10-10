import React from 'react';
import Option from './Option';

const SingleQuize = ({quize}) => {
    let {correctAnswer,options,question} =quize
    return (
        <div className='w-10/12 lg:w-10/12 xl:w-8/12 m-auto mb-10 bg-[#438d9f] text-white p-10 rounded-lg shadow-lg'>
           <h3 className='text-2xl font-semibold mb-5'>{question}</h3>
           <div className='md:grid grid-cols-2 gap-2 gap-x-4'>
            {
                options.map(option=><Option key={option.id} option={option}></Option>)
            }
           </div>
        </div>
    );
};

export default SingleQuize;