import { Homepage } from "../Homepage";
import { Navbar } from "../Nav";
import { Card } from "@/common/component/Card";
import Imgfirst from "./component/imgfirst";
import { ImgSecond } from "./component/ImgSecond";
import { ImgTriple } from "./component/imgtriple";
import { ImgThird } from "./component/imgthird";
import { ImgFourth } from "./component/imgfourth";
import { ImgFifth } from "./component/imgfifth";
import { ImgSixth } from "./component/imgsixth";
import { ImgSeventh } from "./component/imgseventh";

export const Pagewrap = () => {
  return (
    <div className="relative">
      <div className="bgcolor w-[1020px] right-0 absolute h-[100vh] z-[-999]"></div>
      <div className="absolute top-0 ">
        <Imgfirst />
      </div>
      <div className="bgcolor3 w-[1020px] left-[120px] top-[-100px] absolute h-[1000px] z-[-999]"></div>
      <div className="px-24">
        <Navbar />
        <div className="relative z-[99]">
          <Homepage />
        </div>
        <div className="absolute top-[120px] left-[80rem] w-full z-[99]">
         <ImgSecond />
        </div>
        <div className=" w-[1020px] top-0 right-[-300px] absolute h-[1000px] z-[-99]">
        <ImgTriple />
        </div>
        <div className=" w-[1020px] top-0 right-0 absolute h-[1000px] z-[-99]">
         <ImgThird />
        </div>
        <div className=" top-[450px] right-[600px] absolute z-[-99]">
        <ImgFourth />
        </div>
        <div className=" top-[650px] right-[690px] absolute z-[-99]">
        <ImgFifth />
        </div>
        <div className=" top-[460px] right-[490px] absolute z-[-99]">
         <ImgSixth />
        </div>
        <div className=" top-[160px] right-[240px] absolute z-[-99]">
          <ImgSeventh />
        </div>
        <div className=" top-[220px] right-[590px] absolute z-[99]">
          <Card />
        </div>
        <div className=" top-[620px] right-[90px] absolute z-[99]">
          <Card />
        </div>
      </div>
    </div>
  );
};
