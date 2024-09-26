import { SneakerCard } from '@/components/shared/sneaker-card';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mt-[100px]">
      <div className="container flex items-start justify-between">
        <div className="max-w-[448px]">
          <h1 className="font-bold text-[72px]">Puma Running SX</h1>
          <p className="mt-6">
            The shoe that moved mountains for eternity and still does so with a swift touch of
            modernism
          </p>
          <p className="mt-[24px] font-bold text-2xl text-black">12,999 ₽</p>
          <button className="btn-add mt-[64px]">Add to cart</button>
        </div>
        <img src="./sneakers/intro-sneakers.png" alt="Intro" />
      </div>
      <div className="container">
        <Link
          href="/market"
          className=" shadow-link max-w-[644px] mt-11 ml-[135px] py-3 flex items-center justify-around transition-all duration-300 hover:translate-x-2"
        >
          <div className="flex items-center gap-8">
            <img src="./sneakers/intro-link1.svg" alt="link" />
            <img src="./sneakers/intro-link2.svg" alt="link" />
            <img src="./sneakers/intro-link3.svg" alt="link" />
          </div>
          <div className="flex items-end gap-3">
            Find that <br /> sneaker you want <MoveRight />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-start mx-auto max-w-[1312px] mt-8">
        <h2 className="font-bold text-[24px]">All the new arrivals</h2>
        <div className="flex items-center gap-6 mt-8">
          <SneakerCard id={0} name={''} price={''} />
          <SneakerCard id={0} name={''} price={''} />
          <SneakerCard id={0} name={''} price={''} />
          <SneakerCard id={0} name={''} price={''} />
        </div>
        <Link
          href="/market"
          className="flex items-center gap-2 mt-9 self-end cursor-pointer hover:underline group"
        >
          <p className="font-bold">View all new arrivals</p>
          <MoveRight className="transition-all duration-300 transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
