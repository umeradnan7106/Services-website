"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0007.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import Footer from "@/app/footer";
import ServiceCard from "@/app/component/servicesStyling";
import ContactForm from "@/app/component/contactForm";

const data = [
  {
    title: "Third-Party IT Hardware Maintenance Services",
    description:
      "Third-party IT hardware maintenance services provide cost-effective support for servers, storage, and networking equipment beyond the original manufacturer's warranty. These services help extend hardware lifespan and reduce downtime.",
    image: exampleImage,
  },
  {
    title: "Global IT Maintenance for Storage, Servers, and Networks",
    description:
      "Comprehensive global IT maintenance ensures the continuous operation of critical infrastructure by providing timely support, repairs, and monitoring for storage devices, servers, and network systems worldwide.",
    image: exampleImage2,
  },
  {
    title: "End-of-Life (EOL) Maintenance Support",
    description:
      "EOL maintenance support helps businesses maintain and repair aging hardware that is no longer supported by manufacturers, ensuring extended usability and delaying costly upgrades.",
    image: exampleImage2,
  },
  {
    title: "Supply of Brand New and Refurbished Spare Parts",
    description:
      "Reliable access to new and refurbished spare parts ensures quick replacements, reducing system downtime and maintaining IT infrastructure performance without unnecessary expenses.",
    image: exampleImage,
  },
  {
    title: "Remote Technical Support",
    description:
      "Remote technical support enables businesses to resolve IT issues quickly through expert troubleshooting, diagnostics, and system assistance without the need for on-site visits.",
    image: exampleImage2,
  },
  {
    title: "Dedicated 24/7 Call Center Staff",
    description:
      "A 24/7 dedicated call center ensures round-the-clock technical assistance, minimizing disruptions and providing immediate resolutions to IT-related concerns for continuous business operations.",
    image: exampleImage,
  },
];

export default function HardwareBreakFix() {
  return (
    <>
      <Navbar />
      <MainHeading title="Third Party Maintenance" imageSrc={MainImage} />

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
