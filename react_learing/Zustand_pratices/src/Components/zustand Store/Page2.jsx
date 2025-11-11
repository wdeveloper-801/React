import React, { useState } from 'react'

const Page2 = () => {

    const [first, setfirst] = useState(0) 
    let up = () => setfirst(first + 1)
    let down = () => setfirst(first - 1)
    let sand_value_to_card = () => {

    }
    console.log(sand_value_to_card);

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-90 h-100  bg-blue-500 rounded-2xl flex items-center flex-col">
                    <div className='w-11/12 h-50 m-2 rounded-2xl'>
                        <img className='w-full h-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDkGmihQuiJ1iZHzQpwJ9JPBO6BnViVmU7Q&s" alt="" /></div>
                    <h1>car</h1>
                    <div className='w-11/12 h-7 pl-2 pr-2 bg-green-400 flex justify-between items-center'>
                        <button onClick={up} className='cursor-pointer'>up</button>
                        <p>{first}</p>
                        <button onClick={down} className='cursor-pointer'>down</button>
                    </div>
                    <button className='w-40 h-13 bg-red-500 rounded-2xl mt-3 active:scale-90'>Add to card</button>
                </div>
            </div>
        </>
    )
}

export default Page2