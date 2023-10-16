import React from "react";
import logo from "../assets/logo.png";
import customerIcon from "../assets/customers-icon.svg";
import AddCustomer from "./AddCustomer";
import FetchData from "./FetchData"

const Customers = () => {
  return (
    <>
      <div className="container mx-auto border rounded">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-1/6 w-full">
            <div className="sidebar bg-[#015249] py-5 rounded min-h-full">
              <div className="logo flex justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="custom-logo lg:w-3/5 w-2/4"
                  width="60%"
                />
              </div>
              <div className="btn-customer mt-[80px] flex justify-center">
                <button className="flex align-middle justify-center py-2 lg:px-3 px-5 gap-1 rounded bg-[#043933] text-white outline-none border-none hover:bg-[#043933dc]">
                  <img src={customerIcon} alt="" width="15%" className="m-auto" />
                  CUSTOMERS
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-5/6 w-full">
            <div className="customers py-5 px-10">
              <div className="customers-layout">
                <h1 className="font-bold text-2xl text-black">CUSTOMERS</h1>
              </div>
            </div>
            <div className="customer-data mt-10  py-5 px-10 bg-[#F3F3F3]">
            <AddCustomer  />
            <FetchData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
