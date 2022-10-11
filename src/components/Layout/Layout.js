import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

export const DataContext = createContext([])
export const CorrectQuizeContext = createContext(0)

const Layout = () => {
   let {categoriesData} = useLoaderData()
 
    return (
       <DataContext.Provider value={[categoriesData]}>
          <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
       </DataContext.Provider>
    );
};

export default Layout;