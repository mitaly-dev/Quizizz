import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import getAllData from '../../Utils/getApiData';
import Navbar from '../Navbar';

export const DataContext = createContext([])

const Layout = () => {
   let {categoriesData} = useLoaderData()
 
    return (
       <DataContext.Provider value={[categoriesData]}>
           <Navbar></Navbar>
            <Outlet></Outlet>
       </DataContext.Provider>
    );
};

export default Layout;