import Lottie from 'lottie-react';
import React from 'react';
import checkList from '../assets/blog.json'

const Blog = () => {
    return (
    <section className="bg-[#5AA5B7] min-h-[90vh] md:grid grid-cols-5">
		<div className="container flex flex-col justify-center p-4 px-7 mx-auto md:p-8 col-span-3">
			<h2 className="mb-5 md:mb-12 text-3xl md:text-4xl font-bold leading-none text-center uppercase">Questions</h2>
			<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-5 outline-none cursor-pointer font-semibold text-xl md:text-2xl">What is the purpose of react router?</summary>
				<div className="px-4 pb-4 font-medium text-lg">
					<p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. and it also gives you tools to update the location using Link and the history API.</p>
				</div>
			</details>
			<details>
				<summary className="py-5 outline-none cursor-pointer font-semibold text-xl md:text-2xl">How does context api works?</summary>
				<div className="px-4 pb-4 font-medium text-lg">
					<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
				</div>
			</details>
			<details>
				<summary className="py-5 outline-none cursor-pointer font-semibold text-xl md:text-2xl">What is useRef?</summary>
				<div className="px-4 pb-4 font-medium text-lg">
					<p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.Essentially, useRef is like a “box” that can hold a mutable value in its current property.</p>
				</div>
			</details>
			</div>
		</div>
		<div className='col-span-2 flex items-center'>
			{<Lottie animationData={checkList} loop={true}/>}
		</div>
	</section>
    );
};

export default Blog;