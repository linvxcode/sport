import Image from "next/image";
import React from "react";

export const ImgFourth = () => {
  return (
    <div>
      <Image
        alt="Img"
        src="/aset/svg/ballbig.svg"
        className=""
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </div>
  );
};
