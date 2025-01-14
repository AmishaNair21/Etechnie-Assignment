"use client"
import React from 'react'

const HeroBanner = () => {
    const slides = [
        {
            image:'/images/Billy.webp'
        },
        {
            image:'/images/Billy.webp'
        },
        {
            image:'/images/coldplay.webp'
        },
        {
            image:'/images/formula.webp'
        },
        {
            image:'/images/justin.webp'
        },
        
        {
            image:'/images/nba.webp'
        },
        
        
        
    ];

  return (
    
    <div style={{backgroundImage:`url(${slides[0].image})`}} className='w-full h-full rounded-3xl bg-center bg-cover duration-500'></div>
  )
}

export default HeroBanner