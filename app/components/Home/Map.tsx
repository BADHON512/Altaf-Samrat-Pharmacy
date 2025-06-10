"use client"
import React from 'react'

type Props = {}

const Map = (props: Props) => {
    return (
        <div className="w-full  bg-white pb-10">
            <div className="max-w-[1500px] mx-auto ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14575.016573388524!2d89.92943389999999!3d24.0397335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe034be0cb5449%3A0xa77d07690da49c95!2sAltab%20%26%20Samrat%20pharmacy!5e0!3m2!1sen!2sbd!4v1749532442916!5m2!1sen!2sbd"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}

                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='rounded-md'
                ></iframe>
            </div>
        </div>
    )
}

export default Map