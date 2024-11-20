import { IoIosMenu } from "react-icons/io";
import { TbBrandHtml5 ,TbUserFilled} from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
export default function Headersm() {
  return(
    <>
      <div className="flex justify-between mx-4 my-2">
      <div className="flex gap-4">
       <IoIosMenu  className="h-auto text-2xl" /> 
       <div className="flex gap-2 my-auto">
    <TbBrandHtml5 className="bg-blue-400 px-1 py-1 text-4xl rounded-md" />
    <span className="text-blue-400 font-bold text-2xl">Brand</span>
  </div>
       </div>
       <div className="flex gap-4 my-auto h-auto text-2xl">
     <CiShoppingCart />
     <TbUserFilled/>
       </div>

      </div>
      <div className="bg-gray-200 mx-4  my-2 p-2 border-2 border-gray-200 rounded-md flex gap-2">
           <CiSearch className="h-auto text-xl font-extrabold text-gray-400"/>
           <input type="search" placeholder="search" className="focus:outline-none bg-transparent" /> 
      </div>
      <div>
          <ul className="flex  gap-2 mx-4 my-2 mt-4 text-nowrap ">
            <li className="bg-gray-100 p-2 px-4 rounded-md text-blue-400 font-bold"><Link href="/categories">All category</Link></li>
            <li className="bg-gray-100 p-2 px-4 rounded-md  text-blue-400 font-bold"><Link href="/categories">Gadgets</Link></li>
            <li className="bg-gray-100 p-2 px-4 rounded-md  text-blue-400 font-bold"><Link href="/categories">Clothes</Link></li>
            <li className="bg-gray-100 p-2 px-4 rounded-md  text-blue-400 font-bold"><Link href="/categories">Accessories</Link></li>
            
          </ul>
      </div>
    </>
  );
}