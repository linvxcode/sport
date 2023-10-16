import Image from 'next/image'
import React from 'react'

export const ImgSecond = () => {
  return (
    <div>
       <Image
            alt="Img"
            src="/aset/svg/ballsmall.svg"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
    </div>
  )
}


