import React from 'react'
import { useState } from 'react'

function DisplayCities(cities) {

  console.log(cities.cities)

  return (
    <div className='py-7'>{
    cities.cities.map((city) => {
      return <div className='py-3 text-md text-[#999999]'>{city}</div>
    })}
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
    
        <div className='backdrop-blur-xl h-screen absolute right-0 w-[600px]'>
        </div>
        <div className='h-screen absolute right-0 w-[600px] backdrop-blur-lg bg-black opacity-20'>
        </div>
        <div className='h-screen absolute right-0 w-[600px]'>
          <div className='absolute right-0 w-20 h-20 bg-[#829f9a] flex justify-center items-center cursor-pointer'>
            <img src='./src/assets/download.svg' className='h-8 w-8' />
          </div>
          <div className='pl-10 pt-10'>
            <div className='flex flex-col gap-1 mt-[11px]'>
              <input type='text' className='bg-transparent text-white text-md w-96 outline-none font-normal' placeholder='Another location' />
              <hr className=' w-96'/>
            </div>
            <DisplayCities cities={cities} />
          </div>
        </div>
      </div>
  )
}
