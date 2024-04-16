import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { SlEnvolopeLetter } from "react-icons/sl";
import "../../index.css"
import Button from '../components/Button';

const Contact = () => {

  return (
    <div className='mt-20 container w-[90%] m-auto flex gap-6'>
      <div className='px-8 py-10 shadow-up rounded-sm w-1/3'>
        <div className='flex items-center gap-4 '>
          <div className='w-10 h-10 rounded-full bg-red-500 flex items-center justify-center'>
            <FiPhone className='text-white text-2xl' />
          </div>
          <p className='font-medium'>Call To Us</p>
        </div>
        <p className='mt-6'>We are available 24/7, 7 days a week.</p>
        <p className='mt-4'>Phone: +994 51 757 69 31</p>
        <div className='w-full h-[1px] bg-gray-300 my-8'></div>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-red-500 flex items-center justify-center'>
            <SlEnvolopeLetter className='text-white text-xl' />
          </div>
          <p className='font-medium'>Write To US</p>
        </div>
        <p className='mt-6'>Fill out our form and we will contact you within 24 hours.<br /><br />
          Emails: customer@exclusive.com<br />
          Emails: support@exclusive.com
        </p>
      </div>
      <div className='shadow-up p-10'>
        <div className='flex gap-10'>
          <input type="text" placeholder='Your Name ' className='bg-gray-100 outline-none rounded-sm p-3' />
          <input type="email" placeholder='Your Email ' className='bg-gray-100 outline-none rounded-sm p-3' />
          <input type="tel" placeholder='Your Phone ' className='bg-gray-100 outline-none rounded-sm p-3' />
        </div>
        <textarea
          className='mt-8 p-4 bg-gray-100 outline-none  w-full rounded-sm h-4/6 resize-none'
        defaultValue={"Your Message"}
>
        </textarea>
        <div className=' flex justify-end'>
          <div className='w-56 mt-8'>
            <Button btnTitle='Send Massage' color='#DC2626' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact