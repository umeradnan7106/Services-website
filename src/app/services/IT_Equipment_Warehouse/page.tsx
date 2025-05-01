"use client"
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0004.jpg"
import ServiceCard from "@/app/component/servicesStyling";
import Footer from "@/app/footer";
import ContactForm from "@/app/component/contactForm";

const data = [
  {
    title: "Maintenance Services for Server Rooms",
    description:
    "Regular maintenance of server rooms ensures optimal performance, security, and longevity of critical IT infrastructure. This includes temperature control, cable management, hardware inspections, and software updates to prevent downtime and improve efficiency.",
    image: exampleImage,
  },
  {
    title: "Memory DIMM Replacement",
    description:
      "Replacing faulty or outdated memory DIMMs enhances system performance and stability. Proper handling and installation help prevent crashes, improve multitasking, and extend the lifespan of servers and computers.",
    image: exampleImage2,
  },
  {
    title: "Motherboard Replacement",
    description:
      "Motherboard replacement is essential when a system experiences hardware failures or needs an upgrade. Proper installation ensures compatibility, improved processing power, and better overall system functionality.",
    image: exampleImage2,
  },
  {
    title: "Installation and Removal of Network Devices",
    description:
      "Installing and removing network devices like routers, switches, and firewalls ensures seamless connectivity and optimal performance. Proper configuration and secure mounting help maintain a stable and efficient network infrastructure.",
    image: exampleImage2,
  },

  
  // Add more items here following the same pattern
];

export default function HardwareBreakFix() {
  return (
    <>
    <Navbar />
    <MainHeading  title="IT Equipment Warehouse" imageSrc={MainImage} />


    {data.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          isImageFirst={index % 2 !== 0}
          isGrayBackground={index % 2 !== 0}
        />
      ))}

      <ContactForm />
      <Footer />
    </>
  );
}