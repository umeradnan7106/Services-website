import Link from "next/link";

export default function FirstSection() {
    return (
        <>
            <div className="m-10 p-15 bg-gray-400">
                <div className="text-center text-[#2b364a] py-10">
                    <div className="text-3xl font-bold">Welcome to Gentium {`Tech's`} Client Portal</div>
                    <div className="text-[20px] my-5">Here {`you’ll`} find all the necessary onboarding documents to get started. Please review each form carefully to ensure we have accurate and complete information to support your service requirements. These documents help us deliver a secure, streamlined experience tailored to your organisation.</div>
                    <div>Once submitted, our team will review the information provided and reach out if any clarification is needed. We recommend completing the forms at your earliest convenience to avoid delays in service activation.</div>
                    <div>If you have any questions or require assistance during the process, please visit our <span className="underline cursor-pointer"><Link href="/contact">Contact Page</Link></span>; our team is here to help.</div>
                </div>
            </div>
        </>
    )
}