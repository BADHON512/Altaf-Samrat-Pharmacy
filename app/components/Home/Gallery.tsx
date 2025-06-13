'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type Props = {}

const Photos = [
    { img: "/assets/s1.jpg" },
    { img: "/assets/s2.jpg" },
    { img: "/assets/s3.jpg" },
    { img: "/assets/s4.jpg" },
    { img: "/assets/s5.jpg" },
    { img: "/assets/s6.jpg" },
    { img: "/assets/s7.jpg" },
    { img: "/assets/s8.jpg" },
    { img: "/assets/s9.jpg" },
    { img: "/assets/s10.jpg" },
    { img: "/assets/s12.jpg" },
    { img: "/assets/s13.jpg" },
    
]

const Gallery = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [startIndex, setStartIndex] = useState(0)

    const imagesForGallery = Photos.map(photo => ({
        original: photo.img,
        thumbnail: photo.img,
    }))

    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">
                        Gallery of Our Pharmacy
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {Photos.map((photo, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setStartIndex(index)
                                    setIsOpen(true)
                                }}
                                className="overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                            >
                                <Image
                                    src={photo.img}
                                    alt={`Pharmacy Image ${index + 1}`}
                                    height={1000}
                                    width={1000}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="relative w-full max-w-5xl px-4 ">
                        <button
                            className="absolute top-0 right-3 font-semibold cursor-pointer z-50 bg-[#14e214] text-white  px-3 py-1 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                        <ImageGallery
                            items={imagesForGallery}
                            startIndex={startIndex}
                            showThumbnails={true}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            renderLeftNav={(onClick, disabled) => (
                                <button
                                    type="button"
                                    className="absolute cursor-pointer top-1/2 left-2 z-50 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow hover:bg-teal-100 transition disabled:opacity-50"
                                    onClick={onClick}
                                    disabled={disabled}
                                >
                                    <FaArrowLeft size={16} />
                                </button>
                            )}
                            renderRightNav={(onClick, disabled) => (
                                <button
                                    type="button"
                                    className="absolute cursor-pointer top-1/2 right-2 z-50 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow hover:bg-teal-100 transition disabled:opacity-50"
                                    onClick={onClick}
                                    disabled={disabled}
                                >
                                    <FaArrowRight size={16} />
                                </button>
                            )}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
