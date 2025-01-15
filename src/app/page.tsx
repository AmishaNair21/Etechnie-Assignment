/* eslint-disable @next/next/no-img-element */
import { CarouselSpacing } from "@/components/Card";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { CiCalendar } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


export default function Home() {
  return (
   <div className="flex flex-col items-center">
<div className="text-center text-[#677383] text-sm p-1  font-normal leading-[18px]"><p>StubHub is the world&apos;s top destination for ticket buyers and resellers. Prices may be higher or lower than face value. </p></div>
{/* navbar */}
<Navbar/>


{/* hero-banner */}
<div className="w-full h-[26rem] px-10 mt-6">
<HeroBanner/>
</div>

{/* coming soon */}
<div className="w-full h-screen px-10 mt-10  rounded-md p-10">
  <div className=" text-sm p-1 font-bold leading-[18px]">Explore events in</div>
 <div className="mt-4 flex gap-3">
 <button className="h-9 flex gap-1 items-center rounded-full p-2 bg-[#6535BE] text-white"><FaLocationArrow />Use my location</button>

  <button className="h-9  rounded-full border-customPurple border px-5 flex items-center bg-[#EEE0FF] text-[#6535BE]"><IoLocationOutline /> Chennai</button>
  <button className="h-9 rounded-full px-5 flex items-center gap-1 bg-white border border-gray-500 text-gray-500"><CiCalendar /> All dates</button>
 </div>

 <div className="w-full h-24 rounded-xl px-10 flex items-center justify-center mt-10 bg-black">
  <img src="/images/spotify-logo.png" alt="Spotify Logo" className="w-28 "/>
  <div className="mx-4">
    <p className=" font-bold text-white">Connect your Spotify account and sync your favorite artists</p>
   <p className="text-sm text-white">Discover events from who you actually listen to</p>
  </div>
  <button className="h-9 flex gap-1 items-center rounded-full px-4 bg-[#1DD75F] text-black font-medium text-sm">Connect Spotify</button>

</div>

{/* upcoming events */}
<div className=" mt-16 h-60 bg-red-700">
  <CarouselSpacing/>
</div>
</div>




{/* footer */}
<div className="h-44 w-full px-10">
<div className="h-44 w-full px-10 flex items-center justify-between rounded-xl" style={{ backgroundImage: 'url(/images/app-install-banner.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className=""><h2 className="text-3xl font-bold text-[#2F343B]">Download the Stubhub<br/> app</h2>
<p className="text-[#2F343B] py-1 text-md">Discover your favorite events with ease</p></div>
<div className="flex items-center gap-3">
  <button className="px-20 py-6 rounded-lg " style={{ backgroundImage: 'url(/images/apple-store.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></button>
  <button className="px-20 py-9 rounded-lg " style={{ backgroundImage: 'url(/images/google-store.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></button>
  <img src="/images/qr.webp" className="size-24" alt="qr-code"/>
</div>
</div>

<footer className=" w-full mt-10">
<div className="flex-col justify-center text-center items-center">
<p className="font-bold text-md pb-3">Get hot events and deals delivered straight to your inbox</p>
<div>
  <input type="text" placeholder="Email Address" className="text-md border-b py-3 px-4 mx-5 text-gray-600"/>
  <button className="h-12 w-32 border rounded-lg  border-customPurple text-customPurple font-normal hover:bg-[#EEE0FF]">Join The List</button>
</div>
<p className="text-gray-500 py-5">By signing up, you acknowledge and accept our <a href="#" className="text-[#08A1E0]">privacy policy</a> and consent to receiving emails. </p>
  </div>
  <hr className="mt-14"/>
</footer>
<Footer/>
</div>






   </div>
   
  );
}
