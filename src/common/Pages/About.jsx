import React, { useState } from 'react'
import Woman from '../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import { CiShop, CiDollar } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

const data = [
    {
        id: 1,
        icon: <CiShop />,
        title: "10.5k",
        info: "Sallers active our site"
    },
    {
        id: 2,
        icon: <CiDollar />,
        title: "33k",
        info: "Mopnthly Produduct Sale"
    },
    {
        id: 3,
        icon: <BsHandbag />,
        title: "45.5k",
        info: "Customer active in our site"
    },
    {
        id: 4,
        icon: <FaSackDollar />,
        title: "25k",
        info: "Anual gross sale in our site"
    }
]
const About = () => {
    const [clicked, setClicked] = useState(null)
    const handleClick = (e) => {
        if (e === clicked) {
            setClicked(null)
        } else {
            setClicked(e)
        }
    }

    return (
        <div>
            <div className='flex items-center justify-between ml-24 mt-24'>
                <div className='w-2/5 '>
                    <p className='text-[54px] font-semibold'>Our Story </p>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        <br /> <br /> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className=''>
                    <img src={Woman} alt="" />
                </div>
            </div>

            <div className='flex justify-center gap-8 mt-24 flex-wrap '>
                {
                    data.map((item) => (
                        <div
                            key={item.id}
                            className={`border flex flex-col items-center justify-evenly py-8 px-12 w-1/5 ${item.id === clicked ? 'text-white bg-red-500 border-red-500' : ''}`}
                            onClick={()=>handleClick(item.id)}>
                            <div
                                className={`flex justify-center items-center h-20 w-20 rounded-full bg-black border-[11px] border-gray-300 text-white text-4xl ${item.id=== clicked ? 'text-black bg-white border-red-300' : ''}`}>
                                {item.icon}
                            </div>
                            <p className='text-3xl font-bold mt-6 mb-3'>{item.title}</p>
                            <p>{item.info}</p>
                        </div>
                    ))
                }
            </div>







        </div>
    )
}

export default About