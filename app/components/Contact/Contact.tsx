"use client"
import React from 'react'
import toast from 'react-hot-toast';

type Props = {}

const Contact = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("This feature is not available yet.")
  };
  return (
    <div>
         <section className="bg-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Have a question or need help? We’re just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-teal-50 p-8 rounded-3xl shadow-md">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

            <div className="mb-6">
              <p className="text-gray-600 mb-1 font-medium">📍 Address</p>
              <p className="text-gray-700">Altaf & Samrat Pharmacy,  Pongbaizora Nagarpur Tangail</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-1 font-medium">📞 Phone</p>
              <p className="text-gray-700">+880 01711158978</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-1 font-medium">📧 Email</p>
              <p className="text-gray-700">habibursamrat4716@gmail.com</p>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Opening Hours</h4>
              <p className="text-gray-700">Saturday - Thursday: 8:00 AM – 10:00 PM</p>
              <p className="text-gray-700">Friday: 4:00 PM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact