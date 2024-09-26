import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="mt-[100px] border-t pt-[18px]">
      <div className="container">
        <img src="./logo.svg" alt="" />
        <p className="mt-8 max-w-[576px]">
          We don’t just sell shoes, we sell memories and collectibles. We collect the best in the
          best with an attention to all little details. we know that shoes speaks louder than words
          that’s why we’ve mastered the science of good sneakers.
        </p>
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <p>Don’t missout on once-in-a-while-deals:</p>
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
          <p>Support line: +250 788 467 808</p>
          <p>Copyright 2024 © Sneaker City ltd</p>
        </div>
      </div>
    </div>
  );
};
