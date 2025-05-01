import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  isImageFirst?: boolean;
  isGrayBackground?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  isImageFirst,
  isGrayBackground,
}: ServiceCardProps) {
  return (
    <div className={`${isGrayBackground ? "bg-gray-100" : "bg-white"} py-16`}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-0">
        
        {/* Image */}
        {isImageFirst && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image src={image} alt={title} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </motion.div>
        )}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2027] mb-6">{title}</h2>
          <p className="text-gray-700 text-[16px] leading-relaxed">{description}</p>
        </motion.div>

        {/* Image */}
        {!isImageFirst && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image src={image} alt={title} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </motion.div>
        )}
        
      </div>
    </div>
  );
}
