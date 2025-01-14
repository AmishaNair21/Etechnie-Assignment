/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import {Menu}from "lucide-react"
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className='w-full flex-col justify-center items-center px-3 '>
     <div className='w-full h-11 px-2 md:p-9 flex items-center justify-between'>
      {/* Left Section */}
      <div className='flex items-center gap-36  md:gap-8'>
        <div className='md:hidden'>
          <Menu color="#677383" strokeWidth={2.75}/>
        </div>
        <img 
          src="/logo.svg" 
          alt="logo" 
          className="h-20 w-20  md:h-24 md:w-24"
        />
        <ul className='md:gap-5 text-sm hidden md:flex justify-center items-center'>
          <li>Sports</li>
          <li>Concerts</li>
          <li>Theater</li>
          <li>Festivals</li>
          <li>Cities</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-8'>
        <ul className='md:gap-5 text-sm hidden md:flex justify-center items-center'>
          <li>Gift Cards</li>
          <li>Explore</li>
          <li>Sell</li>
          <li>Favorites</li>
          <li>My Tickets</li>
          <li>Sign In</li>
        <li>  </li>
        </ul>
        <FaUserCircle size={30} color='#5E29BA'/>
      </div>
    </div>
    
    {/* Search Bar */}
      <div className='md:flex md:justify-center md:items-center w-full'>
      <button className='w-full md:w-[72%]  p-4 md:p-5 flex items-center border rounded-xl md:rounded-full md:shadow-lg gap-4'>
            <IoSearch size={26} color='#5E29BA'/>
            <input 
  type="text" 
  placeholder="Search events, artists, teams, and more" 
  className='placeholder:text-[#6C7383] w-full focus:outline-none'
/>
            
            </button>  
      </div>
    </nav>
  )
}

export default Navbar