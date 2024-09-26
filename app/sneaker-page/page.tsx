import { Minus, Plus } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="container">
      <div className="flex justify-between mt-8">
        <div className="flex flex-col items-start mt-10">
          <h1 className="font-bold text-[36px]">Jordan Delata 2</h1>
          <p className="mt-6 text-[18px] font-bold">12, 999 Р</p>
          <img className="self-center" src="./sneakers/sneaker-page.png" alt="Jordan Delata 2" />
        </div>
        <div className="max-w-[35%]">
          <p className="text-black font-bold">Description</p>
          <p className="mt-[18px]">
            The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability,
            comfort and an attitude that's Jordan to the core. We updated design lines and swapped
            out some components. The 2 still has that clashing combination of supportive and space
            age-like materials, with lots of different textures and heavy stitching to create a look
            that's both adventurous and iconic.
          </p>
          <p className="text-black font-bold mt-8">Select size</p>
          <div className="flex flex-wrap items-center gap-3 mt-[18px] max-w-[370px]">
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
            <button className="btn-size">32</button>
          </div>
          <div className="flex items-center gap-8 mt-[105px]">
            <div className="flex items-center gap-4">
              <Minus className='cursor-pointer' />
              <span className="flex items-center justify-center px-[20px] py-3 font-bold text-[20px] border rounded-[8px]">
                1
              </span>
              <Plus className='cursor-pointer' />
            </div>
            <button className="btn-add">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
