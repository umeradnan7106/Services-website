import MainHeading from "../component/mainHeading";
import Footer from "../footer";
import Navbar from "../navbar";
import FifthSection from "./fifthSection";
import FirstSection from "./firstSection";
import FourthSection from "./fourthSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import MainImage from "../../../public/images/engineer-portal-image.jpg"

function EngineerPortal() {
    return (
        <>
            <div className="bg-[#f5f5f5]">
                <Navbar />
                <MainHeading title="Engineer Portal" imageSrc={MainImage} />

                <div className="max-w-[1280px] mx-auto">
                    <div className="bg-white p-10 mt-10">
                        {/* First Section */}
                        <FirstSection />


                        {/* 2nd Section */}
                        <SecondSection />


                        {/* 3rd Section */}
                        <ThirdSection />

                        {/* 4th Section */}
                        <FourthSection />

                    </div>

                    {/* 5th Section */}
                    <FifthSection />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default EngineerPortal;