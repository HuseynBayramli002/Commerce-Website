import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ServiceInfo = () => {
    const data = [
        {
            id: 1,
            icon: <TbTruckDelivery className='text-white w-7 h-7'/>,
            title: "FREE AND FAST DELIVERY",
            info: "Free delivery for all orders over $140"
        },
        {
            id: 2,
            icon: <RiCustomerService2Fill className='text-white w-7 h-7'/>,
            title: "24/7 CUSTOMER SERVICE",
            info: "Friendly 24/7 customer support"
        },
        {
            id: 3,
            icon: <VscWorkspaceTrusted className='text-white w-7 h-7'/>,
            title: "MONEY BACK GUARANTEE",
            info: "We reurn money within 30 days"
        }
    ]

    return (

        <div className='flex justify-evenly mt-32'>
            {data.map((item) => (
                <div className='flex flex-col items-center' key={item.id}>
                    <div className='flex justify-center items-center h-20 w-20 rounded-full bg-black border-[11px] border-gray-300'>
                        {item.icon}
                    </div>
                    <h1 className='font-semibold text-xl mt-6'>{item.title}</h1>
                    <p className='font-normal text-sm mt-2'>{item.info}</p>
                </div>
            ))}
        </div>
    )
}

export default ServiceInfo