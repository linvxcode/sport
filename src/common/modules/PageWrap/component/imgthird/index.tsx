import Image from "next/image";
import React from "react";

export const ImgThird = () => {
  return (
    <div>
      <Image
        alt="Img"
        src="/aset/svg/bg.svg"
        className=""
        width={300}
        height={1000}
        style={{ width: "auto", height: "100%" }}
        priority
      />
    </div>
  );
};
