import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { HeroSlider } from "./HeroSlider";



const SliderSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000000, disableOnInteraction: false, }}
            pagination={{ clickable: true, }}
            navigation={false}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper md:mt-5 lg:mt-10 select-none "
        >
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
            <SwiperSlide className="bg-slate-500"> <HeroSlider /> </SwiperSlide>
        </Swiper>
    )
}

export default SliderSwiper