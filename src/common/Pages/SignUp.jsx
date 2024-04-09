import React from 'react'
import Basketphone from '../../assets/Basketphone.png'
import Button from '../components/Button'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='flex gap-20 mt-14'>
            <div>
                <img src={Basketphone} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-4xl font-medium'>Create an account</p>
                <p className='mt-6'>Enter your details below </p>
                <input type="text" placeholder='Name' className='border-b-[1px] outline-none mt-8 py-2' />
                <input type="text" placeholder='Email or Phone Number' className='border-b-[1px] outline-none mt-8 py-2' />
                <input type="text" placeholder='Password' className='border-b-[1px] outline-none mt-8 py-2' />
                <div className='mt-10'>
                    <Button buttonTitle="Create Account" color='#DC2626' fontSize='16px' fontWeight='500'/>
                </div>
                <div className='mt-4 border-[1px] rounded-sm'>
                    <Button buttonTitle='Sign up with Google' buttonIcon={<FcGoogle />} textColor='#000000' fontSize='16px' fontWeight='400'/>
                </div>
                    <p className='mt-8 text-center'>Already have account? <NavLink to={'/login'} className={'p-[4px] border-b-[1px]'}>Login</NavLink></p>
            </div>
        </div>
    )
}

export default SignUp