import React from 'react'
import Hero from '../Sections/Hero'
import FeaturesSec from '../Sections/FeaturesSec'
import Extensions from '../Sections/Extensions'
import Faq from '../Sections/Faq'
import Email from '../Sections/Email'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSec />
      <Extensions />
      <Faq />
      <Email />
      <Footer />
    </div>
  )
}

export default Home
