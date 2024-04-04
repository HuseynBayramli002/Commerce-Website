import React from 'react'
import SliderSwiper from '../common/components/SliderSwiper';
import ToDay from '../common/components/ToDay';
import Categories from '@/common/components/Categories';
import BestSelling from '@/common/components/BestSelling';
import ReklamSection from '@/common/components/ReklamSection';
import OurProducts from '@/common/components/OurProducts';



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
