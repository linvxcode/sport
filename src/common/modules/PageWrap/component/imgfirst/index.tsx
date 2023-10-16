import React from 'react'
import Image from 'next/image'
const Imgfirst = () => {
  return (
    <div>
      <Image
          alt="Img"
          src="/aset/img/firstrect.png"
          width={400}
          height={400}
          style={{ width: "100%", height: "1000px" }}
          priority
        />
    </div>
  )
}

export default Imgfirst
