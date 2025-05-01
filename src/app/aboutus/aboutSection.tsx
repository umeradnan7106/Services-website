import Image from "next/image";
import teamImage from "../../../public/images/team-building.jpg";

function AboutSection() {
  return (
    <>
      <div className="bg-[#f6f9fc]">
        <div className="customize-max-width flex lg:justify-between py-20 items-center gap-5 flex-wrap justify-center ">
          <div className="w-[540px] ">
            <div className="text-3xl font-semibold py-2">About Us</div>
            <div>
              We are a team of skilled developers and strategists dedicated to
              building innovative, high-performing digital solutions.
              Specializing in web applications, app development, and SaaS, we
              transform ideas into scalable and user-friendly produ cts. Our
              mission is to deliver cutting-edge technology that enhances
              efficiency, security, and user experience. With a customer-focused
              approach and expertise in modern frameworks, we help businesses
              thrive in the digital landscape. Let’s create something
              extraordinary together!
            </div>
          </div>
          <div>
            <Image src={teamImage} alt="team image" className="w-[500px]"></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
