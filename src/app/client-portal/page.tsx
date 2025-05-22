import MainHeading from "../component/mainHeading";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import MainImage from "../../../public/images/website images_page-0009.jpg"
import Navbar from "../navbar";
import Footer from "../footer";

export default function ClientPortal() {
    return (
        <>
            <div>
                <Navbar />
                <MainHeading title="Client Portal" imageSrc={MainImage} />

                {/* 1st Section */}
                <FirstSection />

                {/* 2nd Section */}
                <SecondSection />
                <Footer />
            </div>
        </>
    )
}