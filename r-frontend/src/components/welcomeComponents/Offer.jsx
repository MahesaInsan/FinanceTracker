import React from 'react';
import AI from '/AI.png';
import history from '/History.png';
import visualize from '/Visualize.png';

export default function Offer() {
    return (
        <div className='flex flex-col bg-gradient-to-b from-white to-sky-200 pt-20 text-center pb-40 items-center justify-center gap-20'>
            <div className='flex flex-col gap-4 justify-center items-center align-middle'>
                <span className='text-4xl font-bold'>
                    What do we{' '}
                    <span className='text-[#3A89A0]'>
                        offer you?
                    </span>
                </span>
                <p>Our products are ready to serve you</p>
            </div>

            <div className='flex flex-row gap-20'>
                <div className='flex flex-col justify-center items-center align-middle border-2 border-[#2D4D5D] px-8 py-8 rounded-lg w-[20rem] h-[15rem]'>
                    <div className='flex rounded-full bg-[#8CC7D4] w-[4rem] h-[4rem] items-center justify-center align-middle'>
                        <img src={AI} alt='gambar AI' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='pt-2 font-bold'>AI</h1>
                        <p className='pt-2'>There is an AI that help you</p>
                        <p>achive your goals</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center align-middle border-2 border-[#2D4D5D] px-8 py-8 rounded-lg w-[20rem] mt-[10rem] h-[15rem]'>
                    <div className='flex rounded-full bg-[#8CC7D4] w-[4rem] h-[4rem] items-center justify-center align-middle'>
                        <img src={history} alt='gambar AI' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='pt-2 font-bold'>History</h1>
                        <p className='pt-2'>
                            View all the transactions {`you've`}
                        </p>
                        <p>made and provide some advices</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center align-middle border-2 border-[#2D4D5D] px-8 py-8 rounded-lg w-[20rem] h-[15rem]'>
                    <div className='flex rounded-full bg-[#8CC7D4] w-[4rem] h-[4rem] items-center justify-center align-middle'>
                        <img src={visualize} alt='gambar AI' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='pt-2 font-bold'>Visualize</h1>
                        <p className='pt-2'>Visualizations to track your</p>
                        <p>income and expenses</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
