import { IoIosArrowRoundForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Iphoneimg from '../../assets/Iphone.png'


export const HeroSlider = () => {
    return (
        <div className=' bg-black flex justify-between md:pl-8 lg:pl-16'>
            <div className=''>
                <div className='flex justify-start items-end mt-14 md:gap-4 lg:gap-7 '>
                    <FaApple className='text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' />
                    <p className='text-white whitespace-nowrap md:text-sm lg:text-base'>iPhone 14 Series </p>
                </div>
                <p className='text-white whitespace-nowrap tracking-wider leading-15 font-bold text-start my-5 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Up to 10%  <br /> off Voucher</p>
                <div className=' flex items-center pb-10'>
                    <div className=''>
                        <NavLink to={'/'} className='text-white  font-bold border-b ml-0 mr-auto border-white '>Shop Now</NavLink>
                    </div>
                    <IoIosArrowRoundForward className='text-white text-2xl' />
                </div>
            </div>
            <div className='flex justify-center items-center md:m-5 lg:m-10'><img src={Iphoneimg} /></div>

        </div>
    )
}