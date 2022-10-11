import React from 'react';
import { useContext } from 'react';
import { DataContext } from './Layout/Layout';
import { } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    let [categoriesData] = useContext(DataContext)
   let data = categoriesData
    
    return (
        
       <div className='bg-[#5AA5B7] min-h-[90vh flex justify-center'>
           <BarChart
          width={600}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="black" background={{ fill: 'white' }} />
        </BarChart>
       </div>
    );
};

export default Statistics;