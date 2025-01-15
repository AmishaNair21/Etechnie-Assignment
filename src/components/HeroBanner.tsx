"use client"
import React, { useEffect, useState } from 'react';

const HeroBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slides = [
        {
            image:'/images/Billy.webp',
            text:"Billy Joel",
            likes : "25.7K"
        },
        {
            image:'/images/coldplay.webp',
            text:"Coldplay",
            likes : "30.9K"
        },
        {
            image:'/images/formula.webp',
            text:"Formula 1",
            likes : "50.5K"
        },
        {
            image:'/images/justin.webp',
            text:"Justin Timberlake",
            likes : "45.8K"
        },
        {
            image:'/images/nba.webp',
            text:"NBA",
            likes : "15.5K"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);


    return (
        <div className="relative group h-full">
            <div className="flex h-full rounded-3xl overflow-hidden relative">
                {/* Right section  */}
                <div className="absolute inset-0">
                    <div 
                        style={{backgroundImage: `url(${slides[currentIndex].image})`}}
                        className="w-full h-full bg-center bg-cover"
                    />
                </div>

                {/* Left section with skewed overlay */}
                <div className="w-[40%] relative z-10">
                    <div className="absolute inset-0">
                        <div 
                            className="absolute inset-0 bg-[#240A4C]"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                            }}
                        >
                            <div className="h-full flex-col items-center mt-20  mx-7">
                                <h2 className="text-6xl font-bold text-white">
                                    {slides[currentIndex].text}
                                </h2>
                                <div>
                                <button className='mt-5 text-white border border-customPurple rounded-xl py-2 px-5'>See Tickets</button>
                                </div>
                            </div>
                                <button className='text-white'>See Now</button>
                            
                            {/* Dots navigation */}
                            <div className="absolute bottom-4 p-5 mx-5 gap-4 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3   rounded-full transition-all ${
                                            currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                                        }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
   