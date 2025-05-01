"use client";
import Image, { StaticImageData } from "next/image";

interface MainHeadingProps {
  title: string;
  imageSrc: StaticImageData; // Next.js ke liye 'StaticImageData' use ho sakta hai agar import kar rahe ho
  altText?: string;
}

export default function MainHeading({ title, imageSrc, altText = "Image" }: MainHeadingProps) {
  return (
    <div className="relative flex items-center justify-center min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={imageSrc} 
          alt={altText} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-4xl font-bold text-white text-center max-w-[1024px]">
        {title}
      </div>
    </div>
  );
}
