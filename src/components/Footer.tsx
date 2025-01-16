import React from 'react'
import Image from 'next/image'
import { RiSofaLine } from 'react-icons/ri'
import { LuHandshake } from 'react-icons/lu'
import { HandCoins } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        
<footer className=" w-full mt-10 px-10">
<div className="flex-col justify-center text-center items-center">
<p className="font-bold text-md pb-3">Get hot events and deals delivered straight to your inbox</p>
<div>
  <input type="text" placeholder="Email Address" className="text-md border-b py-3 px-4 mx-5 text-gray-600"/>
  <button className="h-12 w-32 border rounded-lg  border-customPurple text-customPurple font-normal hover:bg-[#EEE0FF]">Join The List</button>
</div>
<p className="text-gray-500 py-5">By signing up, you acknowledge and accept our <a href="#" className="text-[#08A1E0]">privacy policy</a> and consent to receiving emails. </p>
  </div>
  <div className='w-full'>
    <hr className='mt-10'/>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 py-8'>
        {/* FanProtect coloumn */}
    <div className='flex-col mt-2'>
        <Image src="/images/fanprotect.svg"
         alt="fan protect guarantee"
         width={150}
         height={50}
        />
      <ul className='my-5'>
        <li className='text-sm pb-8 font-bold flex items-center gap-2 text-[#677383]'><HandCoins color='#0774CA'/>Buy and sell with confidence</li>
        <li className='text-sm pb-8 font-bold flex items-center gap-2 text-[#677383]'><RiSofaLine color='#0774CA' size={25} />Customer service all the way to your seat</li>
        <li className='text-sm font-bold flex items-center gap-2 text-[#677383]'><LuHandshake  color='#0774CA' size={20}/>Every order is 100% guaranteed</li>
      </ul>
        </div>    
{/* company coloumn */}
    <div className='flex-col  '>
        <h2 className='text-[#686d74] font-bold text-lg'>Our Company</h2>
        <ul className='text-lg py-3 '>
            <li className='pb-4 hover:text-purple-600'><a href='#'>About Us</a></li>
            <li className='pb-4 hover:text-purple-600'><a href='#'>Partners</a></li>
            <li className='pb-4 hover:text-purple-600'><a href='#'>Affiliate Program</a></li>
            <li className='pb-4 hover:text-purple-600'><a href='#'>For Developers</a></li>
            <li className='hover:text-purple-600'><a href='#'>Careers</a></li>
        </ul>
    </div>
    {/* Have Questions */}
        <div className='flex-col'>
            <h2 className='text-[#686d74] font-bold text-lg'>Have Questions?</h2>
            <ul className='text-lg py-3'>
                <li className='pb-4 hover:text-purple-600'><a href='#'>Help Center</a></li>
                <li className='pb-4 hover:text-purple-600'><a href='#'>StubHub Community</a></li>
                <li className='hover:text-purple-600'><a href='#'>Gift Cards</a></li>
            </ul>
        </div>

        {/* Live events  */}
        <div className='flex-col'>
            <h2 className='text-[#686d74] font-bold text-lg mb-4'>Live Events all over the world</h2>
           <div><button className='border rounded-xl mb-5 px-4 text-left font-medium py-3 w-full text-gray-500'>United States</button></div>
            <div><button className='border rounded-lg px-4 py-6  w-full text-gray-500 text-left'>English (US) <br/><hr className="border border-gray-400 my-2"/>INR Indian Rupee</button></div>
        </div>
    </div>
    <hr/>
<div className='w-full mt-5 pb-10'>
<p className='text-[0.80rem] font-medium text-[#677383] py-5'>© 2000-2025 StubHub. All Rights Reserved. Use of this website signifies your agreement to our <a href="#" className="text-[#006cb4d4]">User Agreement</a>,<a href="#" className="text-[#006cb4d4]">Privacy Notice </a> and <a href="#" className="text-[#006cb4d4]">Cookie Notice </a> . You are buying tickets from a third party StubHub is not the ticket seller. Prices are set by sellers and may be above face value. User Agreement change notifications<a href="#" className="text-[#006cb4d4]">Do Not Share My Personal Information/Your Privacy Choices</a> </p>
  </div>
</div> 
</footer>
    </div>
  )
}

export default Footer