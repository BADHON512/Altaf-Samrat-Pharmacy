import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/Home/Footer'
import Contact from '../components/Contact/Contact'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        < Header/>
         < Contact/>
        <Footer/>
    </div>
  )
}

export default page