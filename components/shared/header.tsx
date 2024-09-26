import { Heart, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <div className="border-b">
      <div className="container">
        <div className="flex items-center justify-between mt-[30px] py-[18px]">
          <Link href="/">
            <Image width={99} height={36} src="./logo.svg" alt="Logo" />
          </Link>
          <nav className="flex items-center gap-[32px] font-bold text-black">
            <Link href="/market">New arrivals</Link>
            <Link href="/market/men">Men</Link>
            <Link href="/market/women">Women</Link>
            <Link href="/market/kid">Kids</Link>
          </nav>
          <div className="flex items-center gap-[32px] ">
            <Link href="/cart">
              <ShoppingCart color="#000" />
            </Link>
            <Link href="/favorite">
              <Heart color="#000" />
            </Link>
            <Link href="/profile">
              <User color="#000" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
