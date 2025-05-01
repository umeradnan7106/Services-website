"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0005.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import Footer from "@/app/footer";
import ServiceCard from "@/app/component/servicesStyling";
import ContactForm from "@/app/component/contactForm";

const data = [
  {
    title: "Windows Rollout and Migration Services",
    description:
      "Windows rollout and migration services ensure a smooth transition to newer operating systems, minimizing downtime and compatibility issues. Proper planning, testing, and data backup help maintain system integrity and improve performance.",
    image: exampleImage,
  },
  {
    title: "Data Center Hardware Rollout",
    description:
      "Data center hardware rollout involves deploying new servers, storage devices, and networking equipment with minimal disruption. Careful planning and structured implementation enhance efficiency, scalability, and system reliability.",
    image: exampleImage2,
  },
  {
    title: "Installation and Configuration of New Systems",
    description:
      "Proper installation and configuration of new systems ensure optimal performance and security. This process includes hardware setup, software installation, and network integration to streamline operations and enhance productivity.",
    image: exampleImage2,
  },
  {
    title: "Sessions on Efficient Data Storage and Transfer Techniques",
    description:
      "Training sessions on data storage and transfer techniques help organizations optimize data management, reduce redundancy, and enhance security. Best practices ensure efficient data handling, backup, and retrieval.",
    image: exampleImage,
  }
];

export default function RollOutMig() {
  return (
    <>
      <Navbar />
      <MainHeading title="Roll Out & Migration" imageSrc={MainImage} />


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
