import { SneakerCard } from '@/components/shared/sneaker-card';
import React from 'react';

const page = () => {
  return (
    <div className="max-w-[1440px] m-auto mt-8">
      <h2 className="font-bold text-[28px]">You favorite sneakers</h2>
      <div className="flex flex-wrap items-center gap-8 mt-8">
        <SneakerCard id={0} name={''} price={''} />
      </div>
    </div>
  );
};

export default page;
