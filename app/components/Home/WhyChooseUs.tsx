import React from 'react'
import Image from 'next/image'
import chooseusPhoto from "../../../public/assets/altaf4.jpg";

type Props = {}

const WhyChooseUs = (props: Props) => {
    return (
  <div className="bg-white py-12">
  <section className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* Left Side - Image */}
      <div>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={chooseusPhoto}
            alt="Why Choose Us"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text and Features */}
      <div>
        <h2 className=" text-teal-600 uppercase font-bold text-2xl mb-2">Why Choose Us</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Care That Truly Matters</h1>
        <p className="text-gray-600 mb-6">
          At Altaf & Samrat Pharmacy, your health is our top priority. Our team is dedicated to providing personalized, accessible, and trustworthy care that supports your overall well-being.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Expert Team You Can Trust",
              desc: "Licensed professionals committed to your health and wellbeing.",
            },
            {
              title: "Member-Only Savings",
              desc: "Exclusive offers and discounts for our valued members.",
            },
            {
              title: "All-in-One Services",
              desc: "From medicines to consultations, all under one roof.",
            },
            {
              title: "Compassionate, Personalized Care",
              desc: "We listen, care, and tailor services to your needs.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-teal-50 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 6h2v2H9V6zm0 3h2v5H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</div>

    )
}

export default WhyChooseUs