import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
export default function HomeandOut(){
  var settings = {
   
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return(
    <>
    <div className="mt-2 bg-white">
      <div className="px-2 py-4 font-bold text-lg">
          <p>Home and Outdoor</p>
      </div>
       <Slider {...settings}  className="border-2 border-t-gray-200">
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
             
       </Slider>
       <div className="flex gap-2  px-2 py-4 font-bold text-lg text-blue-400 "><Link href="source">Source Now</Link><FaArrowRight className="h-auto"/></div>
       

       
    </div>
    {/* // consumer electronics div start here */}
    <div>
      
      <div className="mt-4 bg-white">
      <div className="px-2 py-4 font-bold text-lg">
          <p>Consumers electronics</p>
      </div>
       <Slider {...settings}  className="border-2 border-t-gray-200">
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
             
       </Slider>
       <div className="flex gap-2  px-2 py-4 font-bold text-lg text-blue-400 "><Link href="source">Source Now</Link><FaArrowRight className="h-auto"/></div>
    </div>

    </div>
    </>
    
  );
}