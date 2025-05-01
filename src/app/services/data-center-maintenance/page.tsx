"use client";

// import Image from "next/image";
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0002.jpg";
import Footer from "@/app/footer";
import ServiceCard from "../../component/servicesStyling"; // 👈 new component

import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import ContactForm from "@/app/component/contactForm";

const services = [
  {
    title: "Datacenter Racking and Stacking Services",
    description:
      "Datacenter racking and stacking services involve the organized installation of servers, storage devices, and networking equipment to optimize space, airflow, and accessibility. Proper structuring enhances performance, scalability, and ease of maintenance.",
    image: exampleImage,
  },
  {
    title: "Project for Hardware Deployment",
    description:
      "Hardware deployment projects ensure the seamless installation and integration of IT infrastructure, including servers, workstations, and network devices. Effective planning minimizes downtime and maximizes operational efficiency.",
    image: exampleImage2,
  },
  {
    title: "Comprehensive Data Center Cabling Solutions",
    description:
      "Proper data center cabling solutions ensure efficient power and data connectivity, reducing signal interference and downtime. Structured cabling enhances scalability, organization, and long-term reliability.",
    image: exampleImage2,
  },
  {
    title: "Installation and Setup of Servers, Routers, and Switches",
    description:
      "Professional installation and setup of servers, routers, and switches ensure a stable and high-performing IT network. Proper configuration and security settings help optimize connectivity and system functionality.",
    image: exampleImage,
  },
  {
    title: "Resolution of Data Center Hardware Issues",
    description:
      "Timely identification and resolution of data center hardware issues prevent system failures and downtime. Expert troubleshooting ensures continuous operations and improves infrastructure reliability.",
    image: exampleImage2,
  },
  {
    title: "Removal and Proper Disposal of Devices",
    description:
      "Secure removal and disposal of outdated or damaged IT equipment follow industry standards for data security and environmental compliance, reducing risks and ensuring responsible e-waste management.",
    image: exampleImage,
  },
  {
    title: "Round-the-Clock Maintenance Support",
    description:
      "24/7 maintenance support ensures immediate response to technical issues, minimizing disruptions and maximizing system uptime. Proactive monitoring helps prevent failures and ensures continuous business operations.",
    image: exampleImage2,
  },
];

export default function DataCenterMain() {
  return (
    <>
      <Navbar />

      <MainHeading title="Data Center Maintenance" imageSrc={MainImage} />

      {/* Service Cards */}
      <div className="flex flex-col gap-12 py-16 px-4 sm:px-0">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            isImageFirst={index % 2 === 0}
            isGrayBackground={index % 2 !== 0}
          />
        ))}
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
