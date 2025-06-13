"use client"
import Image from 'next/image'
import React from 'react'
import whatWeOffer from "../../../public/assets/altaf2.jpg";
import { GiMedicinePills } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { FaUserDoctor } from 'react-icons/fa6';
import CountUp from 'react-countup';

type Props = {}

const WhatWeOffer = (props: Props) => {
    return (
        <div className="w-full bg-gray-100">
            <section className="py-10 max-w-[1500px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 justify-center">

                    {/* Main Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                            Reliable Medicines, Expert Guidance
                        </h2>
                        <p className="text-gray-600 mb-6 text-justify">
                            We are committed to providing you with authentic medicines and expert medical guidance whenever you need it. Whether it's regular prescriptions or emergency care, our experienced pharmacists and support team are here to help you live a healthier life — with trust, care, and convenience.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-20">
                            <div>
                                <p className="text-3xl font-bold text-green-600">
                                    <CountUp end={99} duration={2} suffix="%" />
                                </p>
                                <p className="text-gray-600 text-sm">Customer Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">
                                    <CountUp end={24} duration={2} suffix="H" />
                                </p>
                                <p className="text-gray-600 text-sm">Support Available</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">
                                    <CountUp end={1200} duration={2.5} separator="," prefix="+" />
                                </p>
                                <p className="text-gray-600 text-sm">Daily Consultations</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">
                                    <CountUp end={100} duration={2} suffix="%" />
                                </p>
                                <p className="text-gray-600 text-sm">Licensed Products</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                        <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:bg-black transition-all duration-300 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <GiMedicinePills size={40} className="text-black group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                                    Medicines
                                </h3>
                            </div>
                            <p className="mt-4 text-gray-700  text-justify group-hover:text-white transition-colors duration-300  leading-relaxed">
                                We provide genuine, high-quality medicines with expert guidance to ensure safe, effective treatment and fast recovery for every patient.
                            </p>
                        </div>



                        <div className="rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={whatWeOffer}
                                alt="Healthcare Team"
                                width={800}
                                height={400}
                                className="object-cover w-full h-[250px]"
                            />
                        </div>

                        <div className=" p-6 rounded-lg shadow-md bg-black transition-all duration-300 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <RiMentalHealthFill
                                    size={40} className=" text-white transition-colors duration-300" />
                                <h3 className="text-xl font-bold  text-white transition-colors duration-300">
                                    Health Care
                                </h3>
                            </div>
                            <p className="mt-4   text-justify text-white transition-colors duration-300  leading-relaxed">
                                Comprehensive health care services designed to support your well-being through expert advice, timely care, and a patient-first approach.
                            </p>
                        </div>

                        <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:bg-black transition-all duration-300 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <FaUserDoctor
                                    size={40} className="text-black group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                                    Medical Check-Up
                                </h3>
                            </div>
                            <p className="mt-4 text-gray-700  text-justify group-hover:text-white transition-colors duration-300  leading-relaxed">
                                Regular check-ups ensure early detection, better treatment, and peace of mind — keeping you healthy, safe, and stress-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default WhatWeOffer