import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import Qr from "../../src/assets/GooplePlayQR.png"
import { NavLink } from 'react-router-dom';
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
    return (
        <div className=' bg-black text-white '>
            <div className='flex justify-evenly px-20 pt-20 mt-36 pb-10 border-b-[1px] border-gray-700'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold  text-2xl pb-2'>Exclusive</h2>
                    <h3 className='font-medium text-xl text-gray-400'>Subscribe</h3>
                    <p className='text-gray-400'>Get 10% off your first order</p>
                    <div className='flex justify-between items-center border-[1px] rounded-sm max-w-56 px-3 py-1'>
                        <input type="text" placeholder='Enter your email' className='bg-black text-white border-none outline-none placeholder:text-gray-600' /> <IoSendSharp />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-2xl pb-2'>Support</h2>
                    <p className='text-gray-400'>Baku city, Khatai district, Ahmadli street </p>
                    <p className='text-gray-400'>huseynbayramli002@gmail.com</p>
                    <p className='text-gray-400'>+994 51 757 69 31</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-2xl pb-2'>Account</h2>
                    <p className='text-gray-400'>My Account</p>
                    <p className='text-gray-400'>Login / Register</p>
                    <p className='text-gray-400'>Cart</p>
                    <p className='text-gray-400'>Wishlist</p>
                    <p className='text-gray-400'>Shop</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-2xl pb-2'>Quick Link</h2>
                    <p className='text-gray-400'>Privacy Policy</p>
                    <p className='text-gray-400'>Terms Of Use</p>
                    <p className='text-gray-400'>FAQ</p>
                    <p className='text-gray-400'>Contact</p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>Download App</h2>
                    <p className='text-xs text-gray-400 pt-6 pb-3'>Save $3 with App New User Only</p>
                    <img src={Qr} alt="" />
                    <div className='flex gap-5 pt-6'>
                        <NavLink to={'/'}><RiFacebookLine className='h-8 w-8' /></NavLink>
                        <NavLink to={'/'}><RiTwitterLine className='h-8 w-8' /></NavLink>
                        <NavLink to={'/'}><RiInstagramLine className='h-8 w-8' /></NavLink>
                        <NavLink to={'/'}><RiLinkedinLine className='h-8 w-8' /></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center p-3 text-gray-500'>&copy; 2024, Hüseyn Bayramlı. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer