// import Image from "next/image";
// import mail from "../../public/images/icons8-email-100.png";
// import call from "../../public/images/icons8-call-100.png";
// import facebook from "../../public/images/icons8-facebook-96.png";
// import X from "../../public/images/icons8-x-96.png";
// import linkedin from "../../public/images/icons8-linkedin-96.png";

// function Footer() {
//   return (
//     <>
//       {/* Top Footer Section */}
//       <div className="text-white bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]">
//         <div className="customize-max-width flex justify-between py-12 flex-col sm:flex-row gap-10 px-6 sm:px-0 relative">

//           {/* Decorative Line */}
//           <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/30" />

//           {/* Services Section */}
//           <div className="flex sm:gap-20 text-white mt-4 flex-wrap">
//             <div>
//               <div className="text-[25px] font-bold mb-4 text-cyan-400 relative after:block after:h-[2px] after:bg-cyan-400 after:w-10 after:mt-1">
//                 Services
//               </div>
//               {[
//                 "Hardware Break-Fix",
//                 "IT & Desktop Support",
//                 "Data Center Maintenance",
//                 "Roll Out & Migration",
//               ].map((item, i) => (
//                 <div key={i} className="my-2 hover:text-cyan-300 hover:pl-2 transition-all cursor-pointer">
//                   {item}
//                 </div>
//               ))}
//             </div>
//             <div className="sm:mt-12">
//               {[
//                 "Site Surveys",
//                 "Web Design And Development",
//                 "Third Party Maintenance",
//                 "IT Equipment Warehouse",
//               ].map((item, i) => (
//                 <div key={i} className="my-2 hover:text-cyan-300 hover:pl-2 transition-all cursor-pointer">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div className="flex flex-col flex-wrap text-white">
//             <div className="text-[25px] font-bold mb-4 text-cyan-400 relative after:block after:h-[2px] after:bg-cyan-400 after:w-10 after:mt-1">
//               Contact Us
//             </div>
//             <div className="text-[14px] sm:text-[16px] flex items-center my-1">
//               <Image src={mail} alt="mail" className="w-5 sm:w-6 mr-2" />
//               <span className="hover:text-cyan-300 transition-all cursor-pointer">email1234@gmail.com</span>
//             </div>
//             <div className="text-[14px] sm:text-[16px] flex items-center my-1">
//               <Image src={call} alt="call" className="w-5 sm:w-6 mr-2" />
//               <span className="hover:text-cyan-300 transition-all cursor-pointer">(600) 123-4567</span>
//             </div>
//             <div className="mt-4">Software Private Ltd</div>
//             <div className="">ABC Name, Karachi 1234 AB</div>
//           </div>
//         </div>
//       </div>


//       {/* Middle Footer Section */}
//       <div className="text-white bg-[#1A1A1A] border-t border-cyan-400">
//         <div className="customize-max-width flex justify-between py-4 items-center">
//           <div className="text-[25px] font-bold text-cyan-400">
//             Logo
//           </div>
//           <div className="flex gap-4">
//             <Image src={facebook} alt="facebook" className="w-8 cursor-pointer hover:scale-110 transition" />
//             <Image src={X} alt="X" className="w-8 cursor-pointer hover:scale-110 transition" />
//             <Image src={linkedin} alt="linkedin" className="w-8 cursor-pointer hover:scale-110 transition" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer Section */}
//       <div className="bg-[#111111] text-gray-400">
//         <div className="customize-max-width flex flex-col sm:flex-row justify-between text-[12px] sm:text-[14px] py-3 items-center gap-2">
//           <div className="text-center sm:text-left">
//             About us | Industries | Case Studies | Terms & Conditions | Privacy Policy
//           </div>
//           <div className="text-center sm:text-right">
//             © Software Private Ltd 2025
//           </div>
//         </div>
//       </div>
//     </>

//   );
// }

// export default Footer;




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
      <div className="relative text-white bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-hidden">
        
        {/* Decorative Glowing Animated Top Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-100 to-cyan-700 blur-sm animate-pulse" />

        <div className="customize-max-width flex justify-between py-12 flex-col sm:flex-row gap-10 px-6 sm:px-0 relative z-10">

          {/* Services Section */}
          <div className="flex sm:gap-20 text-white mt-4 flex-wrap">
            <div>
              <div className="text-[25px] font-bold mb-4 text-cyan-400 relative after:block after:h-[2px] after:bg-cyan-400 after:w-10 after:mt-1">
                Services
              </div>
              {[
                "Hardware Break-Fix",
                "IT & Desktop Support",
                "Data Center Maintenance",
                "Roll Out & Migration",
              ].map((item, i) => (
                <div key={i} className="my-2 hover:text-cyan-300 hover:pl-2 transition-all cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
            <div className="sm:mt-12">
              {[
                "Site Surveys",
                "Web Design And Development",
                "Third Party Maintenance",
                "IT Equipment Warehouse",
              ].map((item, i) => (
                <div key={i} className="my-2 hover:text-cyan-300 hover:pl-2 transition-all cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col flex-wrap text-white">
            <div className="text-[25px] font-bold mb-4 text-cyan-400 relative after:block after:h-[2px] after:bg-cyan-400 after:w-10 after:mt-1">
              Contact Us
            </div>
            <div className="text-[14px] sm:text-[16px] flex items-center my-1">
              <Image src={mail} alt="mail" className="w-5 sm:w-6 mr-2" />
              <span className="hover:text-cyan-300 transition-all cursor-pointer">email1234@gmail.com</span>
            </div>
            <div className="text-[14px] sm:text-[16px] flex items-center my-1">
              <Image src={call} alt="call" className="w-5 sm:w-6 mr-2" />
              <span className="hover:text-cyan-300 transition-all cursor-pointer">(600) 123-4567</span>
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
