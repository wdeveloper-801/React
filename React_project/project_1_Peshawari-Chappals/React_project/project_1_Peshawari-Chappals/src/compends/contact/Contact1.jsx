import React from 'react'

const Contact1 = () => {
    return (
        <div className='h-130 flex flex-col '>

            <div className='w-full h-70  flex justify-center items-center'>
                <h1 className='text-3xl font-bold mt-10'>Contact </h1>
            </div>

            <div className='w-full h-full flex'>

                <div className='w-2/4  h-full flex flex-col justify-start p-10 items-start'>
                    <h1 className='text-3xl font-bold '>Message</h1>
                    <p className='mt-5'>Send us a text and an ambassador will be with you shortly.</p>
                    <h1 className='underline font-bold mt-5'>+92 305 510 2308</h1>
                    <h1 className='underline font-bold mt-5'>+92 305 510 2308</h1>
                </div>

                <div className='w-2/4 h-full flex flex-col justify-start p-10 items-start'>
                    <h1 className='text-3xl font-bold '>Address</h1>
                    <p className='mt-5'>Shop no 9 Madina Market Pir Wadhai Main Lari Adda Near Shireen Corner Sweets and Bakers, Rawalpindi Punjab 46000</p>
                    <h1 className='underline font-bold mt-5'>Get Direction</h1>
                </div>

                <div className='w-2/4  h-full flex flex-col justify-start p-10 items-start'>
                    <h1 className='text-3xl font-bold '>We're Open</h1>
                    <p className='mt-5'>Our store is open for all shopping, exchanges and refunds. Everyday from                10am to 10pm</p>
                </div>

                <div className='w-2/4  h-full flex flex-col justify-start p-10 items-start'>
                    <h1 className='text-3xl font-bold '>Connect With Us</h1>
                    <p className='mt-5'>Follow us on social media for the latest updates and exclusive content..</p>
                    <div className='flex gap-2 mt-5'>
                        <img src="https://www.peshawarichappals.pk/cdn/shop/files/yt.png?v=1756980254&width=100" alt="" />
                        <img src="https://www.peshawarichappals.pk/cdn/shop/files/in.png?v=1756980178&width=100" alt="" />
                        <img src="https://www.peshawarichappals.pk/cdn/shop/files/fb.png?v=1756980043&width=100" alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Contact1