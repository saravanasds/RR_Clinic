import React from 'react'
import HeroImg from '../../public/assets/hair1.jpg'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] overflow-hidden '>
            <div className='w-full object-cover h-full relative'>
                <img src={HeroImg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex justify-center items-center flex-col gap-5'>
                    <h1 className='text-7xl font-bold text-white ' style={{textShadow: '6px 6px 0px rgba(0,0,0,0.9)'}}>Hair and Skin Care Clinic</h1>
                    <h2 className='text-3xl font-bold' style={{textShadow: '2px 2px 2px rgba(255,255,255,0.9)'}}>We are coming soon....</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Hero