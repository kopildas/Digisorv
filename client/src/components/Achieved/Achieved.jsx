import React from 'react'


function Achieved() {
  return (
    <div className='flex flex-col h-auto bg-zinc-400 px-5 lg:px-16 py-20 '>
      <div className='bg-zinc-700 rounded-[4rem] w-full h-full flex flex-col mt-[12rem] md:mt-10 lg:mt-10'>
        <div className='flex items-center justify-center mt-20'>
          <p className='archivo-black-regular text-zinc-300 font-extrabold lg:text-left text-center text-5xl md:text-7xl'>What we <span className='text-orange-400'><i>achieved</i></span></p>
        </div>
        <div className='flex flex-col lg:flex-row w-full h-auto p-5 md:p-20 mt-5 lg:mt-0 gap-5 lg:gap-0'>
          <div className='lg:w-1/3 h-96 border lg:border-r-0 rounded-3xl lg:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl flex flex-col items-center justify-center lg:items-start lg:justify-start px-5 md:px-10  py-14 bg-red-00'>
            <div className='md:text-9xl text-5xl font-semibold text-yellow-300'>40+</div>
            <div className='mt-5 bg-green-00'>
              <p className='lg:text-left text-center text-zinc-400 text-xl md:text-xl'>Researchers, strategists, creatives, and engineers working together</p>
            </div>
          </div>
          <div className='lg:w-1/3 h-96 border rounded-3xl  lg:rounded-none flex flex-col items-center justify-center lg:items-start lg:justify-start px-5 md:px-10 py-14'>
          <div className='md:text-9xl text-5xl font-semibold text-rose-300'>200+</div>
            <div className='mt-5'>
              <p className='lg:text-left text-center text-zinc-400 bg-green-00 text-xl md:text-xl'>Digital products we’ve helped shape, optimize, and launch since 2012.</p>
            </div>
          </div>
          <div className='lg:w-1/3 h-96 border rounded-3xl lg:rounded-none lg:border-l-0 lg:rounded-br-3xl lg:rounded-tr-3xl flex flex-col items-center justify-center lg:items-start lg:justify-start  px-5 md:px-10  py-14'>
          <div className='md:text-9xl text-5xl font-semibold text-violet-300'>10+</div>
            <div className='mt-5'>
              <p className='lg:text-left text-center text-zinc-400 text-xl md:text-xl'>Countries represented in our agency, offering a global perspective.</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Achieved
