import React from 'react';


export default function login() {
    return(
        <>
            <div className='container-sm mx-auto max-w-screen-md flex justify-center'>
                <div className='flex w-3/5'>
                 <img src='/food.jpeg' alt='Food shot' className='mt-2 w-6/12 mb-4'/>
                </div>
                <div className='flex flex-col w-2/5'>
                <h1 className='flex justify-center w-full'>
                    <img src='instagram-logo.png' alt='Instagram Logo' className='mt-2 w-6/12 mb-4' />
                </h1>
                    <form method='POST'>
                    <input
                        aria-label='Enter your email address'
                        className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
                        type='text'
                        placeholder='Email address'
                    />
                    <input
                        aria-label='Enter your email password'
                        className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
                        type='password'
                        placeholder='Password'
                    />
                    <button 
                    type='submit'
                    className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
                    >
                        Log In
                    </button>
                    </form>
                </div>
            </div>
        </>
    )
}