import React from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Services from './components/Services';
import NumberSpeaksAboutUs from './components/NumberSpeaksAboutUs';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import WhoWeAre from './components/WhoWeAre';
import InsightFulReads from './components/InsightFulReads';
import Footer from './components/Footer';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <NumberSpeaksAboutUs />
      <TrustedBy />
      <Testimonials />
      <WhoWeAre />
      <InsightFulReads/>
      <Footer/>
    </div>
  )
}

export default Root