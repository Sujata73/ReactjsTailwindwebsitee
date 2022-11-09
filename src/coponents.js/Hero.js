import React from 'react'

const Hero = () => {
  return (
    <div id="home" className='h-screen w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col'>
        <div className='flex flex-col items-start md:items-end justify-center bg-black z-10 px-20'>
            <p className='text-4xl md:text-6xl text-white font-bold max-w-md z-10 md:mr-40'>Dragon esport team</p>
            <p className='text-white text-sm max-w-xs mt-4 md:mr-72 z-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum nesciunt quos magnam esse laudantium doloremque, suscipit vero voluptatibus tenetur officia, quod asperiores a voluptatem sint nemo veritatis fugit obcaecati.</p>
            <button className='px-5 py-3 my-5 text-white hover:bg-red-700 font-bold bg-red-500 rounded-xl md:self-start lg:ml-5 xl:ml-5'>Meet the Team</button>
        </div>
        <div className='md:col-span-4 flex justify-center'>
            <img className="w-full object-cover"src={ require("../assets/sujata.jpg")}></img>
        </div>
        {/* <div className='bg-red-500 absolute h-screen w-full opacity-70'></div> */}
    </div>
  )
}

export default Hero