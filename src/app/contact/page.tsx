import ContactForm from "../component/contactForm";
import MainHeading from "../component/mainHeading";
import Footer from "../footer";
import Navbar from "../navbar";
import contactImage from "../../../public/images/Contact-Us.jpg"

export default function Contact(){
    return(
        <>
        <Navbar />
        <MainHeading title="" imageSrc={contactImage} />
        <ContactForm />
        <Footer />
        </>
    )
}