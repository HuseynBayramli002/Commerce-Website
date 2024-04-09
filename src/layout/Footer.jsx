import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import Qr from "../../src/assets/GooplePlayQR.png"
import { NavLink } from 'react-router-dom';
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
    return (
        <div className=' bg-black text-white '>
            <div className='flex justify-evenly px-20 pt-10 mt-36 pb-5 border-b-[1px] border-gray-700'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold  text-2xl pb-2'>Exclusive</h2>
                    <h3 className='font-medium text-xl text-gray-400 '>Subscribe</h3>
                    <p className='text-gray-400 text-sm'>Get 10% off your first order</p>
                    <div className='flex justify-between items-center border-[1px] rounded-sm max-w-56 px-3 py-1'>
                        <input type="text" placeholder='Enter your email' className='bg-black text-white border-none text-sm outline-none placeholder:text-gray-600' /> <IoSendSharp />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl pb-2'>Support</h2>
                    <p className='text-gray-400 text-xs'>Baku city, Khatai district, Ahmadli street </p>
                    <p className='text-gray-400 text-xs'>huseynbayramli002@gmail.com</p>
                    <p className='text-gray-400 text-xs'>+994 51 757 69 31</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl pb-2'>Account</h2>
                    <p className='text-gray-400 text-xs'>My Account</p>
                    <p className='text-gray-400 text-xs'>Login / Register</p>
                    <p className='text-gray-400 text-xs'>Cart</p>
                    <p className='text-gray-400 text-xs'>Wishlist</p>
                    <p className='text-gray-400 text-xs'>Shop</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl pb-2'>Quick Link</h2>
                    <p className='text-gray-400 text-xs'>Privacy Policy</p>
                    <p className='text-gray-400 text-xs'>Terms Of Use</p>
                    <p className='text-gray-400 text-xs'>FAQ</p>
                    <p className='text-gray-400 text-xs'>Contact</p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>Download App</h2>
                    <p className='text-gray-400 text-xs pt-2 pb-2'>Save $3 with App New User Only</p>
                    <div className='w-32'>
                    <img src={Qr} alt="" /> 
                    </div>
                    <div className='flex gap-3 pt-4'>
                        <NavLink to={'/'}><RiFacebookLine className='h-6 w-6' /></NavLink>
                        <NavLink to={'/'}><RiTwitterLine className='h-6 w-6' /></NavLink>
                        <NavLink to={'/'}><RiInstagramLine className='h-6 w-6' /></NavLink>
                        <NavLink to={'/'}><RiLinkedinLine className='h-6 w-6' /></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center p-1    text-gray-500'>&copy; 2024, Hüseyn Bayramlı. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer