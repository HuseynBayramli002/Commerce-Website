import React from 'react'
import SliderSwiper from '../section/Main/SliderSwiper';
import ToDay from '../section/Main/ToDay';
import Categories from '@/section/Main/Categories';
import BestSelling from '@/section/Main/BestSelling';
import ReklamSection from '@/section/Main/ReklamSection';
import OurProducts from '@/section/Main/OurProducts';



const Main = () => {
    return (
        <div className='container w-[90%] m-auto'>
            <SliderSwiper />
            <ToDay />
            <Categories />
            <BestSelling />
            <ReklamSection />
            <OurProducts />
        </div>
    )
}

export default Main
