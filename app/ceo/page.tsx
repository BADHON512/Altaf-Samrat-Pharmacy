import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/Home/Footer'
import Founder from '../components/Ceo/Founder'

type Props = {}

const Ceo = (props: Props) => {
  return (
    <div>
        <Header/>
        <Founder/>
        <Footer/>
    </div>
  )
}

export default Ceo