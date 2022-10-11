import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import quiz from '../assets/quiz.json'

const Header = () => {
    return (
        <div className="md:grid grid-cols-2 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <Link to="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gPX4Fe6kRnA9cwgkoZI8s-YZRa_YU6nVdFVRchxFJA&s" alt="" />
              </div>
            </Link >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl lg:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{' '}
                Are You Ready ?
              </h2>
              <p className="text-base text-gray-700 md:text-lg capitalize">
                A modern education and learning management system
              </p>
            </div>
            <div>
              <Link
                to="/category"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide border text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-[#a4c6d9] hover:text-black"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div>
        {<Lottie animationData={quiz} loop={true}/>}
        </div>
      </div>
    );
};

export default Header;