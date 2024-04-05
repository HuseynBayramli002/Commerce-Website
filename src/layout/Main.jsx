import React from 'react'
import SliderSwiper from '../common/components/SliderSwiper';
import ToDay from '../common/components/ToDay';
import Categories from '@/common/components/Categories';
import BestSelling from '@/common/components/BestSelling';
import ReklamSection from '@/common/components/ReklamSection';
import OurProducts from '@/common/components/OurProducts';
import NewArrival from '@/common/components/NewArrival';



const Main = () => {
    return (
        <div className='container w-[90%] m-auto'>
            <SliderSwiper />
            <ToDay />
            <Categories />
            <BestSelling />
            <ReklamSection />
            <OurProducts />
            <NewArrival/>
        </div>
    )
}

export default Main
