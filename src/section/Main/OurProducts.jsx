import React from 'react'
import Products from './Products'
import Button from './Button'
import { useState } from 'react'

const OurProducts = () => {
    const [dataCount, setDataCount] = useState(1)
    const increaseData=()=>{
        setDataCount(dataCount+1)
    }
    return (
            <div className='sm:mt-12 md:mt-24 lg:mt-32'>
                <div>
                    <div className='flex gap-4 mb-6 items-center'>
                        <div className='w-5 h-8 bg-red-600 rounded-sm'></div>
                        <h3 className='text-2xl text-red-600 font-semibold'>Our Products </h3>
                    </div>
                    <p className='text-4xl font-bold'>Explore Our Products</p>
                </div>
                <Products percentage={1} pageCount={2*dataCount}  />
                <div className=' py-14 border-b-2 border-gray-300 flex justify-center'>
                <Button buttonTitle="View All Products" color="#DC2626" increaseData={increaseData}/>
                </div>
            </div>
    )
}

export default OurProducts