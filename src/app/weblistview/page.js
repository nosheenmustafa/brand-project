import Header from '../header/page.js'
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';
export default function WebListView(){
  return(
    <>
       <Header/>
       <div  className="bg-gray-100">
          <div className="mx-12">
               <ul className="flex gap-2 text-gray-400">
                  <li className="flex gap-1"><Link  href="/home">Home </Link><FaAngleRight className="my-auto text-sm"/></li>
                  <li className="flex gap-1"><Link href="/cloting">Clothing</Link><FaAngleRight className="my-auto text-sm"/></li>
                  <li className="flex gap-1"><Link href="/mens">Men's Wear</Link><FaAngleRight className="my-auto text-sm"/></li>
                  <li className="flex gap-1"><Link href="/summer">Summer Clothing</Link><FaAngleRight className="my-auto text-sm"/></li>
               </ul>
          </div>
          {/* Main div of category and mobile accessories */}

          <div className="flex mx-12 parent border-2 border-red-400 gap-2 ">
              <div className="w-[30%] category-div border-2 border-yellow-600">A</div>
              <div className="w-[70%] mobile-accessories border-2 border-pink-400">B</div>
          </div>
       </div>
    </>
  );
}