import React, { useState } from 'react'
import Woman from '../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import { CiShop, CiDollar, CiTwitter, CiInstagram, CiLinkedin  } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6"; 
import ServiceInfo from '../components/ServiceInfo';
import Shungulu from '../../assets/SHUNgulu.png'
import Shengulu from '../../assets/SHENgulu.png'
import Mengulu from '../../assets/MENgulu.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";

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

const personData = [
    {
        id: 11,
        name: "Emma Watson",
        title: "Managing Director",
        img: Shungulu
    },
    {

        id: 12,
        name: "Tom Cruise",
        title: "Founder & Chairman",
        img: Shengulu
    },
    {
        id: 13,
        name: "Will Smith",
        title: "Product Designer",
        img: Mengulu
    },
    {
        id: 14,
        name: "Emma Watson",
        title: "Managing Director",
        img: Shungulu
    },
    {

        id: 15,
        name: "Tom Cruise",
        title: "Founder & Chairman",
        img: Shengulu
    },
    {
        id: 16,
        name: "Will Smith",
        title: "Product Designer",
        img: Mengulu
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
            <div className='flex items-center justify-between ml-24 mt-24 gap-16' >
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

            <div className='container w-[90%] m-auto flex justify-center gap-5 mt-24 flex-wrap '>
                {
                    data.map((item) => (
                        <div
                            key={item.id}
                            className={`border select-none flex flex-col items-center justify-evenly w-[23%] py-6 px-3 ${item.id === clicked ? 'text-white bg-red-500 border-red-500' : ''}`}
                            onClick={() => handleClick(item.id)}>
                            <div
                                className={`flex justify-center items-center h-20 w-20 rounded-full bg-black border-[11px] border-gray-300   text-4xl ${item.id === clicked ? 'text-black bg-white border-red-300' : 'text-white'}`}>
                                {item.icon}
                            </div>
                            <p className='text-3xl font-bold mt-6 mb-3'>{item.title}</p>
                            <p>{item.info}</p>
                        </div>
                    ))
                }
            </div>

            <div className='container w-[94%] m-auto mt-28 '>
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" md:mt-5 lg:mt-10 select-none"
                    slidesPerView={3}
                    


                >
                    {personData.map((item) => (
                            <SwiperSlide key={item.id}>
                            <div className='flex flex-col h-[500px] items-center'>
                                <div className='bg-[#F5F5F5] px-14 pt-8 w-4/5'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='text-start pt-8 w-4/5'>
                                    <p className='text-3xl font-semibold'>{item.name}</p>
                                    <p className='mt-1'>{item.title}</p>
                                </div>
                                <div className='flex gap-4 justify-start pt-3  w-4/5'>
                                    <CiTwitter className='text-xl'/>
                                    <CiInstagram className='text-xl'/>
                                    <CiLinkedin className='text-xl'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ServiceInfo />
        </div>
    )
}

export default About