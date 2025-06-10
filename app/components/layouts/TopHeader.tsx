import Link from 'next/link'
import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaFacebook, FaFacebookF, FaPhone, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FiClock } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'
import { MdLocalPhone } from 'react-icons/md'

type Props = {}

const TopHeader = (props: Props) => {
    return (
       <div className="hidden lg:block">
         <div className='h-[60px] w-full bg-[#011F19] flex justify-between px-10 xl:px-[200px] items-center '>
            <div className="flex gap-x-1">
                <Link href={'/'} className="h-8 w-8 social-media-icon-bg flex justify-center items-center rounded-sm ">
                    <FaFacebookF color='black' />
                </Link>
                <Link href={'/'} className="h-8 w-8 social-media-icon-bg flex justify-center items-center rounded-sm">
                    <FaTwitter color='black' />
                </Link>
                <Link href={'/'} className="h-8 w-8 social-media-icon-bg flex justify-center items-center rounded-sm">
                    <FaYoutube color='black' />
                </Link>
            </div>
            <div className=" flex items-center gap-x-2">
                <div className="flex items-center gap-x-1">
                    <IoLocationSharp color='#12B695' size={20} />
                    <p className="text-white text-sm">Store Location: Pongbaizopra Nagarpur Tangail</p>
                </div>
                <div className="flex items-center gap-x-1">
                    <MdLocalPhone color='#12B695' size={20} />
                    <p className="text-white text-sm">01711158724</p>
                </div>

                 <div className="flex items-center gap-x-1">
                    <CgMail color='#12B695' size={20} />
                    <p className="text-white text-sm">habibursamrat4716@gmail.com</p>
                </div>

                 <div className="flex items-center gap-x-1">
                    <FiClock color='#12B695' size={20} />
                    <p className="text-white text-sm"> 5 AM To 10 PM</p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default TopHeader