import React from 'react'
import ceoImg from '../../../public/assets/motiar rahaman.jpg';
import Image from 'next/image';
type Props = {}

const Founder = (props: Props) => {
  return (
       <section className="bg-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src={ceoImg}
            alt="CEO & Founder"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Meet Our Founder</h2>
          <p className="text-teal-600 font-semibold mb-1">Dr. Motiar Rahman</p>
          <p className="text-gray-500 mb-6">Founder & CEO, Altaf & Samrat Pharmacy</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With a vision rooted in care and community, Dr. Motiar Rahman established Altaf & Samrat Pharmacy to redefine what pharmacy care means in today’s world. He brings over 15 years of experience in medical service, pharmaceutical logistics, and patient-first innovation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Under his leadership, we focus on ethical practices, modern healthcare technology, and personal connection with every customer we serve.
          </p>

          {/* Signature / Quote */}
          <div className="mt-8 border-l-4 border-teal-500 pl-6">
            <p className="italic text-gray-600">
              “Healthcare isn’t just a business — it’s a responsibility to serve with integrity, knowledge, and heart.”
            </p>
            <p className="mt-2 font-medium text-teal-600">– Dr. Motiar Rahman</p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          To become a symbol of trust in pharmacy care by delivering quality products, professional guidance, and empathetic service — for every patient, every time.
        </p>
      </div>
    </section>
  )
}

export default Founder