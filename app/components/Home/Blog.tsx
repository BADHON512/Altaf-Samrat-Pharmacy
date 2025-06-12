import Image from 'next/image'
import React from 'react'
import b1  from "../../../public/assets/b1.jpg";
import b2  from "../../../public/assets/b2.jpg";
import b3  from "../../../public/assets/b3.jpg";

type Props = {}

const Blog = (props: Props) => {
  return (
    <div>
        <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
    <h2 className="text-teal-600  uppercase tracking-wide text-5xl font-bold text-center pb-5">Blog</h2>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">Stay Informed, Stay Healthy</h1>
      <p className="text-gray-600 mt-2">
        Discover expert tips, healthcare insights, and wellness advice from the team at <br /> Altaf & Samrat Pharmacy. Stay updated and make informed choices about your health every day.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Blog Post 1 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
         <Image src={b1} height={1000} width={1000} alt='img not found' className='h-full w-full rounded-md'/> 
        </div>
        <div className="flex items-center text-teal-600 text-sm mb-2">
          <span className="w-5 h-5 bg-teal-100 rounded-full mr-2"></span>
          <span>Pharmacy News</span>
          <span className="mx-2">•</span>
          <span>May 26, 2025</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Preventive Care You Need</h3>
        <p className="text-gray-600 mb-4">
          Prevention is better than cure. Learn how regular check-ups, early screenings, and daily habits can help you stay one step ahead of illnesses.
        </p>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition">
          Learn More
        </button>
      </div>

      {/* Blog Post 2 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
               <Image src={b2} height={1000} width={1000} alt='img not found' className='h-full w-full rounded-md'/> 
        </div>
        <div className="flex items-center text-teal-600 text-sm mb-2">
          <span className="w-5 h-5 bg-teal-100 rounded-full mr-2"></span>
          <span>Health Tips</span>
          <span className="mx-2">•</span>
          <span>May 26, 2025</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Manage Hypertension</h3>
        <p className="text-gray-600 mb-4">
          High blood pressure can be silent but dangerous. Discover simple lifestyle changes and medication tips to keep your BP under control.
        </p>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition">
          Learn More
        </button>
      </div>

      {/* Blog Post 3 */}
      <div className="bg-teal-50 p-4 rounded-lg shadow-md">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
               <Image src={b3} height={1000} width={1000} alt='img not found' className='h-full w-full rounded-md'/> 
        </div>
        <div className="flex items-center text-teal-600 text-sm mb-2">
          <span className="w-5 h-5 bg-teal-100 rounded-full mr-2"></span>
          <span>Wellness</span>
          <span className="mx-2">•</span>
          <span>May 26, 2025</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Boost Your Immunity Naturally</h3>
        <p className="text-gray-600 mb-4">
          Your immune system is your body’s best defense. Learn how proper nutrition, hydration, sleep, and natural supplements can strengthen it.
        </p>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition">
          Learn More
        </button>
      </div>

<div className="bg-teal-50 p-4 rounded-lg shadow-md">
  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
    <Image src={b2} height={1000} width={1000} alt='img not found' className='h-full w-full rounded-md'/> 
  </div>
  <div className="flex items-center text-teal-600 text-sm mb-2">
    <span className="w-5 h-5 bg-teal-100 rounded-full mr-2"></span>
    <span>Health Guide</span>
    <span className="mx-2">•</span>
    <span>June 2, 2025</span>
  </div>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Managing Diabetes Effectively</h3>
  <p className="text-gray-600 mb-4">
    Learn how to manage diabetes with lifestyle changes, regular medication, and blood sugar monitoring for a healthier future.
    <br />
    <br />
  </p>
  <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition">
    Learn More
  </button>
</div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Blog