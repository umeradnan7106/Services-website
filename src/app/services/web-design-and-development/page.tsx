"use client"
import Navbar from "../../navbar";
import MainHeading from "../../component/mainHeading";
import MainImage from "../../../../public/images/web design and development.jpg";
import exampleImage from "../../../../public/images/Crucial-conversation-scaled.jpg";
import exampleImage2 from "../../../../public/images/grow better.jpg";
import Footer from "@/app/footer";
import ContactForm from "@/app/component/contactForm";
import ServiceCard from "@/app/component/servicesStyling";

const data = [
  {
    title: "Software and Application Development Services",
    description:
      "Software and application development services focus on creating tailored solutions to meet business needs, ensuring functionality, scalability, and security. From mobile apps to enterprise software, these services enhance efficiency and user experience.",
    image: exampleImage,
  },
  {
    title: "Custom Web Development Solutions",
    description:
      "Custom web development solutions provide businesses with unique, scalable, and high-performing websites tailored to their specific requirements. These solutions ensure seamless functionality, security, and integration with existing systems.",
    image: exampleImage2,
  },
  {
    title: "Responsive Web Design Services",
    description:
      "Responsive web design services ensure that websites adapt seamlessly across all devices, enhancing user experience and accessibility. A well-designed responsive site improves engagement, SEO rankings, and mobile-friendliness.",
    image: exampleImage2,
  },
  {
    title: "Domain Registration and Hosting",
    description:
      "Domain registration and hosting services provide businesses with secure, reliable online presence solutions. Choosing the right domain and hosting ensures website stability, fast performance, and data security.",
    image: exampleImage,
  },
];

export default function HardwareBreakFix() {
  return (
    <>
      <Navbar />
      <MainHeading title="Web Design And Development" imageSrc={MainImage} />

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