import Navbar from "../navbar";
import About from "../aboutus/aboutSection"
import OurStory from "./ourStory";
import Footer from "../footer";
import MainHeading from "../component/mainHeading";
import aboutImage from "../../../public/images/about us.jpg"

export default function AboutPage(){
    return(
        <>
        <Navbar />
        <MainHeading title="About Us" imageSrc={aboutImage} />
        <About />
        <OurStory />
        <Footer />
        </>
    )
}