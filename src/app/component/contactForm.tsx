"use client";

import { useState } from "react";
import Image from "next/image";
import contactImage from "../../../public/images/contact.jpg";
import mail from "../../../public/images/icons8-email-100-white.png";
import call from "../../../public/images/icons8-call-100-white.png";
import location from "../../../public/images/icons8-location-96.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const subjects = [
    "Hardware Break-Fix",
    "IT & Desktop Support",
    "Data Center Maintenance",
    "Roll Out & Migration",
    "Site Surveys",
    "Web Design And Development",
    "Third Party Maintenance",
    "IT Equipment Warehouse",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message.");
      }

      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`❌ ${err.message}`);
      } else {
        setError("❌ An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 max-w-[1600px] mx-auto overflow-hidden my-10">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contactImage}
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contact Info Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        {[
          { img: location, title: "Our Location", text: "123 Business Street" },
          { img: mail, title: "Email Us", text: "info@yourcompany.com" },
          { img: call, title: "Call Us", text: "+123 456 7890" },
        ].map((info, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Image src={info.img} alt={info.title} width={50} height={50} />
            <h3 className="mt-4 font-bold text-lg">{info.title}</h3>
            <p className="text-sm mt-2">{info.text}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:ring-2 focus:ring-purple-400 focus:outline-none text-white text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:ring-2 focus:ring-purple-400 focus:outline-none text-white text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:ring-2 focus:ring-purple-400 focus:outline-none text-white text-sm"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="subject"
              className="w-full p-3 rounded-lg bg-white/20 text-white focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select your subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub} className="text-black">
                  {sub}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 h-32 rounded-lg bg-white/20 placeholder-white focus:ring-2 focus:ring-purple-400 focus:outline-none text-white text-sm"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-sm font-semibold tracking-wider transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-green-400 font-semibold mt-3">
              {success}
            </p>
          )}
          {error && (
            <p className="text-center text-red-400 font-semibold mt-3">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
