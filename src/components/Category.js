import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Category = ({category}) => {

    let {id,logo,name,total} = category
    return (
        <article className="flex flex-col dark:bg-gray-900 border bg-white rounded-lg shadow-md">
				<div aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className=" w-full h-52 bg-gray-300" src={logo} />
				</div>
				<div className="flex flex-col flex-1 py-2 px-4">
					<h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">{name}</h3>
					<div className="flex flex-wrap justify-between space-x-2 dark:text-gray-400">
						<span>Quize : {total}</span>
					</div>
                    <button className='flex  justify-center font-semibold items-center py-3 mt-3 bg-gradient-to-r from-[#598bE4] to-[#39CBDD] w-full text-white '>
                    Start Quize <StarIcon className='w-3 ml-2'></StarIcon>
                    </button>
				</div>
			</article>
    );
};

export default Category;