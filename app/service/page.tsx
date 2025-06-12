import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/Home/Footer'
import Service from '../components/Service/Service'

type Props = {}

const ServicePage = (props: Props) => {
  return (
    <div>
        <Header/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default ServicePage