"use client"
import React, { useState } from 'react'
import Logo from "../../../public/assets/logo.png";
import Image from 'next/image';

import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';

import { VscThreeBars } from 'react-icons/vsc';
import { RxCross2 } from 'react-icons/rx';

type Props = {}

const SecondHeader = (props: Props) => {
  const [MobileNav, setMobileNav] = useState(false)
  console.log(MobileNav)
  return (
    <div className='h-[70px] py-2 w-full bg-[#b6b6e2] flex px-5 xl:px-[200px] md'>
      <div className="flex justify-between w-full">
        <Link href={"/"} className="flex items-center gap-x-2 ">
          <Image src={Logo} height={1000} width={1000} alt='logo not found' className='w-[150px]' />

        </Link>
        <div className="hidden md:flex  items-center gap-x-5 lg:gap-x-8 text-gray-800">
          <Link href={"/"} className="text-[#011F19] font-semibold nav-link">Home</Link>
          <Link href={"/ceo"} className="text-[#011F19] font-semibold nav-link">About Us</Link>
          <Link href={"/service"} className="text-[#011F19] font-semibold nav-link">Service</Link>
          <Link href={'/contact'} className="text-[#011F19] font-semibold nav-link">Contact Us</Link>
        </div>
        <div className="hidden md:flex items-center gap-x-4">
          <button className='flex items-center bg-[#12B695] px-8 py-3 gap-x-3 rounded-3xl primary-button border border-gray-400'> Make Appointment <FaPlusCircle />
          </button>
        </div>

        <div onClick={() => setMobileNav(!MobileNav)} className="flex items-center md:hidden">
          <VscThreeBars size={30} className='cursor-pointer' color='black' />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#070d3b] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${MobileNav ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-3">
          <div className="flex justify-end w-full">
            <RxCross2
              size={25}
              color="white"
              onClick={() => setMobileNav(false)}
              className="cursor-pointer"
            />
          </div>

          <div onClick={() => setMobileNav(false)} className="flex flex-col gap-y-5 text-gray-800">
            <Link href="/" className="text-[white] font-bold nav-link">
              Home
            </Link>
            <Link href="/ceo" className="text-[white] font-bold nav-link">
              About Us
            </Link>
            <Link href="/service" className="text-[white] font-bold nav-link">
              Service
            </Link>
            <Link href="/contact" className="text-[white] font-bold nav-link">
              Contact Us
            </Link>
          </div>

          <div className="flex mt-5">
            <button className="flex items-center bg-[#12B695] px-8 py-3 gap-x-3 rounded-3xl">
              Make Appointment <FaPlusCircle />
            </button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default SecondHeader