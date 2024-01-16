import React from "react";
import { useState, useContext } from "react";


function DisplayCities({cities, setCurrentCity}) {

  cities = Object.keys(cities);

  const handleClick = (city) => {
    return () => {
      setCurrentCity(city);
    }
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div>
      {
        cities.length !== 0 ? (
          <div>
            <div className='py-7'>{
            cities.map((city) => {
              return (
              <div className='py-4 text-md text-[#777] font-medium cursor-pointer hover:text-white hover:scale-105 transition-transform w-fit' onClick={handleClick(city)}> 
                {city}
              </div>
              )
            })}
          </div>
        <hr className="w-[420px]" />
        </div>
        ) : null}
    </div>
  );
}

function WeatherDetails({cities, currentCity}) {

  const city = cities[currentCity];

  const clouds = city.cloud_pct;
  const humidity = city.humidity;
  const wind = city.wind_speed;

  return (
    <div>
      <div className="text-white py-12">Weather Details</div>
      <div className="w-[420px] flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="text-[#999] text-md font-medium">Cloudy</div>
          <div className="text-white">{clouds}%</div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#999] text-md font-medium">Humidity</div>
          <div className="text-white">{humidity}%</div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#999] text-md font-medium">Wind</div>
          <div className="text-white">{wind}km/h</div>
        </div>
      </div>
      <hr className="w-[420px] mt-10" />
    </div>
  );
}

function Weather({cities, currentCity}) {

  const city = cities[currentCity];

  let temp = city.temp
  if (temp < 10 && temp > 0) temp = "0" + temp;
  temp = temp + "°";

  return (
    <div className="flex gap-6">
      <div className="text-white text-[130px] font-semibold">{temp}</div>
      <div className="flex flex-col justify-center items-center gap-3 mt-4">
        <div className="text-white text-[50px] font-semibold leading-10 tracking-[0.07em]">
          {currentCity}
        </div>
        <div className="text-white font-bold">06:09 - Sunday, 6 Oct '19</div>
      </div>
      <div className="flex flex-col justify-center items-center relative w-20">
        <div className="absolute w-20 ">
          <img src="./src/assets/rainy.png" className="w-20 h-16" />
        </div>
        <div className="text-white font-bold absolute bottom-[53px]">Rainy</div>
      </div>
    </div>
  );
}

function ThisWeek() {
  return (
    <div>
      <div className="text-white py-12">This Week</div>
      <hr className="w-[420px] my-10" />
    </div>
  );
}

export default function App() {

  const Key = "API_NINJAS_KEY"

  const getData = async (city) => {
    const data = 
    await fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
        method: 'GET',
        headers: {
            'X-Api-Key': Key
        }
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
    })

    return data;
  }

  const [cities, setCities] = useState({
    "Agra": {
      cloud_pct: 40,
      temp: 12,
      humidity: 76,
      wind_speed: 1.54,
    }
  });



  const [currentCity, setCurrentCity] = useState("Agra");

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityNames = Object.keys(cities);
    if (cityNames.includes(input)) {
      setCurrentCity(input);
      setInput("");
      return;
    }

    await getData(input).then((data) => {
      setCities((prevCities) => {
        return {
          ...prevCities,
          [input]: data
        }
      });
      setCurrentCity(input);
      setInput("");
    });
  }

  return (
      <div
        className="relative bg-cover bg-no-repeat bg-center h-screen w-screen"
        style={{ backgroundImage: 'url("./src/assets/Rainy-min.png")' }}
      >
        <div className="backdrop-blur-xl h-screen absolute right-0 w-[500px]"></div>
        <div className="h-screen absolute right-0 w-[500px] backdrop-blur-lg bg-black opacity-20"></div>
        <div className="h-screen absolute right-0 w-[500px] overflow-auto">
          <button className="absolute right-0 w-20 h-20 bg-[#829f9a] flex justify-center items-center cursor-pointer" onClick={(e) => handleSubmit(e)}>
            <img src="./src/assets/download.svg" className="h-8 w-8" />
          </button>
          <div className="pl-10 pt-10">
            <div className="flex flex-col gap-1 mt-[11px]">
              <input
                type="text"
                className="bg-transparent text-white text-md w-96 outline-none font-normal"
                placeholder="Another location"
                onChange={(e) => handleChange(e)}
              />
              <hr className=" w-80" />
            </div>
            <DisplayCities cities={cities} setCurrentCity={setCurrentCity}/>
            <WeatherDetails cities={cities} currentCity={currentCity}/>
          </div>
        </div>
        <div className="absolute bottom-20 left-20">
          <Weather cities={cities} currentCity={currentCity}/>
        </div>
      </div>
  );
}
