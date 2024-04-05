import React, { useState } from 'react';
import { MdPhoneIphone, MdComputer } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import Title from './Title';

const categoryData = [
    { icon: MdPhoneIphone, text: 'Phones' },
    { icon: MdComputer, text: 'Computers' },
    { icon: BsWatch, text: 'SmartWatches' }, 
    { icon: IoCameraOutline, text: 'Camera' }, 
    { icon: CiHeadphones, text: 'Headphone' }, 
    { icon: IoGameControllerOutline, text: 'Gaming' } 
];

const Categories = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        if (index === clickedIndex) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    return (
        <div className='sm:mt-12 md:mt-24 lg:mt-32 border-b-2 border-gray-300 '>
            <Title sectionTitle="Categories" sectionInfo="Browse By Category"/>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14  pb-14 border-b-gray-500'>
                {categoryData.map((category, index) => (
                    <div 
                        key={index} 
                        className={`border w-36 h-36 flex flex-col items-center justify-center border-gray-400 ${index === clickedIndex ? 'text-white bg-red-600 border-red-600' : ''}`} 
                        onClick={() => handleClick(index)}
                    >
                        <category.icon className='text-5xl font-thin' />
                        <span className='text-center'>{category.text}</span>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Categories;
