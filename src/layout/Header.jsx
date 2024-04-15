import { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import { BsPerson, BsBasket3, BsStar } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Header = () => {
    const data = [
        {
            id: 1,
            name: 'Home',
            url: '/'
        },
        {
            id: 2,
            name: 'About',
            url: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            url: '/contact'
        },
        {
            id: 4,
            name: 'Sign up',
            url: '/signup'
        },
    ]
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
    };
    const [clicked, setClicked] = useState(false);

    const toggleDiv = () => {
        setClicked(!clicked);
    };
    return (
        <header className='border-b border-gray-500 select-none'>
            <div className='flex items-center justify-between container w-[90%] m-auto mt-10 pb-4 '>
                <h1 className='font-bold  md:text-xl lg:text-2xl'>Exclusive</h1>
                <ul className='flex md:gap-3 lg:gap-[3rem]'>
                    {data.map(item => (
                        item.name && (
                            <li key={item.id} className='md:text-sm lg:text-base'>
                                <NavLink to={item.url} className={({ isActive }) => isActive ? 'border-b border-gray-500' : ''} >{item.name}</NavLink>
                            </li>
                        )
                    ))}
                </ul>
                <div className='flex md:gap-4 lg:gap-7'>
                    <div className='flex items-center bg-gray-100 py-2 px-3 rounded-2xl md:w-48 lg:w-60'>
                        <input type="text" className='bg-gray-100 border-none outline-none placeholder:text-gray-500 md:w-36 md:placeholder:text-xs lg:w-52 lg:placeholder:text-sm' placeholder='What are you looking for?' ref={ref} />
                        <CiSearch className='md:text-xl lg:text-2xl' onClick={handleClick} />
                    </div>
                    <div className='flex items-center justify-evenly md:gap-4 lg:gap-7'>
                        <NavLink to={'/heartlike'} ><CiHeart className='md:text-xl lg:text-[27px]' /></NavLink>
                        <SlBasket className='md:text-xl lg:text-[24px]' />
                        <div
                            className={`flex items-center justify-center transition-all duration-300 rounded-full relative w-8 h-8  ${clicked ? 'bg-red-500' : ''}`}
                            onClick={toggleDiv}>
                            <BsPerson className={`md:text-xl lg:text-[25px] ${clicked ? 'text-white' : ''}`} />
                            {clicked && 
                                (
                                    <ul className='absolute top-10 right-0 w-60  rounded-sm p-5 bg-zinc-700 bg-opacity-90 z-10 text-white text-2xl flex flex-col gap-4'>
                                        <li className='flex items-center gap-4'><BsPerson /> <p className='text-sm'>Manage My Account</p></li>
                                        <li className='flex items-center gap-4'><BsBasket3 /><p className='text-sm'>My Order</p></li>
                                        <li className='flex items-center gap-4'><MdOutlineCancel /><p className='text-sm'>My Cancellations</p></li>
                                        <li className='flex items-center gap-4'><BsStar /><p className='text-sm'>My Reviews</p></li>
                                        <li className='flex items-center gap-4'><CiLogout /><p className='text-sm'>Logout</p></li>
                                    </ul>
                                )
                        
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
