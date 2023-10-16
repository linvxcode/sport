import Image from "next/image";
import React from "react";

export const ImgSeventh = () => {
  return (
    <div>
      <Image
        alt="Img"
        src="/aset/svg/titikputih.svg"
        className=""
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </div>
  );
};
