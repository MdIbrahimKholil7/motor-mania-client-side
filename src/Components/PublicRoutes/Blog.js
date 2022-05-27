import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font font-bold mt-12 mb-5 text-3xl'>All Questions</h1>
            <div>
                <div className='md:w-[70%] w-[90%] mx-auto border-solid border-2 border-gray-600 md:px-3 px-7 py-5 rounded-xl my-9'>
                    <h1 className='font font-bold text-2xl text-center mb-3'>How will you improve the performance of a React Application?</h1>
                    <div>
                        <article className='text-[17px] mt-4 font-[500]'>
                            Whenever we creates a render component.React creates a virtual dom tree for the component.And whenever change the ui.React compare the virtual dom to the previous one.React doesn't change the all element.Its change those particular element when the state is change.
                        </article>
                        <div>
                            <h2 className='my-3 p-0 text-2xl font font-bold'>Some tips for Optimizing performance in a React application</h2>
                            <ol className='list-decimal px-3'>
                                <li>Lazy loading images in React</li>
                                <li>Code-splitting in React using dynamic import</li>
                                <li>Memoizing React components to prevent unnecessary re-renders</li>
                                <li>Keeping component state local where necessary</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div className='md:w-[70%] w-[90%] mx-auto border-solid border-2 border-gray-600 md:px-3 px-7 py-5 rounded-xl my-9'>
                    <h1 className='font font-bold text-2xl text-center mb-3'> What are the different ways to manage a state in a React application?</h1>
                    <div>
                        <h2 className='my-3 p-0 text-2xl font font-bold'>There are four main type of state for manage a state in react application</h2>
                        <ol className='list-decimal px-3'>
                            <li>Server state.</li>
                            <li>URL state.</li>
                            <li>Local state.</li>
                            <li>Global state.</li>
                        </ol>
                    </div>
                </div>
                <div className='md:w-[70%] w-[90%] mx-auto border-solid border-2 border-gray-600 md:px-3 px-7 py-5 rounded-xl my-9'>
                    <h1 className='font font-bold text-2xl text-center mb-3'> How does prototypical inheritance work?</h1>
                    <div>
                        <article className='text-[17px] mt-4 font-[500]'>
                            Whenever a function is created in javascript.The Javascript engine adds a prototype to the function.The prototypical inheritance in javascript is used to add methods and properties in javascript.In javascript child inheritance their parent properties.
                        </article>
                    </div>
                </div>

                <div className='md:w-[70%] w-[90%] mx-auto border-solid border-2 border-gray-600 md:px-3 px-7 py-5 rounded-xl my-9'>
                    <h1 className='font font-bold text-2xl text-center mb-3'> Why do not set the state directly in React.</h1>
                    <article className='text-[17px] mt-4 font-[500]'>
                        <p className='text-xl text-black my-2 font font-bold'>
                            One should never update the state directly because of the following reasons:
                        </p>
                        If you update it directly, calling the setState afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.
                    </article>
                </div>

                <div className='md:w-[70%] w-[90%] mx-auto border-solid border-2 border-gray-600 md:px-3 px-7 py-5 rounded-xl my-9'>
                    <h1 className='font font-bold text-2xl text-center mb-3'> What is a unit test? Why should write unit tests?</h1>
                    <div>
                        <article>
                            <strong>Unit Taste : </strong>A unit taste is a software development process in which the smallest testable parts of a application.Unit testing ensure that the all code meets quality standards before its deploy.Unit testing saves time and money, and helps developers write better code, more efficiently.
                        </article>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;