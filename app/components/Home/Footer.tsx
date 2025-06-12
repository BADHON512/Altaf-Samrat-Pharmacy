"use client"
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        {/* Subscription Section */}
        <div className="py-12 bg-teal-600 relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Subscribe Now for Wellness and Care Insights</h2>
              <p className="text-gray-200 mt-2">
                Get the latest health tips, medicine updates, and exclusive pharmacy offers delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 p-2 rounded-l-md  border border-[#18da8f] outline-none"
              />
              <button onClick={() => toast.error("This feature is not available yet")} className="bg-white cursor-pointer text-teal-600 font-semibold py-2 px-4 rounded-r-md hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          
          </div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Altaf & Samrat Pharmacy</h3>
            <p className="text-gray-400">
              Serving the community with trusted healthcare solutions, prescription support, and wellness guidance. Your health is our priority.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Meet the Pharmacist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Membership Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Health Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">📍 Pongbaizora Nagarpur Tangail</li>
              <li className="text-gray-400">📞 01711158978
              </li>
              <li className="text-gray-400">📧 habibursamrat4716@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-4 text-center text-gray-400">
          <p>© 2025 Altaf & Samrat Pharmacy. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Legal Info</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer