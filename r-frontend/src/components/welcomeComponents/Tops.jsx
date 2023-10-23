import React from 'react';
import welomeimg from '/welcome-money.png'

export default function Tops() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-sky-200 to-white pt-10'>
            <div className='flex flex-col text-center gap-2'>
                <h1 className='font-bold text-3xl'>The perfect place to</h1>
                <h1 className='font-bold text-3xl text-[#3A89A0]'>Track Your Finance</h1>
            </div>

            <div className='flex items-center justify-center mr-[4rem]'>
              <img src={welomeimg} className='w-[30rem]'></img>
            </div>

            <div className='flex flex-col text-center'>
              <p>{`It's`} a wonderful thing if we can set aside some of our money to</p>
              <p>achieve what we want.</p>
            </div>

            <div className='flex bg-[#2D4D5D] rounded-xl h-[3.5rem] w-[5rem] align-middle items-center justify-center'>
              <button className=' text-white '>
                Join Us
              </button>
            </div>
        </div>
    );
}
