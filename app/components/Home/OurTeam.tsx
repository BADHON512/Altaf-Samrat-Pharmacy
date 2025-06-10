import React from 'react'

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div>
        <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-left mb-10">
      <h2 className="text-teal-600 text-sm uppercase tracking-wide">Our Team</h2>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">Meet Our Caring Experts</h1>
      <p className="text-gray-600 mt-2">
        At Altaf & Samrat Pharmacy, our team is made up of passionate healthcare professionals dedicated to providing trusted advice, accurate prescriptions, and personalized care. Get to know the people behind your health and well-being.
      </p>
      <button className="mt-4 bg-teal-100 text-teal-800 font-semibold py-2 px-4 rounded-full hover:bg-teal-200 transition">
        More Team →
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Expert 1 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-800">Dr. Emily Watson</h3>
        <p className="text-gray-600 mb-2">Chief Medical Officer</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>

      {/* Expert 2 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-800">Dr. Daniel Moore</h3>
        <p className="text-gray-600 mb-2">Medical Research Director</p>
        <div className="flex justify-center space-x-2">
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
        </div>
      </div>

      {/* Expert 3 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md text-center">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-800">Lisa Kim, PharmD</h3>
        <p className="text-gray-600 mb-2">Lead Clinical Pharmacist</p>
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