import React from "react";
import { IoMdPlay } from "react-icons/io";

const Banner = () => {
  return (
    <div className="font-plain">
      <div className="uppercase text-8xl font-medium flex flex-col items-start justify-center translate-x-2/9 pt-12">
        <h1>We design</h1>
        <h1>unique</h1>
        <h1>
          <span className="underline">Web</span>/
          <span className="underline">graphic</span>
        </h1>
        <h1>experience</h1>
      </div>
      <div className="pt-20 flex flex-col relative justify-center">
        <img
          className="translate-x-[250px] h-[400px] w-[950px] object-cover"
          src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
          alt=""
        />
        <div className="bg-[#ee9c37] w-36 h-36 text-3xl absolute top-8 right-28 flex items-center justify-center rounded-full">
          <IoMdPlay></IoMdPlay>
        </div>
      </div>
    </div>
  );
};

export default Banner;
