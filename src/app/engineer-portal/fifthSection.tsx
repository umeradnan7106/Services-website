import Image from "next/image";
import Image1 from "../../../public/images/working-image1.png"
import Image2 from "../../../public/images/working-image2.png"

export default function FifthSection(){
    return(
        <>
        <div className="flex flex-wrap gap-5 items-center place-content-center my-8">
            <Image src={Image1} alt="image1" className="rounded-md w-auto"></Image>
            <Image src={Image2} alt="image2" className="rounded-md w-auto"></Image>
        </div>
        </>
    )
}