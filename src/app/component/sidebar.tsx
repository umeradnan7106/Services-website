"use client";

import Image from "next/image";
// import menu from "../../../public/images/icons8-menu-50.png";
import menu2 from "../../../public/images/icons8-menu-100.png";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger className="focus:outline-none">
        <Image
          src={menu2}
          alt="menu"
          className="w-6 cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </SheetTrigger>

      <SheetContent className="w-72 bg-white p-6 shadow-2xl rounded-l-xl animate__animated animate__fadeInLeft">
        {/* Sidebar Header */}
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-gray-800 mb-4">
            Menu
          </SheetTitle>
        </SheetHeader>

        {/* Navigation */}
        <nav className="space-y-4 mt-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-[#38b6ff] transition-all text-lg"
            asChild
          >
            <Link href="/">Home</Link>
          </Button>

          {/* Services Collapsible */}
          <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between items-center text-gray-700 hover:bg-gray-100 hover:text-[#38b6ff] transition-all text-lg"
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="pl-4 space-y-2 animate__animated animate__fadeInDown">
              {[
                { href: "/services/data-center-maintenance", label: "Data Center Maintenance" },
                { href: "/services/hardware-break-fix", label: "Hardware Break Fix" },
                { href: "/services/IT_Equipment_Warehouse", label: "IT Equipment Warehouse" },
                { href: "/services/it-&-desktop-support", label: "IT & Desktop Support" },
                { href: "/services/roll-out-&-migration", label: "Roll Out & Migration" },
                { href: "/services/site-surveys", label: "Site Surveys" },
                { href: "/services/third-party-maintenance", label: "Third Party Maintenance" },
                { href: "/services/web-design-and-development", label: "Web Design and Development" },
              ].map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start text-gray-600 hover:bg-gray-100 hover:text-[#38b6ff] text-[15px]"
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-[#38b6ff] transition-all text-lg"
            asChild
          >
            <Link href="/aboutus">About</Link>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-[#38b6ff] transition-all text-lg"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Button
            variant="default"
            className="w-full justify-center bg-[#38b6ff] hover:bg-[#2ca3ec] transition-all mt-6 text-white text-lg font-semibold rounded-md"
            asChild
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
