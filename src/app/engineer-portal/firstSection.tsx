export default function FirstSection(){
    return(
        <>
        <div className="text-center">
                    <div className="text-4xl font-bold">Getting Started</div>
                    <div className="py-5 sm:text-xl text-sm">
                        {`Welcome to our Engineer Portal! Here, you'll discover
                        all the necessary documents and resources for your
                        onboarding process. It's essential to take the time
                        to thoroughly review the information provided before
                        proceeding to fill out any forms. We want to ensure
                        that you have all the details you need to start your
                        journey with us smoothly and confidently. If you have
                        any questions or need clarification on anything, don't
                        hesitate to reach out to us. We're here to support you
                        every step of the way. Thank you for choosing to join our team,
                        and we look forward to working together.`}
                    </div>

                    {/* 3 Buttons */}
                    <div className="flex sm:gap-10 text-center flex-wrap items-center justify-center">
                        <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-4 mt-5 w-[260px] rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">Non-Disclosure Agreement</div>
                        <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-4 mt-5 w-[260px] rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">Payment Terms</div>
                        <div className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-4 mt-5 w-[260px] rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">Onboarding Document</div>
                    </div>

                </div>
        </>
    )
}