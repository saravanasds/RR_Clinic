import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[10vh] bg-blue-300 flex justify-around items-center'>
            <div>
                <h1 className='text-3xl font-bold uppercase tracking-wider ' style={{textShadow: '2px 4px 0px rgba(255,255,255,0.9)'}}>RR Hair-Skin Clinic</h1>
            </div>
            <div>
                <div className='flex gap-10'>
                    <a href="" className='text-lg font-semibold uppercase'>Home</a>
                    <a href="" className='text-lg font-semibold uppercase'>About</a>
                    <a href="" className='text-lg font-semibold uppercase'>Services</a>
                    <a href="" className='text-lg font-semibold uppercase'>Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar