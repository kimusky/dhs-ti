import React from 'react'
import Button from '../layouts/Button';

const  Hero = () => {
  return (
    <div className='max-w[1640px] mx-auto'>
      <div className='max-h-[500px]'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center'>
        <br />
        <br />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold whitespace-nowrap text-center">
    YOUR GATEWAY TO A GLOBAL CAREER</h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap text-center text-[#C30010]">
    DENPASAR HOTEL SCHOOL</h1>
    <h6 className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed font-bold">
    Discover your skill and knowledge with our Programs that provide you an experience with a supportive mentor to help you achieve your goals. Join Our Study Programs for your bright future today.
    </h6>
    <br></br>
    <div className="flex justify-center items-center">
  <Button title="About Us" />
</div>
        </div>
        <div className="w-full h-screen">
            <img src="herobanner.jpg"/>
            </div>
            <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap text-left text-[#0F07B6] ml-36">
                ABOUT US
                </h1><br />
                <h6 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black ml-36 mr-36 leading-5 max-h-[calc(15*1.25rem)] overflow-hidden text-justify">
  <span className="text-[#C30010]">Denpasar Hotel School (DHS)</span> is an educational <br />
  and training institution in the hotel sector under <br />the auspices of the Guna Widya Paramesthi <br />Foundation. This institution was established to <br />
  provide opportunities for the young generation <br />of Indonesia to become professional workers <br />
  in the hotel, hospitality, cruise ships, and tourism <br />sectors. This institution is here to invite students <br />
  to study while working in Australia, Germany, <br />and Southeast Asia through the Partnership <br />
  Program of DHS, known as PP DHS.
</h6>
            </div>
      </div>
    </div>
  )
}

export default Hero;