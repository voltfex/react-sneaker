import { Minus, Plus } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="container">
      <div className="flex justify-between mt-8">
        <div className="max-w-[900px] w-full">
          <h3 className="text-2xl">Your shopping cart</h3>
          <div className="flex flex-col float-start mt-[21px] gap-[18px] w-full">
            <div className="flex items-center justify-between bg-[#f1f1f1] px-8 py-4">
              <div className="flex items-center gap-6">
                <img
                  className="flex items-center justify-center rounded-[8px] bg-white p-1"
                  src="./sneakers/cart.svg"
                  alt=""
                />
                <div>
                  <p className="font-bold text-[18px] text-black">Jordan Delta 2</p>
                  <p className="font-bold">78,000RWF</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Minus color="#000" size={18} className="cursor-pointer" />
                <span className="flex items-center justify-center px-[18px] py-2 font-bold text-[18px] border border-black rounded-[8px]">
                  1
                </span>
                <Plus color="#000" size={18} className="cursor-pointer" />
              </div>
              <p className="font-bold text-[18px] text-black">78,000RWF</p>
            </div>
          </div>
        </div>
        <div className="max-w-[368px] w-full p-6 bg-white">
          <h3 className="text-lg font-semibold">Order summary</h3>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span>Sub total</span>
              <span className="font-bold text-black">78,000 RWF</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Delivery fee</span>
              <span className="font-bold text-black">0 RWF</span>
            </div>
            <div className="flex justify-end text-lg font-bold border-t mt-4 pt-4">
              <span className="font-bold text-black">78,000 RWF</span>
            </div>
          </div>
          <button className="w-full mt-[64px] py-3 bg-red-600 text-white font-bold uppercase rounded hover:bg-red-700 transition duration-300">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
