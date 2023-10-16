import { Image } from "@/common/component/Image";
import Images from "next/image";
import React from "react";

export const Homepage = () => {
  return (
    <div className="grid grid-cols-2 p-8 ">
      <div className="flex justify-start flex-col mt-24">
        <h1 className="text-7xl font-bold text-[#EF7708] leading-[50px]">GAMING</h1>
        <h1 className="text-7xl font-bold mt-5">Landing Page</h1>
        <p className="mt-2 text-lg pr-[90px] leading-[40px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s,
        </p>
        <div className="mt-7 gap-5 flex">
            <button className="bg-[#EF7708] p-2 w-[130px] rounded-xl text-white">
                Sign In
            </button>
            <button className="hover:bg-[#EF7708] hover:text-white transition-all duration-300 outline outline-1 h-[40px] text-[#EF7708] outline-[#EF7708] p-2 w-[130px] rounded-2xl ">
                Start Trial
            </button>
          </div>
      </div>
      <div className="flex justify-start">
        <div className="flex justify-start items-start relative">
          <Image
            alt="Img"
            src="/aset/svg/stick.svg"
            className="stick"
            width={700}
            height={600}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute top-[-50px] right-[-100px] w-full z-[99]">
            <Images
              alt="Img"
              src="/aset/svg/wrapstick.svg"
              width={700}
              height={600}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
