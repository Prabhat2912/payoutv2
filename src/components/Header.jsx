import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row px-[32px] py-[12px] gap-x-[16px]  justify-start items-center border-2 border-gray-200 w-[1275px]">
      <h1>Payments</h1>
      <div className="flex flex-row gap-x-[6px] w-full ">
        <img src="/Help.png" alt="" />
        <p className="text-[12px]">How it works</p>
      </div>
      <div className="flex flex-row  items-center px-[16px] py-[9px] bg-gray-100 space-x-2 rounded-md   ">
        <img src="/search.png" alt="icon" className="absolute " />
        <input
          type="text"
          placeholder="Search..."
          className="px-[16px] outline-none bg-transparent w-[400px] "
        />
      </div>
      <div className="flex flex-row gap-[12px] items-center justify-end w-full   ">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex p-3">
          {" "}
          <img src="/Group.png" alt="icon" />
        </div>
        <img
          src="/public/Menu.png"
          alt="icon"
          width={40}
          height={40}
          className="bg-gray-300 rounded-full "
        />
      </div>
    </header>
  );
};

export default Header;
