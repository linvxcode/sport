import Image from "next/image";
import React from "react";

export const ImgSecond = () => {
  return (
      <div className="absolute overflow-hidden top-[120px] left-[80rem] max-w-xl z-[99]">
        <Image
          alt="Img"
          src="/aset/svg/ballsmall.svg"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
  );
};
