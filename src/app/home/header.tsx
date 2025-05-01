"use client";

import Image from "next/image";
import mainImage from "../../../public/images/background.jpg";
import arrow from "../../../public/images/icons8-arrow-96.png";
import React from "react";
import Link from "next/link";
import "tw-animate-css";
import Dropdown from "../component/dropdown";
import Sidebar from "../component/sidebar";
import SlideIn from "../component/slideAnimation";
import Authentication from "../component/authentication";

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#323232] text-white">
        <div className="flex gap-5 text-[10px] sm:text-[12px] customize-max-width justify-end py-2">
          <div className="hover:text-[#87B907] transition-all duration-300 cursor-pointer">
            email1234@gmail.com
          </div>
          
          <div className="hover:text-[#87B907] transition-all duration-300 cursor-pointer">
            0300-0000000
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative">
        <Image
          src={mainImage}
          alt="Main Background"
          className="w-full sm:h-[680px] h-[400px] object-cover"
          priority
        />
      </div>

      {/* Main Content over Image */}
      {/* Main Content over Image */}
<div className="absolute top-6 left-0 right-0">
  <div className="customize-max-width px-6 sm:px-0 mx-auto flex justify-between items-center py-5">
    
    {/* Logo */}
    <div className="text-2xl font-bold tracking-wide text-[#38b6ff] animate__animated animate__fadeInDown cursor-pointer hover:font-bold transition-all duration-300">
      MyLogo
    </div>

    {/* Desktop Navigation */}
    <div className="hidden sm:flex items-center gap-5 animate__animated animate__fadeInDown">
      {/* Menu Links */}
      <div className="flex items-center gap-5">
        <div className="relative group">
          <Link href="/" className="transition-all duration-300">
            <div className="text-[#38b6ff] text-[16px] group-hover:font-bold">Home</div>
          </Link>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38b6ff] group-hover:w-full transition-all duration-300"></div>
        </div>

        <div className="relative group">
          <Dropdown textColor="text-[#38b6ff]" />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38b6ff] group-hover:w-full transition-all duration-300"></div>
        </div>

        <div className="relative group">
          <Link href="/aboutus" className="transition-all duration-300">
            <div className="text-[#38b6ff] text-[16px] group-hover:font-bold">About Us</div>
          </Link>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38b6ff] group-hover:w-full transition-all duration-300"></div>
        </div>

        <div className="relative group">
          <Link href="/contact" className="transition-all duration-300">
            <div className="text-[#38b6ff] text-[16px] group-hover:font-bold">Contact Us</div>
          </Link>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38b6ff] group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-6">
        <Authentication />
      </div>
    </div>


          {/* Mobile Sidebar */}
          <div className="sm:hidden animate__animated animate__fadeInRight">
            <Sidebar />
          </div>
        </div>

        {/* Hero Section */}
        <SlideIn direction="bottom">
          <div className="customize-max-width pl-6 sm:pl-0">
            <h1 className="text-white text-3xl sm:text-6xl sm:w-[620px] w-[350px] font-bold leading-tight sm:mt-40 mt-20 animate__animated animate__fadeInLeft">
              Delivering digital solutions for business growth
            </h1>

            <div className="flex items-center w-fit mt-10 bg-[#87B907] hover:bg-[#6ca205] transition-all duration-300 text-white text-[15px] sm:text-xl px-6 py-4 rounded-md cursor-pointer animate__animated animate__fadeInUp group">
              Get Started
              <Image src={arrow} alt="Arrow" className="w-5 sm:w-7 ml-3 transform group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </SlideIn>
      </div>
    </>
  );
}

export default Header;
