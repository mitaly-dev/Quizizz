import React from 'react';
import Categories from './Categories';
import Header from './Header';

const Home = () => {
    return (
        <div className='bg-[#5AA5B7] min-h-[90vh]'>
            <Header></Header>
          <Categories></Categories>
        </div>
    );
};

export default Home;