"use client"
import React from 'react'
import toast from 'react-hot-toast'
import doctor1 from "../../../public/assets/doctor1.jpg";
import doctor2 from "../../../public/assets/doctor2.jpg";
import doctor3 from "../../../public/assets/doctor3.jpg";
import doctor4 from "../../../public/assets/doctor4.jpg";
import Image from 'next/image';

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div>
        <section className="py-12 bg-white">
  <div className=" w-[95%] lg:container mx-auto px-4">
    <div className="text-left mb-10">
      <h2 className="text-teal-600  uppercase tracking-wide text-5xl font-bold text-center pb-5">Our Team</h2>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">Meet Our Caring Experts</h1>
      <p className="text-gray-600 mt-2">
        At Altaf & Samrat Pharmacy, our team is made up of passionate healthcare professionals dedicated to providing trusted advice, accurate prescriptions, and personalized care. Get to know the people behind your health and well-being.
      </p>
      <button onClick={()=>toast.error("Currently not available")} className="mt-4 cursor-pointer bg-teal-100 text-teal-800 font-semibold py-2 px-4 rounded-full hover:bg-teal-200 transition">
        More Team →
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Expert 1 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-80 bg-gray-200 rounded-lg mb-4">
           <Image src={doctor1} height={5000} width={5000} alt='img not found' className='w-full h-full object-contain'/>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Dr. Emily Watson</h3>
        <p className="text-gray-600 mb-2">Chief Medical Officer</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>

      {/* Expert 2 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-80 bg-gray-200 rounded-lg mb-4">
               <Image src={doctor2} height={5000} width={5000} alt='img not found' className='w-full h-full object-contain'/>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Dr. Daniel Moore</h3>
        <p className="text-gray-600 mb-2">Medical Research Director</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>

      {/* Expert 3 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-80 bg-gray-200 rounded-lg mb-4">
               <Image src={doctor3} height={500} width={500} alt='img not found' className='w-full h-full object-contain'/>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Lisa Kim, PharmD</h3>
        <p className="text-gray-600 mb-2">Lead Clinical Pharmacist</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>

         <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-80 bg-gray-200 rounded-lg mb-4">
               <Image src={doctor4} height={500} width={500} alt='img not found' className='w-full h-full object-contain'/>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Dr. Farhana Rahman, MBBS,</h3>
        <p className="text-gray-600 mb-2">Consultant – General Medicine</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default OurTeam