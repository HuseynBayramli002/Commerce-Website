import React from 'react'
import Button from '../components/Button'

const HeartLike = () => {
    return (
        <div className='container  w-[90%] m-auto mt-10'>
            <div className='flex justify-between'>
                <p className='text-xl'>Wishlist ()</p>
                <div className='border'>
                    <Button btnTitle='Move All to Bag' textColor='black' />
                </div>
            </div>
        </div>
    )
}

export default HeartLike