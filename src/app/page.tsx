/* eslint-disable @next/next/no-img-element */
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { CiCalendar } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../components/Footer"
import Trending from "@/components/Trending";
import Recommend from "@/components/Recommended";
import Concerts from "@/components/Concerts";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top banner */}
      <div className="text-center text-[#677383] text-sm p-1 font-normal leading-[18px]">
        <p>StubHub is the world&apos;s top destination for ticket buyers and resellers. Prices may be higher or lower than face value.</p>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="flex-1">
        {/* Hero banner */}
        <div className="w-full h-[26rem] px-10 mt-6">
          <HeroBanner />
        </div>

       
        <div className="w-full px-10 mt-10">
          <div className="text-sm p-1 font-bold leading-[18px]">Explore events in</div>
          <div className="mt-4 flex gap-3">
            <button className="h-9 flex gap-1 items-center rounded-full p-2 bg-[#6535BE] text-white">
              <FaLocationArrow />Use my location
            </button>
            <button className="h-9 rounded-full border-customPurple border px-5 flex items-center bg-[#EEE0FF] text-[#6535BE]">
              <IoLocationOutline /> Chennai
            </button>
            <button className="h-9 rounded-full px-5 flex items-center gap-1 bg-white border border-gray-500 text-gray-500">
              <CiCalendar /> All dates
            </button>
          </div>

          {/* Spotify section */}
          <div className="w-full h-24 rounded-xl px-10 flex items-center justify-center mt-10 bg-black">
            <img src="/images/spotify-logo.png" alt="Spotify Logo" className="w-28" />
            <div className="mx-4">
              <p className="font-bold text-white">Connect your Spotify account and sync your favorite artists</p>
              <p className="text-sm text-white">Discover events from who you actually listen to</p>
            </div>
            <button className="h-9 flex gap-1 items-center rounded-full px-4 bg-[#1DD75F] text-black font-medium text-sm">
              Connect Spotify
            </button>
          </div>

          {/* Card sections */}
          <div className="mt-16 space-y-12">
            <Trending />
            <Recommend />
            <Concerts/>
        
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className="mt-20">
        {/* App download banner */}
        <div className="w-full px-10 mb-10">
          <div className="h-44 w-full px-10 flex items-center justify-between rounded-xl" 
               style={{ backgroundImage: 'url(/images/app-install-banner.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
              <h2 className="text-3xl font-bold text-[#2F343B]">
                Download the Stubhub<br/> app
              </h2>
              <p className="text-[#2F343B] py-1 text-md">
                Discover your favorite events with ease
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-20 py-6 rounded-lg" 
                      style={{ backgroundImage: 'url(/images/apple-store.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </button>
              <button className="px-20 py-9 rounded-lg" 
                      style={{ backgroundImage: 'url(/images/google-store.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </button>
              <img src="/images/qr.webp" className="size-24" alt="qr-code" />
            </div>
          </div>
        </div>
        
        <Footer/>
      </footer>
    </div>
  );
}


