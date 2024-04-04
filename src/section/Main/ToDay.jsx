import React, { useState, useEffect } from 'react';
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Products from './Products';
import Button from './Button';
import { useTimer } from './Timer';


const ToDay = () => {
    const saletimer = useTimer(950400);
    const [dataCount, setDataCount] = useState(1);
    const increaseData = () => {
        setDataCount(dataCount + 1);
    }
    return (
        <div className=' sm:mt-12 md:mt-24 lg:mt-32'>
            <div className='flex gap-4 mb-6 items-center'>
                <div className='w-5 h-8 bg-red-600 rounded-sm'></div>
                <h3 className='text-2xl text-red-600 font-semibold'>Today’s </h3>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-28 items-end'>
                        <p className='text-4xl font-bold'>Flash Sales</p>
                        <div className='flex gap-2 items-end font-bold text-red-600 text-3xl'>
                            <span className='flex flex-col text-black justify-center'>
                                <span className='font-medium text-sm'>Days</span>
                                {saletimer.days}
                            </span>:
                            <span className='flex flex-col text-black justify-center'>
                                <span className='font-medium text-sm'>Hours</span>
                                {saletimer.hours}
                            </span>:
                            <span className='flex flex-col text-black justify-center'>
                                <span className='font-medium text-sm'>Minutes</span>
                                {saletimer.minutes}
                            </span>:
                            <span className='flex flex-col text-black justify-center'>
                                <span className='font-medium text-sm'>Seconds</span>
                                {saletimer.seconds}
                            </span>

                        </div>
                </div>
            </div>
            <Products percentage={0.7} pageCount={dataCount}   />
            <div className=' py-14 border-b-2 border-gray-300 flex justify-center'>
                <Button buttonTitle="View All Products" color="#DC2626" increaseData={increaseData} />
            </div>
        </div>
    );
};


export default ToDay;
