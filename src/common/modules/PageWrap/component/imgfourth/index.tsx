import Image from "next/image";
import React from "react";
import { Motion } from "@/common/component/Motion";

export const ImgFourth = () => {
  return (
    <Motion>
      <Image
        alt="Img"
        src="/aset/svg/ballbig.svg"
        className=""
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </Motion>
  );
};
