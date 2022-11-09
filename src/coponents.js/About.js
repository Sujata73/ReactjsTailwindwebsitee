import React from 'react'

const About = () => {
  return (
    <div>
        <div className='h-97 w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col bg-black'>
            <div className='flex max-w-xl justify-center mt-20 md:mt-0 lg:ml-20'>
                <div className='justify-center items-center flex lg:w-96 lg:h-96 h-72 w-72 bg-black rounded-full m-10'>
                <img className='h-4/5  ' src={ require("../assets/suju.jpg")}></img>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center md:items-start -mt-4'>
                <p className='max-w-md text-5xl md:text-6xl font-bold text-red-500 mb-10'>Dragon Team</p>
                <p className='max-w-md text-gray-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nam natus. Voluptatem sint nostrum qui magni error cupiditate in, repudiandae laborum omnis alias. Soluta delectus repudiandae dolore velit saepe et!</p>
            </div>
        </div>
    </div>
  )
}

export default About;