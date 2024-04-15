import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import SliderSwiper from "./SliderSwiper";

export default function Hero() {
    const data = [
        {
            id: 1,
            name: 'Woman’s Fashion',
            url: '/'
        },
        {
            id: 2,
            name: 'Man’s Fashion',
            url: '/'
        },
        {
            id: 3,
            name: 'Electronics',
            url: '/'
        },
        {
            id: 4,
            name: 'Home & Lifestyle',
            url: '/'
        },
        {
            id: 5,
            name: 'Medicine',
            url: '/'
        },
        {
            id: 6,
            name: 'Sports & Outdoor',
            url: '/'
        },
        {
            id: 7,
            name: 'Baby’s & Toys',
            url: '/'
        },
        {
            id: 8,
            name: 'Grocery & Pets',
            url: '/'
        },
        {
            id: 9,
            name: 'Health & Beauty',
            url: '/'
        }
    ]
    return (
        <div className="flex">
            <div className='md:pt-5 lg:pt-10 border-r border-gray-500'>
                <ul className='w-44 flex flex-col md:gap-[6px] lg:gap-4'>
                    {data.map((item, index) => (
                        <li key={item.id} className='flex items-center justify-between md:text-sm lg:text-base pr-2'>
                            <NavLink to={item.url} className="flex items-center">
                                {item.name}
                            </NavLink>
                            {index === 0 || index === 1 ? <IoIosArrowForward className="ml-1" /> : null}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-5/6'>
                <SliderSwiper />
            </div>
        </div>
    );
}
