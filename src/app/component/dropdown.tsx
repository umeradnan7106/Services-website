"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import downArrow from "../../../public/images/icons8-expand-arrow-100.png";
import Link from "next/link";

export default function HoverDropdown({ textColor = "text-black", imageSrc = downArrow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block text-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 🔵 Button */}
      <div
        className={`text-[#38b6ff] hover:font-bold transition-all duration-300 text-[16px] flex items-center cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)} // Toggle for mobile
      >
        Services
        <Image src={imageSrc} alt="Expand" className="w-4 mt-1" />
      </div>

      {/* 🟣 Dropdown */}
      {isOpen && (
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-[300px] h-auto p-3 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={`flex flex-col items-start ${textColor}`}>
            <div className={`font-bold text-2xl border-b-2 text-black border-black inline-block`}>Services</div>
            <div className="hover:font-semibold pt-3 text-[15px] text-black"><Link href="/services/hardware-break-fix">1. Hardware Break-Fix</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/it-&-desktop-support">2. IT & Desktop Support</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/data-center-maintenance">3. Data Center Maintenance</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/roll-out-&-migration">4. Roll Out & Migration</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/site-surveys">5. Site Surveys</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/web-design-and-development">6. Web Design And Development</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/third-party-maintenance">7. Third Party Maintenance</Link></div>
            <div className="hover:font-semibold text-[15px] text-black"><Link href="/services/IT_Equipment_Warehouse">8. IT Equipment Warehouse</Link></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
