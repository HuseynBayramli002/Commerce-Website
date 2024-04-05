import React from 'react'
import Title from './Title'
import { NavLink } from 'react-router-dom'
import Ps5 from '../../assets/ps5.png'
import Parfum from '../../assets/parfum.png'
import Hat from '../../assets/hat.png'
import Mp3 from '../../assets/mp3.png'

const NewArrival = () => {
  return (
    <div className='mt-32'>
      <Title sectionTitle="Featured" sectionInfo="New Arrival" />

      <div class="grid grid-cols-4 grid-rows-2 h-[600px] gap-8 bg-blue-500 border-red-900 border-8">
        <div class="bg-black col-span-2 row-span-2 relative">
          <div className='absolute bottom-0 right-0'>
            <img src={Ps5} alt="" />
          </div>
          <p className='text-white'>PlayStation 5</p>
          <p className='text-white'>Black and White version of the PS5 coming out on sale.</p>
          <NavLink to={'/'} className='text-white  font-bold border-b ml-0 mr-auto border-white '>Shop Now</NavLink>
        </div>
        <div class="bg-black col-span-2 row-span-1 relative">
          <div className='absolute bottom-0 right-0'>
            <img src={Hat} alt="" />
          </div>
          <p className='text-white'>Women’s Collections</p>
          <p className='text-white'>Featured woman collections that give you another vibe.</p>
          <NavLink to={'/'} className='text-white  font-bold border-b ml-0 mr-auto border-white '>Shop Now</NavLink>
        </div>
        <div class="bg-black col-span-1 row-span-1 relative">
          <div className='absolute bottom-0 right-0'>
            <img src={Mp3} alt="" />
          </div>
          <p className='text-white'>Speakers</p>
          <p className='text-white'>Amazon wireless speakers.</p>
          <NavLink to={'/'} className='text-white  font-bold border-b ml-0 mr-auto border-white '>Shop Now</NavLink>
        </div>
        <div class="bg-[#0F0F0F] col-span-1 row-span-1 relative">
          <div className='absolute bottom-0 right-0'>
            <img src={Parfum} alt="" />
          </div>
          <p className='text-white'>Perfume</p>
          <p className='text-white'>GUCCI INTENSE OUD EDP.</p>
          <NavLink to={'/'} className='text-white  font-bold border-b ml-0 mr-auto border-white '>Shop Now</NavLink>
        </div>
      </div>


    </div>
  )
}
export default NewArrival