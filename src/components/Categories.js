import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    let categories = useLoaderData().data
    console.log(categories)
    return (
        <div>
            <h3>this is cagegory</h3>
        </div>
    );
};

export default Categories;