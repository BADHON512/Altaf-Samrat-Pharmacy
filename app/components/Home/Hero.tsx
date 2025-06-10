"use client"
import React from 'react'
import toast from 'react-hot-toast'

type Props = {}

const OrderHandle=()=>{
  toast.error('Currently not available')
}

const Hero = (props: Props) => {
  return (
    <div className='hero-bg'>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">

        {/* Home Delivery Badge */}
    <h1 className='text-6xl my-5'>Altaf and Samrat Pharmacy</h1>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted Pharmacy at Your Doorstep
        </h1>

        <p className="text-lg md:text-xl max-w-2xl">
          Order genuine medicines online with 24/7 service, quick delivery, and expert support.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button onClick={()=>OrderHandle()} className="px-6 py-3 cursor-pointer bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-white transition">
            Order Now
          </button>
          <button className="px-6 py-3 border cursor-pointer border-white rounded-lg font-semibold text-white hover:bg-white hover:text-emerald-600 transition">
            Learn More
          </button>
        </div>

        {/* Optional: Helpline */}
        <div className="mt-4 font-semibold">
          📞 Helpline: <span className="font-bold">+880 01711158978
          </span>
        </div>

        <div className="mt-2 font-semibold">
          📞 Helpline: <span className="font-bold">+880 01711519479
          </span>
        </div>
        <div className="mt-2 font-semibold">
          📞 Helpline: <span className="font-bold">+880 01716151548
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero