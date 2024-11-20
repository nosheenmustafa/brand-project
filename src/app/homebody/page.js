
'use client';
import Header from '../header/page';
import Headersm from '../headersm/page.js';
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { MdInventory } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import SimpleSlider from '../itemssm/page.js';
import HomeandOut from '../homeandoutdoorsm/page.js';

// import { RiArrowDropUpLine } from "react-icons/ri";
import { TbBrandHtml5, TbUserFilled ,TbMessageFilled} from "react-icons/tb";
import { FaFacebookF ,FaTwitter ,FaLinkedinIn, FaInstagram , FaYoutube, FaApple , FaGooglePlay} from "react-icons/fa";


export default function BodyHome() {
  const [selectedLanguage, setSelectedLanguage] = useState('Select Language');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: 'English', image: '/f3.png' },
    { name: 'Spanish', image: '/f4.png' },
    {name:'America', image:'/f5.png'}
    // Add more languages and images here
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language.name);
    setIsOpen(false);
  };
  return (
    <div className="overflow-hidden">
<h1>This is random text just to assure that git to upload the data successfully</h1>
     <div className="hidden md:block "> <Header/></div>
     <div className="block md:hidden"><Headersm/></div>
      <div  className="bg-slate-100  border-t-2 border-gray-200">
      <div className="pt-8">  
     <div className="md:text-sm lg:text-base  md:mx-12 flex md:gap-8  bg-white border-2 border-gray-200 p-2 md:p-4   md:h-[420px] ">
         <div className="w-1/4 hidden md:block">
            <ul className="leading-loose">
              <li>Automobiles</li>
              <li>Clothes and Wears</li>
              <li>Home interior</li>
              <li>Compputers and tech</li>
              <li>Tools and equipment</li>
              <li>supports and outdoor</li>
              <li>Animals and pets</li>
              <li>Machinery Tools</li>
              <li>More Category</li>
            </ul>
         </div>
         <div className="w-full md:w-3/5 overflow-x-hidden bg-cover bg-no-repeat md:bg-center h-full" style={{ backgroundImage: "url(./banner.png)" }}>

            <div className="p-6  pt-8 leading-tight">
               <span><p>Latest Trending</p>
               <b className="text-2xl font-bold">Electronic Items</b></span><br></br>
               <button className="bg-white text-black rounded-md px-2 py-1 mt-4">Learn more</button>
            </div>
         </div>
        <div  className="w-1/3 flex flex-col hidden md:block">
          <div  className=" bg-blue-100 rounded-md p-4">
             <span className="flex gap-6  ">
              <img src="parrot.jpg" alt="img description" width="40px" height="40px" className="rounded-full"/>
              <p className="font-bold">Hi, user <br></br>lets get started</p>
             </span>
             <button type="submit"  className="mt-4 bg-blue-600 text-white rounded-md text-center px-4 py-2  w-full">join now</button> 
             <button type="submit" className="mt-2 bg-white text-blue rounded-md text-center px-4 py-2  w-full">Login now</button> 
          </div> 
          <div  className="bg-orange-400  rounded-md p-4 mt-2">
              Get US $10 off <br></br>with a new <br></br>supplier
          </div>
          <div className="bg-blue-400  rounded-md p-4 mt-2">
              Send quotes with supplier preferences
          </div>
        </div>
      </div>
      <div  className=" md:flex mx-0 md:mx-12 bg-white mt-6 md:rounded-lg  md:border-2 border-gray-200">
      <div className="flex md:flex-col p-2 md:p-4 border-r-2 border-gray-200 w-full md:w-1/3">
        <div className="flex md:flex-col justify-between  w-full">
        <div className="font-bold text-sm md:text-base">Deals and offers
       <p className="text-gray-400 flex md:text-base text-sm">Hygiene Equipments</p>
       </div>
        
        <div className="flex gap-2 md:mt-4 md:text-base text-sm">  
          <span className="bg-gray-200 md:bg-gray-600 rounded-md   md:p-2 md:w-[60px] p-1 flex flex-col text-center text-gray-400 md:text-white">
            <span><b>04</b></span>
            <span>Days</span>
          </span>
          <span className="bg-gray-200 md:bg-gray-600 rounded-md   md:p-2 md:w-[60px] p-1 flex flex-col text-center text-gray-400 md:text-white">
            <span><b>13</b></span>
            <span>Hour</span>
          </span>
          <span className="bg-gray-200 md:bg-gray-600 rounded-md   md:p-2 w-[40px] md:w-[60px] p-1 flex flex-col text-center text-gray-400 md:text-white">
            <span><b>34</b></span>
            <span>Min</span>
          </span>
          <span className="bg-gray-200 md:bg-gray-600 rounded-md   md:p-2 w-[40px] md:w-[60px] p-1 flex flex-col text-center text-gray-400 md:text-white">
            <span><b>56</b></span>
            <span>Sec</span>
          </span>
        </div>
        </div>
       </div>
       
       <div className=" hidden md:flex mt-2 ">
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="watch.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="laptop.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -15%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="camera.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -40%
           </span>

       </div>
       <div className="text-center p-4 border-r-2 border-gray-200 w-1/4">
           <img  src="headphone.png" width="100px" height="100px" className="m-auto"/>
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div>
       <div className="text-center p-4   w-1/4">
           <img  src="phone.png" width="100px" height="100px" className="m-auto" />
           <p>Smart Watches</p>
           <span  className="rounded-full bg-red-200 px-2 py-1 text-red-600 font-bold text-sm">
            -25%
           </span>

       </div></div>
      <div className=" border-2 border-y-gray-200 md:hidden" ><SimpleSlider /></div>

      </div>
      </div>
      {/* home and outdoor on small screens */}
      <div className=" md:hidden "><HomeandOut/></div>
      {/* home and dec div here start */}
      <div  className="hidden md:flex parent  border-2 border-gray-200 mx-12 flex h-80 mt-8 mb-8">
      <div className="bg-cover bg-no-repeat  p-4 leading-loose w-1/3" style={{backgroundImage:"url(source.png)"}}><b  className="font-bold text-lg">Home and <br/>outdoor</b><br/>
           <button className="rounded-md bg-white text-black px-2 py-1">Source Now</button>
         </div>
         <div className="secondportion w-full bg-white">
             <div  className="flex h-40">
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="chair.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>

<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="lamp.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="gdda.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-r-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="matti.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
             </div>
             <div className="flex h-40">
             <div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="juicer.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="blender.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="brown.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 border-b-0 border-r-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="plant.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
             </div>
         </div>
      </div>
      {/* consumer and electroinc potion */}
      <div  className="md:flex hidden parent  border-2 border-gray-200 mx-12 flex h-80 mt-8 mb-8">
      <div className="bg-cover bg-no-repeat  p-4 leading-loose w-1/3" style={{backgroundImage:"url(consumer.png)"}}><p>Consumer<br/> electronics and <br/>gadgets</p><br/>
           <button className="rounded-md bg-white text-black px-2 py-1">Source Now</button>
         </div>
         <div className="secondportion w-full bg-white">
             <div  className="flex h-40">
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="watch.png" alt="chairdescription" className="self-end  -mt-4 w-1/1 h-1/2"/>
</div>

<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="camera.png" alt="chairdescription" className="self-end  -mt-4 w-1/1 h-1/2"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="headphoneb.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-r-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="theorms.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
             </div>
             <div className="flex h-40">
             <div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="headphone.png" alt="chairdescription" className="self-end  -mt-4 w-1/1 h-1/2"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="laptop.png" alt="chairdescription" className="self-end  -mt-4 w-1/1 h-1/2"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0  border-b-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="tablet.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
<div className="border border-gray-200 p-2 pt-4 w-1/4 border-t-0 border-b-0 border-r-0 flex flex-col justify-between items-start">
    <p>
        Soft chairs<br />
        <span className="text-gray-400">From USD<br />19</span>
    </p>
    
    <img src="eletric.png" alt="chairdescription" className="self-end  -mt-4"/>
</div>
             </div>
         </div>
      </div>
      {/* form data div */}
      <div  className="border-2 rounded-md mx-0 md:mx-12 flex bg-cover bg-no-repeat justify-between" style={{backgroundImage:"url(bluebg.png)"}}>
        <div className="  w-1/2 p-8">
            <h4 className="text-white text-lg md:text-2xl leading-tight">An easy way to send<br/> requests to all suppliers</h4>
           <p className="font-thin text-white mt-2 text-sm md:flex hidden">This is dummy text about loream ipsum in<br/> the easy so this is filling text nothing importan tin it</p>
           <button className="mt-2 p-2 rounded-md bg-blue-600 text-white">Send Inquiry</button>
        </div>
        <div className="hidden md:flex text-black bg-white p-4 w-1/3  m-6 rounded-md formdiv">
           <form>
           <p>Send quotes to supplier</p>
           <input  type="text" placeholder="what item you need?" className="p-2 focus:outline-none placeholder:text-black border-2 border-gray-200 rounded-md mt-2 w-full" />
           <textarea  placeholder="Type more details" className="border-2 border-gray-200   rounded mt-2 focus:outline-none w-full p-2">
           </textarea>
           <div className="flex gap-2 " >
                <input  type="text" placeholder="Quantity" className="placeholder:text-black focus:outline-none border-2 border-gray-200 p-2 rounded-md "/>
                <select  className="p-2  pr-8   focus:outline-none border-2 border-gray-200 rounded-md">
                    
                    <option value="">pcs</option>
                    <option>tcs</option>
                    <option>mcs</option>
                </select>
                
            </div>
            <button  className="py-2  px-4 bg-blue-600 text-white mt-4 rounded-md">Send inquiry</button>
              
           
           </form>
        </div>
      </div>
      {/* //recommend items div */}
      <div className="mx-2  md:mx-12 my-4">
    <p className="font-bold my-4">Recommend items</p>
    <div className="flex flex-wrap md:flex-nowrap justify-between  md:gap-6">
        <div className="w-full  sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="ra.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rb.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">Jeans shorts for men, blue colors</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rc.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rd.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full  hidden md:block mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="re.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
    </div>
    <div className="flex flex-wrap  md:flex-nowrap md:gap-6 mt-6">
        <div className="w-full sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rf.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rg.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">Jeans shorts for men, blue colors</p>
        </div>
        <div className="w-full sm:w-1/2  mt-4  md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="re.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4 md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="ri.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
        <div className="w-full  mt-4  hidden md:block md:w-1/5 border-2 border-gray-200 bg-white p-4 rounded-md">
            <img src="rj.png" alt="Product Image"/>
            <p className="font-bold">$10.30</p>
            <p className="text-gray-400">T-Shirts with multiple colors, for men</p>
        </div>
    </div>
</div>

      {/* extra services */}
      <div className=" mx-2 md:mx-12"><p  className="my-4 font-bold">Our extra services</p></div>
      <div className="mx-12 flex flex-wrap md:flex-nowrap md:gap-4">
        
        
        <div className="  border-2 border-gray-200 w-full sm:w-1/2  md:w-1/4">
        <img src="e1.png" className="w-full"/>
        <IoMdSearch  className="text-6xl flex  bg-blue-200 rounded-full border-2 border-white p-4 -mt-6 ml-auto mr-4"/>
        <p className="p-4 font-bold">Source from Industry Hubs</p>
        </div>
        <div className="  border-2 border-gray-200 w-full sm:w-1/2  mt-2 md:w-1/4">
        <img src="e2.png" className="w-full"/>
        <MdInventory  className="text-6xl flex  bg-blue-200 rounded-full border-2 border-white p-4 -mt-6 ml-auto mr-4"/>
        <p className="p-4 font-bold">Source from Industry Hubs</p>
        </div>
        <div className="  border-2 border-gray-200 w-full sm:w-1/2   mt-2 md:w-1/4">
        <img src="e3.png" className="w-full"/>
        < IoMdSend   className="text-6xl flex  bg-blue-200 rounded-full border-2 border-white p-4 -mt-6 ml-auto mr-4"/>
        <p className="p-4 font-bold">Source from Industry Hubs</p>
        </div>
        <div className="  border-2 border-gray-200 w-full sm:w-1/2  mt-2 md:w-1/4">
        <img src="e4.png" className="w-full"/>
        <MdOutlineSecurity  className="text-6xl flex  bg-blue-200 rounded-full border-2 border-white p-4 -mt-6 ml-auto mr-4"/>
        <p className="p-4 font-bold">Source from Industry Hubs</p>
        </div>

      </div>
      {/* suppliers div */}
      <div className="mx-4 md:mx-12 my-6"><p className="font-bold text-lg ">Suppliers by region </p></div>
      <div className=" mx-4 md:mx-12">
        <div className="flex flex-wrap md:flex-nowrap md:gap-4 mt-6">
      <div className="flex md:gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f1.png" className="w-auto h-auto object-contain"/>
        <span  className="leading-tight"><p className="font-bold text-lg">Arabic Emirates</p>
          <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex md:gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f2.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex md:gap-4 w-full  sm:w-1/2 md:w-1/5">
        <img src="f3.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex md:gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f4.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex md:gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f5.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:gap-4 mt-6">
      <div className="flex gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f6.png" className="w-auto h-auto object-contain"/>
        <span  className="leading-tight"><p className="font-bold text-lg">Arabic Emirates</p>
          <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f7.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f8.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f9.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      <div className="flex gap-4 w-full sm:w-1/2 md:w-1/5">
        <img src="f10.png" className="w-auto h-auto object-contain"/>
        <span className="leading-tight">
        <p className="font-bold text-lg">Arabic Emirates</p>
        <p className="text-gray-400">shopname.se</p>
        </span>
      </div>
      </div>
     
    </div>
    {/* //Subscribe section */}
    <div className="bg-gray-200 mt-4 text-center">
      <div>
        <p className="pt-4 font-bold">Subscribe on our newsletter</p>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex gap-2 justify-center py-4">
        <span className="flex bg-white rounded-md w-1/6  px-2 py-1 gap-2 ">
           <MdOutlineMail className=" text-2xl my-auto text-gray-400"/>
           <input type="email" placeholder="Email"  className="  focus:outline-none bg-transparent" />
           
       </span>
       <button className="px-4 py-2 rounded-md text-white bg-blue-600">Subscribe</button>
        </div>
      </div>
    </div>
    {/* last div of home page */}
    <div className="mt-4 sm:flex-wrap md:flex flex-nowrap  px-2 md:px-12 ">
    <div className="w-full sm:w-1/2  w-full md:w-[30%] ">
    <div className="flex gap-2 mb-3">
    <TbBrandHtml5 className="bg-blue-400 px-1 py-1 text-4xl rounded-md" />
    <span className="text-blue-400 font-bold text-2xl">Brand</span><br/>
  </div>
  <span >Best information about the company gies here but now lorem ipsum is</span>
    <div className="flex gap-3 mt-3">
      <FaFacebookF className="text-4xl p-2  rounded-full bg-gray-400 text-white" />
      <FaTwitter className="text-4xl p-2  rounded-full bg-gray-400 text-white" />
      <FaLinkedinIn className="text-4xl p-2  rounded-full bg-gray-400 text-white" />
      <FaInstagram className="text-4xl p-2  rounded-full bg-gray-400 text-white" />
      <FaYoutube className="text-4xl p-2  rounded-full bg-gray-400 text-white" />
    </div></div>
      <div className="md:w-[70%] w-full   flex-wrap md:flex  ">   
          <div className="w-full sm:w-1/2 md:w-1/5">
          <ul className="text-gray-400">
      <li className="text-black font-bold">About</li>
      <li>About Us </li>
      <li>Find store</li>
      <li>Categories</li>
      <li>Blogs</li>
    </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5">
          <ul className="text-gray-400">
      <li className="text-black font-bold">Patnership</li>
      <li>About Us </li>
      <li>Find store</li>
      <li>Categories</li>
      <li>Blogs</li>
    </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5"> 
          <ul className="text-gray-400">
      <li className="text-black font-bold">Information</li>
      <li>Help us </li>
      <li>Money Refund</li>
      <li>Shipping</li>
      <li>Contact Us</li>
    </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5">
          <ul className="text-gray-400">
      <li className="text-black font-bold">For Users</li>
      <li>Help us </li>
      <li>Money Refund</li>
      <li>Shipping</li>
      <li>Contact Us</li>
    </ul>

          </div>
          <div className="w-full sm:w-1/2 md:w-1/5">
          <ul className="text-gray-400">
      <li className="text-black font-bold">Get App</li>
      <li className=" flex gap-2 text-white bg-black rounded-md px-2 py-1">
      <FaApple className="h-auto text-2xl" />
      <span className="leading-none">
        <p className="text-xs ">Download on the</p>
        <p className=" text-base md:text-lg text-nowrap">App Store</p>
      </span>
      </li>
      <li className="mt-2 flex gap-2 text-white bg-black rounded-md px-2 py-1">
      <FaGooglePlay className="h-auto text-2xl" />
      <span className="leading-none">
        <p className="text-xs">Get it on</p>
        <p className="text-base md:text-lg ">Google Play</p>
      </span>
      </li>
    </ul>
          </div>
      </div>
    </div>

<div className="footer  mx-4 md:mx-12 py-4 ">
     <div className="flex justify-between">
      <p>@2023 Ecommerce</p>
      
      <div className="relative w-48">
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 text-left bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
      >
        {selectedLanguage}
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((language) => (
            <div
              key={language.name}
              onClick={() => selectLanguage(language)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              <img src={language.image} alt={language.name} className="w-5 h-5 mr-2 object-contain" />
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  



      
      </div>
</div>
      </div>
      
      
    </div>
  );
  
}
