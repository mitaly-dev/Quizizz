import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import { DataContext } from './Layout/Layout';

const Categories = () => {
    let [categoriesData] = useContext(DataContext)
    return (
       <div className=' bg-[#5AA5B7] min-h-[90vh]'>
         <div className='grid grid-cols-4 gap-6 px-28 py-16'>
           {
            categoriesData.map(category=><Category key={category.id} category={category}></Category>)
           }
        </div>
       </div>
    );
};

export default Categories;