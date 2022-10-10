import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import { DataContext } from './Layout/Layout';

const Categories = () => {
    let [categoriesData] = useContext(DataContext)
    return (
       <div className=' bg-[#5AA5B7] min-h-[90vh] py-16 px-5 md:12 lg:px-28'>
        <h3 className='font-bold text-3xl pb-5 border-b-2 mb-7 lg:mb-14 border-white w-10/12 sm:w-7/12 xl:w-4/12 m-auto text-center uppercase'>Categories</h3>
         <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6  '>
           {
            categoriesData.map(category=><Category key={category.id} category={category}></Category>)
           }
        </div>
       </div>
    );
};

export default Categories;