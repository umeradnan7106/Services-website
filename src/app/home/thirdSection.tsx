import Image from "next/image";
import image from "../../../public/images/main-image.jpg";

function ThirdSection() {
  return (
    <>
      {/* first 2 things*/}
      <div className="customize-max-width">
        <div className="flex justify-between items-center py-20 responsive">
          <div className="w-[450px] mx-auto">
            <div className="text-gray-500">What we do</div>
            <div className="text-[19px] sm:text-4xl font-semibold">
              Empowering digital transformation, from idea to implimentation
            </div>
          </div>
          <div className="w-[450px] text-[14px] text-gray-600 my-5 mx-auto">
            {`Our expertise in modern web technologies, cloud solutions, and
            automation ensures a smooth transition to the digital era. Whether
            you're launching a new platform or upgrading existing systems, we
            provide end-to-end support to drive growth, streamline operations,
            and create a lasting impact in the digital landscape.`}
          </div>
        </div>

        {/* second 2 things  */}

        <div className="flex lg:justify-between pb-20 flex-wrap justify-center">
          
            <Image src={image} alt="image" className="w-[450px]"></Image>
          
          <div className="w-[450px] text-[20px] ">
            <div className="font-semibold">Requirements</div>
            <div className="text-[14px] text-gray-600">
              Clear and well-defined requirements are the foundation of a
              successful project. We work closely with you to understand your
              business needs, objectives, and technical specifications to ensure
              a seamless development process. From functionality to user
              experience, we prioritize every detail to deliver a solution that
              meets your expectations and drives results.
            </div>
            <div className="text-gray-400 font-semibold mt-2 text-[14px] sm:text-[20px]">
              <div className="p-1">Software Development</div>
              <div className="p-1">Software Maintenance</div>
              <div className="p-1">Testing</div>
              <div className="p-1">Full Delivery Team</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
