import Image1 from "../../../public/images/businessman-handshaking.jpg";
import Image2 from "../../../public/images/man-using-pencil-tablet+(1).jpg";
import Image from "next/image";

export default function SecondSection() {
    return (
        <div className="text-[#727579] px-10 py-10">
            {/* Responsive Flex Container */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8 ">

                {/* Text Section */}
                <div className="flex-1 w-[500px]">
                    <div className="text-xl font-semibold mb-4">
                        Your Data, Handled with Care
                    </div>
                    <div className="mb-4 text-[13px]">
                        At Gentium, we take data privacy and security seriously. All
                        information shared through our onboarding forms is handled in
                        accordance with GDPR and applicable data protection laws. We only
                        collect what is necessary to deliver and support your services, and
                        your data will never be shared with third parties without your
                        explicit consent.
                    </div>
                    <div className="text-[13px]">
                        {`If you'd like to know more about how your data is stored,
                        processed, or protected, please refer to our Privacy Policy or get
                        in touch with our team.`}
                    </div>
                </div>

                <div className="flex gap-15 flex-col lg:flex-row items-start justify-between">
                    {/* Image Section One */}
                    <div className="flex-1 flex flex-col items-center text-center min-w-[250px]">
                        <Image
                            src={Image1}
                            alt="Client Onboarding Form"
                            className="w-full max-w-[400px] rounded-lg shadow-md"
                        />
                        <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-4 mt-5 w-[260px] rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">Client Onboarding Form</div>
                    </div>

                    {/* Image Section Two */}
                    <div className="flex-1 flex flex-col items-center text-center min-w-[250px]">
                        <Image
                            src={Image2}
                            alt="Non-Disclosure Agreement"
                            className="w-full max-w-[400px] rounded-lg shadow-md"
                        />
                        <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-4 mt-5 w-[260px] rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">
                            Non-Disclosure Agreement
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


