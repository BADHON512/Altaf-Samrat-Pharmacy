import React from 'react'

type Props = {}

const BeComeMember = (props: Props) => {
  return (
    <div>
        <section className="py-12 bg-teal-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side with Text and Benefits */}
        <div className="w-full md:w-1/2">
          <h2 className="text-teal-300 text-sm uppercase mb-2">Become a Member</h2>
          <h1 className="text-4xl font-bold mb-4">Membership That Cares More</h1>
          <p className="text-gray-300 mb-6">
            Nulla ullamcorper tempus est. Donec sit amet lorem at ex eleifend convallis eu vitae nisi. Nullam ornare aliquam faucibus.
          </p>
          <div className="bg-teal-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li>Exclusive 30% Member Discount</li>
              <li>Priority Health Consultations</li>
              <li>Free Monthly Health Checkups</li>
              <li>Personalized Care and Support</li>
              <li>Early Access to New Products</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Get In Touch:</h3>
            <p className="text-gray-300">KLLG st. No. 99, Pku City, ID 28289</p>
            <p className="text-gray-300">📞 0761-8523-398</p>
            <p className="text-gray-300">📧 hello@domainsite.com</p>
            <p className="text-gray-300">24 Hour Support</p>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="w-full md:w-1/2 bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Complete to Join Today</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your First Name *"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Your Last Name *"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Your Email *"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Your Phone Number *"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-2 border rounded h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default BeComeMember