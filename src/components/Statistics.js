import React from 'react';
import { useContext } from 'react';
import { DataContext } from './Layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    let [categoriesData] = useContext(DataContext)
   let data = categoriesData
    
    return (
       <div className='bg-[#5AA5B7] min-h-[90vh] w-full py-3 sm:py-10'>
         <h3 className='font-bold text-3xl md:text-4xl lg:mb-14 w-10/12 sm:w-7/12 xl:w-4/12 m-auto text-center uppercase pb-6 lg:pb-0'>Quiz Chart</h3>
        <div className='w-full md:w-2/4 h-[400px] m-auto'>
        <ResponsiveContainer width="100%" height="100%">
           <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 5,
          }}
          barSize={50}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 28, right: 10 }}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="black" background={{ fill: 'white' }} />
        </BarChart>
        </ResponsiveContainer>
        </div>
       </div>
    );
};

export default Statistics;