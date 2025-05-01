"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0001.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import ServiceCard from "../../component/servicesStyling"; // 👈 new component
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
      "Motherboard replacement is a critical hardware maintenance task necessary when a system's mainboard becomes faulty due to electrical failures, physical damage, or aging components. The process involves carefully disconnecting all peripherals, removing the old motherboard, and installing a compatible new one while ensuring proper alignment and secure connections.",
    image: exampleImage2,
  },
  {
    title: "Installation and Removal of Network Devices",
    description:
      "Installing and removing network devices involves setting up routers, switches, firewalls, and other components to ensure seamless connectivity and optimal performance. Proper configuration, cable management, and secure mounting are essential to maintaining network stability and efficiency.",
    image: exampleImage,
  },
  {
    title: "Reactive Service",
    description:
      "Reactive service addresses IT issues as they arise, providing troubleshooting and repairs when hardware or software failures occur. While effective for urgent problems, it can lead to unexpected downtime and higher costs due to unplanned maintenance.",
    image: exampleImage2,
  },
  {
    title: "Warranty and Service Contracts",
    description:
      "Warranty and service contracts offer businesses cost-effective maintenance solutions, covering repairs, replacements, and technical support. These agreements help minimize downtime, reduce unexpected expenses, and ensure timely resolutions to hardware or software failures.",
    image: exampleImage,
  },
  {
    title: "Proactive Alternatives",
    description:
      "Proactive alternatives focus on preventing IT issues before they occur through regular monitoring, maintenance, and predictive analysis. This approach enhances system reliability, reduces downtime, and improves overall operational efficiency by identifying and resolving potential problems in advance.",
    image: exampleImage2,
  },
];

export default function HardwareBreakFix() {
  return (
    <>
      <Navbar />
      <MainHeading title="Hardware Break-Fix" imageSrc={MainImage} />
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
