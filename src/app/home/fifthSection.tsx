import React from "react";
import Image from "next/image";
import arrow from "../../../public/images/icons8-arrow-96.png";

function FifthSection() {
  return (
    <>
      <div className="bg-[#87B907]">
        <div className="customize-max-width flex justify-between items-center py-16 responsive pl-6 sm:pl-0">
          <div className="sm:text-5xl text-3xl w-[550px] font-semibold text-white">
            Ready for the software you need?
          </div>

          <div className="w-33 sm:w-44 bg-[#2C4346] text-[15px] sm:text-xl p-4 text-white text-center rounded-sm flex items-center mt-7">
            Get Started
            <Image src={arrow} alt="arrow" className="w-4 sm:w-7  ml-2"></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default FifthSection;
