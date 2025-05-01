import Image from "next/image";
import React from "react";
import rightArrow from "../../../public/images/icons8-double-right-100.png";
import Link from "next/link";
import SlideIn from "../component/slideAnimation";

const services = [
  {
    title: "Hardware Break-Fix",
    image: "/images/icons8-hardware-64.png",
    points: [
      "Maintenance Services for Server Rooms",
      "Memory DIMM Replacement",
      "Motherboard Replacement",
      "Installation and Removal of Network Devices",
      "Reactive Service",
      "Warranty and Service Contracts",
      "Proactive Alternatives",
    ],
    link: "/services/hardware-break-fix",
  },
  {
    title: "IT & Desktop Support",
    image: "/images/icons8-system-administrator-100.png",
    points: [
      "Office 365 Implementation and Management",
      "Active Directory Services",
      "IT Roll-out Project Management",
      "Windows Migration and Rollout Services",
      "Short-term and Long-term IT Support Solutions",
      "Software Configuration and Troubleshooting Assistance",
    ],
    link: "/services/it-&-desktop-support",
  },
  {
    title: "Data Center Maintenance",
    image: "/images/icons8-maintenance-100.png",
    points: [
      "Datacenter Racking and Stacking Services",
      "Project for Hardware Deployment",
      "Comprehensive Data center cabling solutions",
      "Installation and setup of Servers, Routers, and Switches",
      "Resolution of Data Center Hardware issues",
      "Removal and proper disposal of devices",
      "Round-the-clock maintenance support",
    ],
    link: "/services/data-center-maintenance",
  },
  {
    title: "Roll Out & Migration",
    image: "/images/rollout-migration-removebg-preview.png",
    points: [
      "Windows Rollout and Migration Services",
      "Data Center Hardware Rollout",
      "Installation and Configuration of New Systems",
      "Sessions on Efficient Data Storage and Transfer Techniques",
    ],
    link: "/services/roll-out-&-migration",
  },
  {
    title: "Site Surveys",
    image: "/images/icons8-website-statistics-64.png",
    points: [
      "Network and Facility Analysis Services",
      "Comprehensive Site Surveys",
      "Wireless Network Surveys",
      "Voice/Video Network Surveys",
      "Compliance and Regulations",
    ],
    link: "/services/site-surveys",
  },
  {
    title: "Web Design And Development",
    image: "/images/icons8-web-design-100.png",
    points: [
      "Software and Application Development Services",
      "Custom Web Development Solutions",
      "Responsive Web Design Services",
      "Domain Registration and Hosting",
    ],
    link: "/services/web-design-and-development",
  },
  {
    title: "Third Party Maintenance",
    image: "/images/third-party-icon-removebg-preview.png",
    points: [
      "Third-Party IT Hardware Maintenance Services",
      "Global IT Maintenance for Storage, Servers, and Networks",
      "End-of-Life (EOL) Maintenance Support",
      "Supply of Brand New and Refurbished Spare Parts",
      "Resolution of Data Center Hardware issues",
      "Remote Technical Support",
      "Dedicated 24/7 Call Center Staff",
    ],
    link: "/services/third-party-maintenance",
  },
  {
    title: "IT Equipment Warehouse",
    image: "/images/warehouse-icon-style-removebg-preview.png",
    points: [
      "Maintenance Services for Server Rooms",
      "Memory DIMM Replacement",
      "Motherboard Replacement",
      "Installation and Removal of Network Devices",
    ],
    link: "/services/IT_Equipment_Warehouse",
  },
];

function Services() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-gradient-to-tr from-pink-500 to-red-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center py-24 px-4 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-[#00d9ff] tracking-widest uppercase text-sm mb-3">
          EXPERTISE
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 leading-tight">
          Our company is providing these services <br className="hidden sm:block" /> to grow your business.
        </h2>

        {/* Services Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <SlideIn direction="bottom" key={index}>
            <Link href={service.link} className="group no-underline">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:shadow-2xl rounded-2xl p-6 w-[320px] h-[520px] transition-all duration-500 ease-in-out hover:scale-105 hover:border-transparent cursor-pointer relative overflow-hidden flex flex-col justify-between">
          
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={70}
                    height={70}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
          
                {/* Title */}
                <div className="text-xl font-semibold mb-4">{service.title}</div>
          
                {/* Points */}
                <div className="text-sm text-gray-300 space-y-2 flex-1 overflow-y-auto">
                  {service.points.map((point, i) => (
                    <div key={`${service.title}-${i}`} className="flex items-start gap-2">
                      <Image src={rightArrow} alt="arrow" width={16} height={16} className="mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
          
                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-lg text-center">
                    Learn More
                  </div>
                </div>
              </div>
            </Link>
          </SlideIn>
          
          ))}
        </div>
      </div>

      {/* Border Bottom */}
      <div className="border-b-2 border-gray-600 mt-20"></div>
    </div>
  );
}

export default Services;
