import React from 'react'
import Products from './Products'
import Button from './Button'
import { useState } from 'react'
import Title from './Title'

const OurProducts = () => {
    const [dataCount, setDataCount] = useState(1)
    const increaseData = () => {
        setDataCount(dataCount + 1)
    }
    return (
        <div className='sm:mt-12 md:mt-24 lg:mt-32'>
            <Title sectionTitle="Our Products" sectionInfo="Explore Our Products" />
            <Products percentage={1} pageCount={2 * dataCount} />
            <div className=' py-14 border-b-2 border-gray-300 flex justify-center'>
                <Button buttonTitle="View All Products" color="#DC2626" increaseData={increaseData} />
            </div>
        </div>
    )
}

export default OurProducts