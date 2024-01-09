import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Body() {
  const OrdersTable = () => {
    // Sample data
    const orders = [
      {
        orderId: 1,
        orderDate: "2022-01-01",
        orderAmount: 100.0,
        transactionFees: 2.0,
      },
      {
        orderId: 2,
        orderDate: "2022-02-01",
        orderAmount: 150.0,
        transactionFees: 3.0,
      },
      // Add more orders as needed
    ];
  };

  return (
    <div className="flex flex-col justify-center px-[44px] py-[40px] items-center bg-gray-100  min-w-[750px] ">
      <div className="flex flex-row justify-between w-full mb-[24px] ">
        <h2 className="text-[20px] font-medium ">Overview</h2>

        <select name="Year" id="" className="outline-none p-2 rounded-md ">
          <option value="">This week</option>
          <option value="">This month</option>
          <option value="">This year</option>
        </select>
      </div>
      <div className="flex flex-row w-full gap-[20px] mb-[32px] ">
        <div className="flex flex-col w-1/2 gap-[16px] bg-white rounded-md p-[20px] ">
          <p className="text-[16px] w-full ">Online Orders</p>
          <h2 className="font-medium text-[32px] ">231</h2>
        </div>
        <div className="flex flex-col w-1/2 gap-[16px] bg-white rounded-md p-[20px] ">
          <p className="text-[16px] w-full ">Amount received</p>
          <h2 className="font-medium text-[32px] ">₹23,92,312.19</h2>
        </div>
      </div>
      <div className="mb-[20px]  w-full ">
        <p>Transactions | This Month</p>
      </div>

      <div className="flex flex-col bg-white w-full rounded-md  ">
        <div className=" px-[16px] py-[10px] flex flex-row  justify-between ">
          {" "}
          <div className="border-2 border-gray-100 flex items-center space-x-3 px-2 rounded-md  ">
            <img src="/Search1.png" alt="icon" className="relative" />
            <input
              type="text"
              className="w-[248px]  p-3 outline-none "
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-row gap-[12px] ">
            <button className="w-full  border-2 border-gray-100 flex items-center justify-center gap-2  px-5 rounded-md ">
              Sort
              <img src="/Sort.png" alt="icon" className="" />{" "}
            </button>
            <button className="w-full  border-2 border-gray-100 flex items-center justify-center   px-2 rounded-md ">
              <img src="/down.png" alt="icon" className="" />{" "}
            </button>
          </div>
        </div>
        <div className="rounded-md">
          <table className="table-auto w-full ">
            <thead className="bg-black/30 rounded-md ">
              <tr>
                <th className=" px-4 py-2 font-medium text-left ">
                  Order Date
                </th>
                <th className=" px-4 py-2 font-medium text-left ">Order ID</th>
                <th className=" px-4 py-2 font-medium text-right ">
                  Order Amount
                </th>
                <th className=" px-4 py-2 font-medium flex flex-row items-center gap-2 justify-end  ">
                  Transaction Fees <IoIosInformationCircleOutline />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={1}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={2}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={3}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={4}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={5}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={6}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={7}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={8}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={9}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={10}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={11}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={12}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={13}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={14}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={15}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={16}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={17}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={18}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={19}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={20}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={21}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={22}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={23}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
              <tr key={24}>
                <td className=" px-4 py-2 text-left ">#281209</td>
                <td className=" px-4 py-2 text-left  ">7 July, 2023</td>
                <td className=" px-4 py-2 text-right  ">₹1,278.23</td>
                <td className=" px-4 py-2 text-right  ">₹22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Body;
