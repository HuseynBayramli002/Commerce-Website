import React from 'react'
import Hero from '@/common/components/Hero';
import ToDay from '../common/components/ToDay';
import Categories from '@/common/components/Categories';
import BestSelling from '@/common/components/BestSelling';
import ReklamSection from '@/common/components/ReklamSection';
import OurProducts from '@/common/components/OurProducts';
import NewArrival from '@/common/components/NewArrival';
import ServiceInfo from '@/common/components/ServiceInfo';



const Main = () => {
    return (
        <div className='container w-[90%] m-auto'>
            <Hero />
            <ToDay />
            <Categories />
            <BestSelling />
            <ReklamSection />
            <OurProducts />
            <NewArrival/>
            <ServiceInfo/>
        </div>
    )
}

export default Main
