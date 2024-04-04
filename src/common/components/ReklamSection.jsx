import React from "react";
import { useTimer } from "./Timer";
import Button from "./Button";
import BoomBox from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"

const ReklamSection = () => {
  const saletimer = useTimer(432000);
  const data = [
    {
      id: 1,
      date: saletimer.days,
      time: 'Days'
    },
    {
      id: 2,
      date: saletimer.hours,
      time: 'Hours'
    },
    {
      id: 3,
      date: saletimer.minutes
      , time: 'Minutes'
    },
    {
      id: 4,
      date: saletimer.seconds,
      time: 'Seconds'
    },
  ]
  return (
    <div className="bg-black flex items-center gap-10">
      <div className="ml-14">
        <p className="font-semibold pt-16" style={{ color: '#00bd3d' }}>Categories </p>
        <p className="text-white font-semibold text-5xl tracking-wider  pt-8 ">
          Enhance Your <br /> Music Experience
        </p>
        <div className="flex gap-6 pt-8">
          {data.map((item) => (
            <div key={item.id} className="w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full font-semibold text-base">
              {item.date} <span className="text-xs font-normal">{item.time}</span>
            </div>
          ))}
        </div>
        <div className="pt-10 pb-16"><Button color='#00bd3d' buttonTitle="Buy Now!" /></div>
      </div>
      <div className="relative z-[0]" >
        <div className="rounded-full  blur-3xl bg-[#7e7e7ea6] absolute w-full h-full z-[-1]"></div>
        <img src={BoomBox} alt="" className="z-[2]"/>
      </div>
    </div>
  );
};

export default ReklamSection;
