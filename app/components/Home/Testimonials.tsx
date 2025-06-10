import React from 'react'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div>

 <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-teal-600 text-sm uppercase tracking-wide">Testimonials</h2>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">Healing Stories, Shared Honestly</h1>
      <p className="text-gray-600 mt-2">
        Hear from our valued customers how Altaf & Samrat Pharmacy has positively impacted their health journey — with genuine care, expert advice, and affordable service.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonial 1 */}
      <div className="bg-teal-50 p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-400">★★★★★</span>
        </div>
        <p className="text-gray-700 italic mb-4">
          "Their personalized care made a real difference in my recovery. Truly the best healthcare experience I've had at Altaf & Samrat Pharmacy."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 font-semibold">Michael Thompson</p>
            <p className="text-gray-600 text-sm">Business Owner</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-teal-50 p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-400">★★★★★</span>
        </div>
        <p className="text-gray-700 italic mb-4">
          "The staff is incredibly helpful and knowledgeable. I always feel safe and well cared for here at Altaf & Samrat Pharmacy."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 font-semibold">Dr. Sarah Mitchell</p>
            <p className="text-gray-600 text-sm">General Practitioner</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-teal-50 p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
        <p className="text-gray-700 italic mb-4">
          "Joining as a member was the best decision! The 30% discount and monthly checkups are a game changer at Altaf & Samrat Pharmacy."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 font-semibold">James Carter</p>
            <p className="text-gray-600 text-sm">Fitness Coach</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <span className="text-gray-400 mx-1">• • •</span>
    </div>
  </div>
</section>

    </div>
  )
}

export default Testimonials