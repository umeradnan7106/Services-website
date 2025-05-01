"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0006.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import Footer from "@/app/footer";
import ContactForm from "@/app/component/contactForm";
import ServiceCard from "@/app/component/servicesStyling";

const data = [
  {
    title: "Network and Facility Analysis Services",
    description:
      "Network and facility analysis services assess IT infrastructure to identify performance gaps, security risks, and optimization opportunities. This ensures reliable connectivity, efficient resource allocation, and improved operational efficiency.",
    image: exampleImage,
  },
  {
    title: "Comprehensive Site Surveys",
    description:
      "Comprehensive site surveys evaluate physical and network infrastructure, helping organizations design and deploy efficient IT solutions. These surveys ensure optimal equipment placement, cabling, and connectivity.",
    image: exampleImage2,
  },
  {
    title: "Wireless Network Surveys",
    description:
      "Wireless network surveys analyze signal strength, coverage, and interference to optimize Wi-Fi performance. Proper planning enhances connectivity, reduces dead zones, and improves overall network reliability.",
    image: exampleImage2,
  },
  {
    title: "Voice/Video Network Surveys",
    description:
      "Voice and video network surveys assess bandwidth, latency, and quality of service (QoS) to ensure smooth communication. Proper evaluation prevents call drops, lag, and disruptions in conferencing solutions.",
    image: exampleImage,
  },
  {
    title: "Compliance and Regulations",
    description:
      "Compliance and regulations services help organizations adhere to industry standards, data protection laws, and security protocols. Ensuring compliance reduces risks, avoids legal issues, and maintains business integrity.",
    image: exampleImage2,
  },
];

export default function SiteSurveys() {
  return (
    <>
      <Navbar />
      <MainHeading title="Site Surveys" imageSrc={MainImage} />
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
