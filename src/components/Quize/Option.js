import React from 'react';

const Option = ({option}) => {
    return (
        <button className='mb-3 w-full border rounded-lg py-5 text-white text-left px-10 bg-[#ffffff4a] hover:bg-[#1b8097d6] hover:text-white'>
            <h3 className='font-medium text-lg'>{option}</h3>
        </button>
    );
};

export default Option;