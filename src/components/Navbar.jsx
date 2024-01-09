import React from "react";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { AiOutlineAppstore } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdCampaign } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { SlCursor } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
function Navbar() {
  return (
    <div className=" flex flex-col w-full h-[1482px] items-center py-[16px] px-[10px] bg-[rgb(30,38,64)] min-w-[220px]  text-white  border-2 border-gray-200">
      <div className="flex flex-row gap-4 items-end ">
        {" "}
        <a href="#">
          <img src="/Image.png" width={80} />
        </a>
        <div className="flex flex-col">
          <h3>Nishyan</h3>
          <a href="#" className="underline underline-offset-4 ">
            Visit Store
          </a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
            fill="white"
          />
        </svg>
      </div>

      <ul className="mt-10  w-full  flex flex-col items-start text-[14px] ">
        <li className=" flex flex-row items-center gap-[12px] mt-2 hover:bg-[#353C53] w-full px-[16px] py-[8px] rounded-md hover:cursor-pointer ">
          <img src="/NavbarIcon.png" alt="icon" />
          Home
        </li>
        <li className="flex flex-row items-center gap-[12px] mt-2 w-full hover:bg-[#353C53] px-[16px] py-[8px] rounded-md hover:cursor-pointer ">
          <img src="/2.png" alt="icon" />
          Orders
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] flex w-full flex-row items-center gap-[12px] rounded-md hover:cursor-pointer ">
          <img src="/3.png" alt="icon" />
          Products
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] flex w-full flex-row items-center gap-[12px] rounded-md hover:cursor-pointer ">
          <img src="/4.svg" alt="icon" />
          Delivery
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/5.svg" alt="icon" />
          Marketing
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/6.svg" alt="icon" />
          Analytics
        </li>

        <li className="mt-2 hover:bg-[#353C53] w-full px-[16px] py-[8px] rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/8.svg" alt="icon" />
          Payments
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] rounded-md w-full hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/9.svg" alt="icon" />
          Tools
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/10.svg" alt="icon" />
          Discounts
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/11.svg" alt="icon" />
          Audience
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/12.png" alt="icon" />
          Appearance
        </li>
        <li className="mt-2 hover:bg-[#353C53] px-[16px] py-[8px] w-full rounded-md hover:cursor-pointer flex flex-row items-center gap-[12px] ">
          <img src="/13.png" alt="icon" />
          Plugins
        </li>
      </ul>
      <div className=" flex flex-row flex-wrap gap-x-[12px] absolute bottom-10  py-[6px] px-[12px] rounded-md bg-[#353C53] w-3/4 ">
        <img src="/wallet.svg" alt="icon" />
        <p>Available credits</p>
        <div className="flex justify-center items-center w-full">
          <h5>222.10</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
