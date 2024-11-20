'use client'
import { TbBrandHtml5, TbUserFilled ,TbMessageFilled} from "react-icons/tb";
import { HiMiniHeart ,HiBars3 } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { FaFontAwesomeFlag } from "react-icons/fa";
import {useState} from 'react';

export default function Header(){
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [isOpen, setIsOpen] = useState(false);

  const Categories = [
    {name:'Clothes'},
    {name:'Watches'},
    {name:'Fashion'},
    {name:'Cosmetics'},
    {name:'Brands'}
  ]

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCategory = (category) => {
    setSelectedCategory(category.name); // Corrected this line
    setIsOpen(false);
  }
  // section for all category 2
  const[selectedCategoryb, setSelectedCategoryb] = useState('All Category');
  const[isOpenb, setisOpenb] = useState(false);
  const categoriesb = [
    {name:'Bangles'},
    {name:'heels'},
    {name:'Jewlery'}
  ]
  const toggleDropDownb = () => setisOpenb(!isOpenb);
  const selectCategoryb = (categoryb) => {
    setSelectedCategoryb(categoryb.name);
    setisOpenb(false);
  }
  return(
    <div className="d-none md:block ">
      <div className=" text-sm border-b-2 border-gray-200 pb-8"><div className="flex justify-between mx-12 mt-6 ">
  <div className="flex gap-2 my-auto">
    <TbBrandHtml5 className="bg-blue-400 px-1 py-1 text-4xl rounded-md" />
    <span className="text-blue-400 font-bold text-2xl">Brand</span>
  </div>
  <div className="border-2 border-blue-400 rounded-lg  w-[50%]">
    <div className="flex justify-between">
      <input type="search" placeholder="search" className="pl-4 border-none w-full focus:outline-none" />
      <span className="flex">
       <button className="text-nowrap  border-t-0  border-b-0 border-r-0 border-2 border-l-blue-400 pl-2" onClick={toggleDropdown}>{selectedCategory}</button>
       {isOpen && (
        <div className="absolute w-32 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {Categories.map((category) => (
            <div
              key={category.name}
              onClick={() => selectCategory(category)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      )}
        <button className="bg-blue-400 px-4  py-3 rounded-r-lg ml-4 text-white w-32 ">Search</button>
      </span>
    </div>
  </div>
  <div>
    <ul className="flex gap-4 text-gray-600">
      <li className="flex flex-col items-center justify-center text-center">
        <TbUserFilled className="text-2xl" />
        <span>Profile</span>
      </li>
      <li className="flex flex-col items-center justify-center text-center">
        <TbMessageFilled className="text-2xl" />
        <span>Message</span>
      </li>
      <li className="flex flex-col items-center justify-center text-center">
        <HiMiniHeart className="text-2xl" />
        <span>Orders</span>
      </li>
      <li className="flex flex-col items-center justify-center text-center">
        <CiShoppingCart className="text-2xl" />
        <span>Cart</span>
      </li>
    </ul>
  </div>
</div></div>

<div className="-mb-6  -mt-4">
  <ul  className="flex justify-between my-6    py-2 mx-12">
    <div className="flex gap-4 font-bold ">
    <li className="flex  items-center gap-2"><HiBars3/><button onClick={toggleDropDownb}>{selectedCategoryb}</button>
      {isOpenb && (
        <div className="absolute w-32 mt-2 bg-white border-2 border-gray-300 rounded-md shadow-lg">
          {categoriesb.map((categoryb) =>
             <div key={categoryb} onClick={() => selectCategoryb(categoryb)} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 ">
              <span>{categoryb.name}</span>
            </div>
        )}

        </div>
      )}
    </li>
    <li>Hot offers</li>
    <li>Gift boxes</li>
    <li>Projects</li>
    <li>Menu item</li>
    <li>
      <select className="w-[70px]">
        <option>Help</option>
        <option>Call us</option>
        <option>Query here</option>
      </select>

    </li>
    </div>
    <div className="flex font-bold gap-4">
      <li>
        <select>
          <option>English,USD</option>
          <option>item second</option>
          <option>item third</option>
        </select>
      </li>
      <li>
        <select>
          <option>ship to <FaFontAwesomeFlag /></option>
          <option>Austraila</option>
          <option>Canda</option>
        </select>
      </li>
    </div>
  </ul>
</div>
   </div>
  );
}