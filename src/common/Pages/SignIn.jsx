import React from 'react'
import Basketphone from '../../assets/Basketphone.png'
import Button from '../components/Button'
const SignIn = () => {
    
    return (
        <div className='flex mt-14 w-full justify-between gap-20 pr-24'>
            <div>
                <img className='select-none' src={Basketphone} alt="" />
            </div>
            <form className='flex flex-col justify-center'>
                <p className='text-4xl font-medium'>Log in to Exclusive</p>
                <p className='mt-6'>Enter your details below</p>
                <input type="text" placeholder='Email or Phone Number' className='border-b-[1px] outline-none mt-8 py-2' />
                <input type="text" placeholder='Password' className='border-b-[1px] outline-none mt-8 py-2' />
                <div className='mt-10 flex justify-between items-center'>
                    <Button buttonTitle="Log in" color='#DC2626' fontSize='16px' fontWeight='500'/>
                    <p className='text-red-600'>Forget Password?</p>
                </div>
            </form>
        </div>
    )
}

export default SignIn