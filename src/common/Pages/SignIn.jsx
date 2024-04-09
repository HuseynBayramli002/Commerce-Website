import React from 'react'
import Basketphone from '../../assets/Basketphone.png'
import Button from '../components/Button'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
const SignIn = () => {
    return (
        <div className='flex mt-14 w-full justify-between gap-20 pr-24'>
            <div>
                <img src={Basketphone} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-4xl font-medium'>Create an account</p>
                <p className='mt-6'>Enter your details below </p>
                <input type="text" placeholder='Email or Phone Number' className='border-b-[1px] outline-none mt-8 py-2' />
                <input type="text" placeholder='Password' className='border-b-[1px] outline-none mt-8 py-2' />
                <div className='mt-10'>
                    <Button buttonTitle="Create Account" color='#DC2626' fontSize='16px' fontWeight='500'/>
                </div>
            </div>
        </div>
    )
}

export default SignIn