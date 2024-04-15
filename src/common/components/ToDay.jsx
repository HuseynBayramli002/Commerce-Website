import React, { useState, useEffect } from 'react';
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Products from './Products';
import Button from './Button';
import { useTimer } from './Timer';
import Title from './Title';


const ToDay = () => {
    const saletimer = useTimer(950400);
    const [dataCount, setDataCount] = useState(1);
    const increaseData = () => {
        setDataCount(dataCount + 1);
    }
    const data = [
        {
            id: 1,
            date: saletimer.days,
            time: 'Days'
        },
        {
            id: 2,
            date: saletimer.hours,
            time: 'Hours'
        },
        {
            id: 3,
            date: saletimer.minutes
            , time: 'Minutes'
        },
        {
            id: 4,
            date: saletimer.seconds,
            time: 'Seconds'
        },
    ]
    return (
        <div className=' sm:mt-12 md:mt-24 lg:mt-32'>
            <div className='flex  items-end gap-24'>
                <Title sectionTitle="Today’s" sectionInfo="Flash Sales"/>
                <div className='flex gap-2 items-end font-bold text-red-500 text-3xl'>
                    {data.map((item) => (
                        <span className='flex flex-col text-black justify-center' key={item.id}>
                            <span className='font-medium text-sm' >{item.time}</span>
                            {item.date}

                        </span>
                    ))}
                </div>
            </div>
            <Products percentage={0.7} pageCount={dataCount} />
            <div className=' py-14 border-b-2 border-gray-300 flex justify-center'>
                <Button btnTitle="View All Products" color="#DC2626" btnFunk={increaseData} />
            </div>
        </div>
    );
};


export default ToDay;
