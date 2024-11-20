import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
   
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
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
  );
}