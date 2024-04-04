import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SliderSlayd } from "./SliderSlayd";
export default function SliderSwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 100000, disableOnInteraction: false, }}
                pagination={{ clickable: true, }}
                navigation={false}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:mt-5 lg:mt-10 ml-10 select-none "
            >
                <SwiperSlide className=""> <SliderSlayd />  </SwiperSlide>
                <SwiperSlide className="bg-slate-500"><SliderSlayd />  </SwiperSlide>
                <SwiperSlide className="bg-slate-500"><SliderSlayd />  </SwiperSlide>
                <SwiperSlide className="bg-slate-500"><SliderSlayd />  </SwiperSlide>
                <SwiperSlide className="bg-slate-500"><SliderSlayd />  </SwiperSlide>
            </Swiper>
        </>
    );
}
