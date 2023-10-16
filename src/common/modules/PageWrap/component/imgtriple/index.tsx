import Image from "next/image";
import React from "react";

export const ImgTriple = () => {
  return (
    <div>
      <Image
        alt="Img"
        src="/aset/svg/kanan.svg"
        className=""
        width={300}
        height={1000}
        style={{ width: "auto", height: "100%" }}
        priority
      />
    </div>
  );
};
