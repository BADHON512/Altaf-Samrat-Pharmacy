import React from 'react'
import Image from 'next/image';
import lab from "../../../public/assets/lab.jpg";
import OnlineConsultation from "../../../public/assets/OnlineConsultation.webp";
import homeD from "../../../public/assets/homeD.jpg";
type Props = {}

const Service = (props: Props) => {
  return (
    <div>
         <section className="bg-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          At Altaf & Samrat Pharmacy, we’re committed to providing high-quality, accessible, and patient-centered care.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Service 1 - Free Delivery */}
        <div className="bg-teal-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
          <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
            <Image
              src={homeD}
              alt="Free Home Delivery"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Home Delivery</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get your essential medicines delivered to your doorstep—fast, safe, and at no extra cost within city limits.
          </p>
        </div>

        {/* Service 2 - Online Consultation */}
        <div className="bg-teal-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
          <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
            <Image
              src={OnlineConsultation}
              alt="Doctor Consultation"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Doctor Consultation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Book a quick video consultation with certified doctors and get prescriptions without leaving your home.
          </p>
        </div>

        {/* Service 3 - Lab Test Booking */}
        <div className="bg-teal-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
          <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
            <Image
              src={lab}
              alt="Lab Test Booking"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Lab Test Booking</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Schedule blood tests and diagnostics from trusted labs. Sample collection available from your home.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h4>
        <p className="text-gray-600 mb-6">Our team is here to help you 24/7. Just reach out to us.</p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  )
}

export default Service