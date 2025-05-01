import Image from "next/image";
import mail from "../../public/images/icons8-email-100.png";
import call from "../../public/images/icons8-call-100.png";
import facebook from "../../public/images/icons8-facebook-96.png";
import X from "../../public/images/icons8-x-96.png";
import linkedin from "../../public/images/icons8-linkedin-96.png";

function Footer() {
  return (
    <>
      {/* Top Footer Section */}
      <div className="text-white bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]">
        <div className="customize-max-width flex justify-between py-10 flex-col sm:flex-row pl-6 sm:pl-0">
          {/* Services Section */}
          <div>
            <div className="flex sm:gap-20 text-white mt-10 flex-wrap">
              <div>
                <div className="text-[25px] font-bold mb-4 text-cyan-400">
                  Services
                </div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Hardware Break-Fix</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">IT & Desktop Support</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Data Center Maintenance</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Roll Out & Migration</div>
              </div>
              <div className="sm:mt-12">
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Site Surveys</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Web Design And Development</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">Third Party Maintenance</div>
                <div className="my-2 hover:text-cyan-300 cursor-pointer">IT Equipment Warehouse</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col flex-wrap my-10 text-white">
            <div className="text-[25px] font-bold mb-4 text-cyan-400">Contact Us</div>
            <div className="text-[14px] sm:text-[16px] flex items-center my-1">
              <Image src={mail} alt="mail" className="w-5 sm:w-6 mr-2" />
              email1234@gmail.com
            </div>
            <div className="text-[14px] sm:text-[16px] flex items-center my-1">
              <Image src={call} alt="call" className="w-5 sm:w-6 mr-2" />
              (600) 123-4567
            </div>
            <div className="mt-4">Software Private Ltd</div>
            <div className="">ABC Name, Karachi 1234 AB</div>
          </div>
        </div>
      </div>

      {/* Middle Footer Section */}
      <div className="text-white bg-[#1A1A1A] border-t border-cyan-400">
        <div className="customize-max-width flex justify-between py-4 items-center">
          <div className="text-[25px] font-bold text-cyan-400">
            Logo
          </div>
          <div className="flex gap-4">
            <Image src={facebook} alt="facebook" className="w-8 cursor-pointer hover:scale-110 transition" />
            <Image src={X} alt="X" className="w-8 cursor-pointer hover:scale-110 transition" />
            <Image src={linkedin} alt="linkedin" className="w-8 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#111111] text-gray-400">
        <div className="customize-max-width flex flex-col sm:flex-row justify-between text-[12px] sm:text-[14px] py-3 items-center gap-2">
          <div className="text-center sm:text-left">
            About us | Industries | Case Studies | Terms & Conditions | Privacy Policy
          </div>
          <div className="text-center sm:text-right">
            © Software Private Ltd 2025
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
