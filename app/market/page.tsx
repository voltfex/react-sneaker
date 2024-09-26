import { SneakerCard } from '@/components/shared/sneaker-card';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

const page = () => {
  return (
    <div className="w-full max-w-[1344px] m-auto">
      <div className="flex mt-8">
        <div className="w-[302px]">
          <p className="text-black font-bold">Brand</p>
          <ul className="flex flex-col items-start gap-4 mt-4">
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <Checkbox id="nike" />
              <label htmlFor="nike" className="cursor-pointer">
                Nike
              </label>
            </li>
          </ul>
          <div className="mt-[30px]">
            <p className="text-black font-bold">Price range</p>
          </div>
          <div className="mt-[30px]">
            <p className="text-black font-bold">Size</p>
            <div className="flex flex-wrap max-w-[238px] gap-3  mt-[18px]">
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
          </div>
        </div>
        <div className="ml-16">
          <h3 className="font-bold text-[24px]">The new arrivals</h3>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
            <SneakerCard id={0} name={''} price={''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
