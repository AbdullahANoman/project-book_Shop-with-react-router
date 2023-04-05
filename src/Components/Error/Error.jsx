import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error.error.message)
    const message = error.error.message
    return (
        <>
        <div className='flex justify-center items-end h-[50vh]'>
            <p className='text-5xl mt-3'>ERR</p>
            <div className='w-10 h-10 border-8 border-dotted rounded-full animate-spin mt-5 border-blue-400'></div>
            <p className='text-5xl mt-3'>R</p>
        </div>
        <div className='flex  justify-center mt-5 text-center'>
            <p className='text-4xl font-semibold'>{message}</p>
        </div>
        <div className='text-center'>
        <Link to='/' className=' btn mt-5'>
             Back to homepage
        </Link>
        </div>
       
       
        </>
    );
};

export default Error;