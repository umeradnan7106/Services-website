import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import delivery from "../../../public/images/icons8-proof-of-delivery-64.png";
import seamlessDelivery from "../../../public/images/icons8-delivery-64.png";
import sharedSuccess from "../../../public/images/icons8-handshake-100.png";

function FourthSection() {
  return (
    <div className="bg-[#EEF0F0] overflow-hidden">
      <div className="customize-max-width text-center py-20">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm sm:text-base"
        >
          OUR DIFFERENCE
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[22px] sm:text-4xl font-semibold mt-2"
        >
          Our Unique Approach to Digital <br />
          Transformation
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white w-[300px] rounded-md p-6 shadow-md hover:shadow-lg cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="flex justify-center mb-5"
            >
              <Image src={delivery} alt="Proof of Delivery" className="w-[70px]" />
            </motion.div>
            <div className="text-[18px] sm:text-2xl font-semibold mb-3">
              Proof of Delivery (POD)
            </div>
            <div className="text-gray-500 text-[15px]">
              We ensure reliable Proof of Delivery (POD) solutions, providing
              real-time tracking and digital confirmations to enhance
              transparency and efficiency in logistics.
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white w-[300px] rounded-md p-6 shadow-md hover:shadow-lg cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="flex justify-center mb-5"
            >
              <Image src={seamlessDelivery} alt="Seamless Delivery" className="w-[70px]" />
            </motion.div>
            <div className="text-[18px] sm:text-2xl font-semibold mb-3">
              Seamless Delivery
            </div>
            <div className="text-gray-500 text-[15px]">
              Our delivery solutions are designed for speed, accuracy, and
              customer satisfaction, ensuring your products reach their
              destination safely and on time.
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white w-[300px] rounded-md p-6 shadow-md hover:shadow-lg cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="flex justify-center mb-5"
            >
              <Image src={sharedSuccess} alt="Shared Success" className="w-[80px]" />
            </motion.div>
            <div className="text-[18px] sm:text-2xl font-semibold mb-3">
              Shared Risk, Shared Success
            </div>
            <div className="text-gray-500 text-[15px]">
              We believe in collaborative success, sharing risks and
              responsibilities to create sustainable and scalable solutions
              that drive business growth.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
