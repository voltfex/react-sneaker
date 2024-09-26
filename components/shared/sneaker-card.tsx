import React from 'react';

interface Props {
    id: number;
    name: string;
    price: string;
    className?: string;
}

export const SneakerCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <img className='bg-[#f1f1f1] max-w-[310px] cursor-pointer transition-colors duration-300 hover:bg-[#ebebeb]' src="./sneakers/beluga.png" alt="" />
        <p className='mt-6 font-semibold text-black text-[18px] cursor-pointer'>Adiddas Beluga</p>
        <p className='mt-2 font-semibold'>8,999 ₽</p>
    </div>
  );
};