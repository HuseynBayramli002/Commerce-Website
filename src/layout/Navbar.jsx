import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const Navbar = () => {
  return (
    <div className='bg-black relative w-full select-none'>
      <div className='container flex justify-center items-center h-12  '>
        <p className='text-white md:text-xs lg:text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className='ml-2 font-bold border-b border-white'>ShopNow</span></p>
        <div className='absolute right-24'>
          <Select>
            <SelectTrigger className="w-[40px] bg-black text-white md:text-xs lg:text-sm">
              <SelectValue placeholder="En"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup >
                <SelectItem value="aze" className="md:text-xs lg:text-sm">Aze</SelectItem>
                <SelectItem value="ru" className="md:text-xs lg:text-sm">Ru</SelectItem>
                <SelectItem value="tr" className="md:text-xs lg:text-sm">Tr</SelectItem>
                <SelectItem value="en" className="md:text-xs lg:text-sm">En</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Navbar