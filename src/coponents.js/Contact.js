import React from 'react'

function Contact() {
  return (
    <div>
        <div id='Contact' className='h-full md:h-screen w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col'>
            <div className='relative w-full flex justify-center'>
                <img className='w-full object-cover h-screen' src={require("../assets/shrestha.jpg")}></img>
                {/* <div className='bg-red-600 absolute h-screen w-full opacity-40'></div> */}
            </div>
            <div className='flex flex-col items-center md:items-start justify-center bg-black z-10 px-28'>
                <p className='ml-0 mt-10 text-red-500 text-4xl md:text-5xl font-bold max-w-xs z-10 '> Contact Us</p>
                <form className='mt-5'>
                    <div className='flex flex-col justify-center'>
                        <input className="m-2"type="text" placeholder='Name'/>
                        <input className="m-2"type="email" placeholder='Email Address'/>
                        <textarea className='m-2' name=''placeholder='Your Message' form ="form1" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className='ml-2 px-3 py-2 text-white hover:bg-red-700 font-bold bg-red-500 rounded-xl'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact