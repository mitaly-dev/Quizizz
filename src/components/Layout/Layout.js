import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import getAllData from '../../Utils/getApiData';
import Navbar from '../Navbar';

export const DataContext = createContext([])
export const CorrectQuizeContext = createContext(0)

const Layout = () => {
   let [correctQuize,setCorrectQuize] = useState([])
   let {categoriesData} = useLoaderData()
 
    return (
       <DataContext.Provider value={[categoriesData]}>
          <CorrectQuizeContext.Provider value={[correctQuize,setCorrectQuize]}>
            <Navbar></Navbar>
            <Outlet></Outlet>
          </CorrectQuizeContext.Provider>
       </DataContext.Provider>
    );
};

export default Layout;