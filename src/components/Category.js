import { ArrowRightIcon} from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    let {id,logo,name,total} = category
    let navigate = useNavigate()
    const startQuize=()=>{
        navigate(`/quize/${id}`)
    }
    return (
        <article className="flex flex-col dark:bg-gray-900 border bg-white rounded-lg shadow-md mb-5">
				<div className='p-2'>
					<img alt="" className=" w-full h-52 bg-gray-300 rounded-lg object-cover" src={logo} />
				</div>
				<div className="flex flex-col flex-1 pb-2 px-4">
					<h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">{name}</h3>
					<span className='text-gray-500'>Quiz : {total}</span>
                    <button onClick={startQuize} className='flex rounded-lg justify-center font-semibold items-center py-3 mt-3 bg-gradient-to-r from-[#598bE4] to-[#39CBDD] w-full text-white '>
                    Start Quize <ArrowRightIcon className='w-4 ml-2'></ArrowRightIcon>
                    </button>
				</div>
		</article>
    );
};

export default Category;