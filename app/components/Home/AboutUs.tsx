import Image from 'next/image'
import React from 'react'
import firstImage from "../../../public/assets/about1.jpg";
import secondImage from "../../../public/assets/about2.jpg";
import { AiFillHome } from 'react-icons/ai';
import { SiTransmission } from 'react-icons/si';

type Props = {}

const AboutUs = (props: Props) => {
    return (
    <div>
  <section className="py-12 bg-white">
    <div className="max-w-[1500px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

      {/* Left Side - Images and Badge */}
      <div className="relative w-full md:w-1/2 flex flex-col gap-4">
        <div className="absolute top-0 left-0 bg-teal-100 text-teal-800 font-extrabold text-3xl md:text-4xl p-5 rounded-lg shadow-lg z-10 max-w-max">
          21+<br />Years of Experience
        </div>

        <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
          <Image
            src={firstImage}
            alt="Pharmacy Experience"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
          <Image
            src={secondImage}
            alt="Pharmacy Service"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text and Info */}
      <div className="w-full md:w-1/2">
        <h2 className="text-teal-600 text-sm uppercase font-semibold mb-3 tracking-widest">About Us</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">Committed to Quality Care</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          At Altaf & Samrat Pharmacy, we are committed to delivering high-quality, trusted healthcare solutions to every individual. From genuine medicines to personalized health support, our mission is to ensure your well-being through safe, accessible, and affordable care. Your health is our highest priority, and we strive to serve you with integrity, empathy, and excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
              <AiFillHome size={40} color="black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted and customer-centric pharmacy, delivering authentic medicines and compassionate healthcare services that empower communities to lead healthier lives.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
              <SiTransmission size={40} color="black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, affordable, and accessible pharmaceutical care, guided by expert knowledge and a deep commitment to improving the lives of those we serve — one prescription at a time.
            </p>
          </div>
        </div>

        <button className="bg-teal-100 text-teal-800 font-semibold py-3 px-6 rounded-full hover:bg-teal-200 transition duration-300">
          Read More →
        </button>
      </div>
    </div>
  </section>
</div>

    )
}

export default AboutUs