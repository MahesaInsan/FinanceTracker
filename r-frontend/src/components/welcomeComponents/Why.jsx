import React from 'react';

export default function Why() {
    return (
        <div className='flex pt-40 flex-row gap-24 align-middle justify-center pb-32'>
            <div className='flex items-center'>
                <div className='flex bg-[#3A89A0] my-24 h-1 w-20 rounded-full'></div>
            </div>

            <div className='flex flex-col justify-center align-middle'>
                <h1 className='text-5xl font-bold'>Why should you</h1>
                <h1 className='pt-4 pb-2 text-4xl font-bold text-[#3A89A0]'>
                    Choose Us?
                </h1>
                <p className=''>Understand your reasons for joining us</p>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-row gap-20'>
                    <div className='flex flex-col h-[14rem] w-[18rem] border-r border-b gap-4 pb-6 pt-8 pl-8 pr-6 shadow-lg'>
                        <h1 className='text-bold text-xl'>Tracker</h1>
                        <p>
                            The financial tracker can help you create a budget,
                            track your expenses and income, organize your bills
                            and debts, and view financial reports visually.
                        </p>
                    </div>

                    <div className='flex flex-col h-[14rem] w-[18rem] border-r border-b gap-4 pb-6 pt-8 pl-8 pr-6 shadow-lg'>
                        <h1 className='text-bold text-xl'>Goal</h1>
                        <p>
                            Financial trackers can also help you achieve your
                            financial goals, such as saving, investing, or
                            buying things you want.
                        </p>
                    </div>
                </div>

                <div className='flex flex-row gap-20'>
                    <div className='flex flex-col h-[14rem] w-[18rem] border-r border-b gap-4 pb-6 pt-8 pl-8 pr-6 shadow-lg'>
                        <h1 className='text-bold text-xl'>Finance Problem</h1>
                        <p>
                            Financial trackers can also help you avoid financial
                            problems, such as debt, late payments, or lack of
                            funds.
                        </p>
                    </div>

                    <div className='flex flex-col h-[14rem] w-[18rem] border-r border-b gap-4 pb-6 pt-8 pl-8 pr-6 shadow-lg'>
                        <h1 className='text-bold text-xl'>Explore More</h1>
                        <p>
                            Financial trackers can also help you learn about
                            financial literacy and improve your financial
                            skills.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center'>
                <div className='flex bg-[#3A89A0] my-24 h-1 w-20 rounded-full'></div>
            </div>
        </div>
    );
}
