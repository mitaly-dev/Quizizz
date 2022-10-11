import React from 'react';
import { useContext } from 'react';
import { DataContext } from './Layout/Layout';

const Statistics = () => {
    let data = useContext(DataContext)
    console.log(data)
    return (
        <div>
            <h3>this is statistics</h3>
        </div>
    );
};

export default Statistics;