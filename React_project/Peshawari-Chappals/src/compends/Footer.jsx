import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* main div */}
            <div className='bg-gray-300 w-full h-auton flex  items-center flex-col'>
                <div className='flex flex-col lg:flex-row w-11/12 items-center justify-center lg:justify-between gap-10'>

                    {/* b1 */}
                    <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-1/3'>
                        <h1 className='font-bold text-2xl mt-8'>Don’t miss a thing</h1>
                        <p className='mt-3 mb-5 text-center lg:text-left'>Enter your email below to be the first to know about new collections and product launches.</p>

                        <div id='input' className='border-2 border-gray-500 flex justify-center items-center rounded-2xl h-10 w-11/12 lg:w-2/3'>
                            <input type="text" className='border-none outline-none text-center lg:text-left w-full px-2' placeholder='Enter your email address' />
                            <button className='bg-amber-950 rounded-full p-2 cursor-pointer'><ArrowRight color="#ffffff" /></button>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <Facebook className='cursor-pointer' />
                            <Instagram className='cursor-pointer' />
                            <Youtube className='cursor-pointer' />
                        </div>
                    </div>

                    {/* b2 */}
                    <div className='flex flex-col items-center lg:items-end'>
                        <ul className='space-y-2 text-center lg:text-right'>
                            <li><h2 className='font-extrabold text-xl'>Important Links</h2></li>
                            <li>Return & Refunds</li>
                            <li>Privacy Policy</li>
                            <li>Contact Information</li>
                            <li>Our Videos</li>
                            <li>Our Stories</li>
                        </ul>
                    </div>

                    {/* b3 */}
                    <div className='flex flex-col items-center lg:items-end'>
                        <ul className='space-y-2 text-center lg:text-right'>
                            <li><h2 className='font-extrabold text-xl'>Contact us</h2></li>
                            <li>+92 333 574 2086</li>
                            <li>+92 305 510 2308</li>
                            <li>info@peshawarichappals.pk</li>
                            <li className='font-extrabold text-xl'>Find our Location</li>
                            <li>See Our Store</li>
                        </ul>
                    </div>

                </div>

                <div className='w-11/12 flex justify-center border-t-2 border-gray-400 mt-10'>
                    <p className='py-5'>© Peshawari Chappals 2014-2025</p>
                </div>

            </div>

        </>
    )
}

export default Footer