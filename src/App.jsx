import React from 'react'
import { useState } from 'react'

function DisplayCities(cities) {

  console.log(cities.cities)

  return (
    <>
    { cities.cities.length !== 0 ?
    <>
    <div className='py-7'>{
    cities.cities.map((city) => {
      return <div className='py-4 text-md text-[#777] font-medium cursor-pointer hover:text-white hover:scale-105 transition-transform w-fit'>{city}</div>
    })}
    </div>
    <hr className='w-[420px]'/>
    </>
    :
    null
    }
    </>
  )
}

function WeatherDetails() {
  return (
    <div>
      <div className='text-white py-12'>
        Weather Details
      </div>
      <div className='w-[420px] flex flex-col gap-5'>
        <div className='flex justify-between'>
          <div className='text-[#999] text-md font-medium'>Cloudy</div>
          <div className='text-white'>86%</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-[#999] text-md font-medium'>Humidity</div>
          <div className='text-white'>62%</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-[#999] text-md font-medium'>Wind</div>
          <div className='text-white'>8km/h</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-[#999] text-md font-medium'>Rain</div>
          <div className='text-white'>8mm</div>
        </div>
      </div>
      <hr className='w-[420px] mt-10'/>
    </div>
  )
}

function Weather(){
  return(
    <div className='flex gap-6'>
      <div className='text-white text-[130px] font-semibold'>
        08°
      </div>
      <div className='flex flex-col justify-center items-center gap-3 mt-4'>
        <div className='text-white text-[50px] font-semibold leading-10 tracking-[0.07em]'>
          London
        </div>
        <div className='text-white font-bold'>
          06:09 - Sunday, 6 Oct '19
        </div>
      </div>
      <div className='flex flex-col justify-center items-center relative w-20'>
        <div className='absolute w-20 '>
        <img src='./src/assets/rainy.png' className='w-20 h-16'/>
        </div>
        <div className='text-white font-bold absolute bottom-[53px]'>
          Rainy
        </div>
      </div>
    </div>
  )
}

function ThisWeek(){
  return(
    <div>
      <div className='text-white py-12'>
        This Week
      </div>
      <hr className='w-[420px] my-10'/>
    </div>
  )
}

export default function App() {

  const [cities, setCities] = useState(["Birmingham", "Manchester", "New York", "California"])

  console.log(cities)

  return (
    <div className="relative bg-cover bg-no-repeat bg-center h-screen w-screen"
    style={{ backgroundImage: 'url("./src/assets/Rainy-min.png")' }}
  >
    
        <div className='backdrop-blur-xl h-screen absolute right-0 w-[500px]'>
        </div>
        <div className='h-screen absolute right-0 w-[500px] backdrop-blur-lg bg-black opacity-20'>
        </div>
        <div className='h-screen absolute right-0 w-[500px] overflow-auto'>
          <div className='absolute right-0 w-20 h-20 bg-[#829f9a] flex justify-center items-center cursor-pointer'>
            <img src='./src/assets/download.svg' className='h-8 w-8' />
          </div>
          <div className='pl-10 pt-10'>
            <div className='flex flex-col gap-1 mt-[11px]'>
              <input type='text' className='bg-transparent text-white text-md w-96 outline-none font-normal' placeholder='Another location' />
              <hr className=' w-80'/>
            </div>
            <DisplayCities cities={cities} />
            <WeatherDetails />
            <ThisWeek />
          </div>
        </div>
        <div className='absolute bottom-20 left-20'>
          {/* <Weather /> */}
        </div>
      </div>
  )
}
