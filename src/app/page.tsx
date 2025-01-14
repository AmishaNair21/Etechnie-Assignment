import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";


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
<div className="w-full h-screen px-10 mt-10 bg-[#F8F8F8] rounded-md p-10">
  <div className=" text-sm p-1 font-bold leading-[18px]">Explore events in</div>
 <div className="mt-4">
 <button className="h-9 mr-2 rounded-full px-4 bg-[#6535BE] text-white">Use my location</button>
  <button className="h-9 mr-3 rounded-full px-5 bg-[#EEE0FF] text-[#6535BE]">Chennai</button>
  <button className="h-9 rounded-full px-5 bg-white text-black">my dates</button>
 </div>
</div>
   </div>
   
  );
}
