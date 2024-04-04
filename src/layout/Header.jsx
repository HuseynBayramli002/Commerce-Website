import { useRef } from 'react'

import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import { BsPerson } from "react-icons/bs";

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
    return (
        <header className='border-b border-gray-500'>
            <div className='flex items-center justify-between container w-[90%] m-auto mt-10 pb-4 '>
                <h1 className='font-bold  md:text-xl lg:text-2xl'>Exclusive</h1>
                <ul className='flex md:gap-3 lg:gap-[3rem]'>
                    {data.map(item => (
                        item.name && (
                            <li key={item.id} className='md:text-sm lg:text-base'>
                                <NavLink  to={item.url} className={ ({ isActive }) => isActive ? 'border-b border-gray-500' : ''} >{item.name}</NavLink>
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
                        <CiHeart className='md:text-xl lg:text-[27px]' />
                        <SlBasket className='md:text-xl lg:text-[24px]' />
                        <BsPerson className='md:text-xl lg:text-[25px]' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
