"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/website images_page-0003.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import ServiceCard from "@/app/component/servicesStyling";
import Footer from "@/app/footer";
import ContactForm from "@/app/component/contactForm";

const data = [
  {
    title: "Office 365 Implementation and Management",
    description:
      "Office 365 implementation ensures seamless deployment of cloud-based productivity tools like Outlook, Teams, and SharePoint. Proper management involves user setup, security configurations, and ongoing maintenance to optimize collaboration and efficiency.",
    image: exampleImage,
  },
  {
    title: "Active Directory Services",
    description:
      "Active Directory (AD) services manage user authentication, access control, and resource allocation in enterprise networks. Proper AD configuration enhances security, streamlines IT administration, and ensures efficient identity management.",
    image: exampleImage2,
  },
  {
    title: "IT Roll-out Project Management",
    description:
      "IT roll-out project management oversees the deployment of new technologies, ensuring smooth transitions with minimal disruption. This involves planning, risk management, and coordination of hardware, software, and user training.",
    image: exampleImage2,
  },
  {
    title: "Windows Migration and Rollout Services",
    description:
      "Windows migration and rollout services involve upgrading operating systems across multiple devices, ensuring compatibility, security, and improved performance. Proper planning and testing help minimize downtime and streamline the transition.",
    image: exampleImage,
  },
  {
    title: "Short-term and Long-term IT Support Solutions",
    description:
      "IT support solutions offer businesses flexible assistance, from immediate troubleshooting to ongoing maintenance. Short-term support handles urgent technical issues, while long-term solutions ensure system stability, updates, and performance optimization.",
    image: exampleImage2,
  },
  {
    title: "Software Configuration and Troubleshooting Assistance",
    description:
      "Proper software configuration enhances functionality and security, ensuring smooth operations. Troubleshooting assistance helps resolve compatibility issues, performance problems, and software errors to maintain system reliability.",
    image: exampleImage,
  },
];

export default function itAndDesktopSupport() {
  return (
    <>
      <Navbar />

    <MainHeading title="It & Desktop Support" imageSrc={MainImage} />
      
      
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
