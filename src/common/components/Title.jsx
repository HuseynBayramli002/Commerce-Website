import React from 'react'

const Title = (promps) => {
    const { sectionTitle,sectionInfo } = promps
    return (
        <div className='select-none'>
            <div className='flex gap-6'>
                <div className='w-5 h-8 bg-red-500 rounded-sm'></div>
                <h3 className='text-2xl text-red-500 font-semibold'>{sectionTitle} </h3>
            </div>
            <p className='text-4xl font-bold pt-8'>{sectionInfo}</p>
        </div>
    )
}

export default Title