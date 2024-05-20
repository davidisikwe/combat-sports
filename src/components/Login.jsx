import React from 'react';
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-[30.75rem] w-[23.875rem] p-6 border-2 rounded flex flex-col'>
        <div>
          <h1 className='text-2xl'>Sign Up</h1>
          <p>Enter your email below to login your account</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            className='h-10 border-2 px-3 py-2'
            type='email'
            id='email'
            name='email'
            placeholder='m@example.com'
            required
          />
        </div>

        <div>
          <div className='flex space-x-24'>
            <label htmlFor='password'>Password</label>
            <a href=''>Forgot your password?</a>
          </div>
          <input
            className='h-10 border-2 px-3 py-2 w-full'
            type='password'
            id='password'
            name='password'
          />
        </div>
        <button className='border-2 h-[2.5rem] bg-[#18181B] text-white px-[1rem] py-[.5rem]'>
          Login
        </button>
        <button className='border-2 h-[2.5rem] bg-white text-[#09090B] px-[1rem] py-[.5rem]'>
          Login With Google
        </button>
        <p className='text-center'>
          Don't have an account? <a href=''>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
