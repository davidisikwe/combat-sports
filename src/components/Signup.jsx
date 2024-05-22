import React from 'react';

const Signup = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-[32rem] w-[24rem] p-6 border-[.0625rem] rounded-xl flex flex-col'>
        <div>
          <h1 className='text-2xl font-semibold'>Sign Up</h1>
          <p className='text-[#71717A] mt-[.375rem] mb-6'>
            Enter your information to create an account
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='w-full flex justify-between'>
            <div className='flex flex-col'>
              <label
                htmlFor='fName'
                className='text-sm text-[#09090B] font-medium'
              >
                First Name
              </label>
              <input
                className='h-10 w-40 border-[.0625rem] mt-2 px-3 py-2 rounded-[.5rem] text-[#71717A] text-sm'
                type='text'
                id='fName'
                name='fName'
                placeholder='Max'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='lName'
                className='text-sm text-[#09090B] font-medium'
              >
                Last Name
              </label>
              <input
                className='h-10 w-40 border-[.0625rem] mt-2 px-3 py-2 rounded-[.5rem] text-[#71717A] text-sm'
                type='text'
                id='lName'
                name='lName'
                placeholder='Robinson'
                required
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='email'
              className='text-sm text-[#09090B] font-medium'
            >
              Email
            </label>
            <input
              className='h-10 border-[.0625rem] mt-2 px-3 py-2 rounded-[.5rem] text-[#71717A] text-sm'
              type='email'
              id='email'
              name='email'
              placeholder='m@example.com'
              required
            />
          </div>

          <div>
            <div className='flex justify-between'>
              <label
                htmlFor='password'
                className='text-sm text-[#09090B] font-medium'
              >
                Password
              </label>
              <a href='#' className='text-sm text-[#09090B] underline'>
                Forgot your password?
              </a>
            </div>
            <input
              className='h-10 border-[.0625rem] px-3 py-2 w-full mt-2 rounded-[.5rem]'
              type='password'
              id='password'
              name='password'
              required
            />
          </div>
          <button className='border-[.0625rem] h-10 bg-[#18181B] text-white px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium'>
            Login
          </button>
          <button className='border-[.0625rem] h-10 bg-white text-[#09090B] px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium'>
            Login With Google
          </button>
        </div>

        <p className='text-center text-sm mt-4'>
          Don't have an account?{' '}
          <a href='#' className='underline'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
