import About from "../components/About/About"
import Footer from "../components/Footer/Footer"
import GoogleAdsSection from "../components/GoogleAdsSection/GoogleAdsSection"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import MarketingStrategies from "../components/MarketingStrategy/MarketingStrategies"
import ProvenStrategy from "../components/MarketingStrategy/ProvenStrategy"
import Newsletter from "../components/Newsletter/Newsletter"
import SeoServices from "../components/SeoServices/SeoServices"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import TrustedLogos from "../components/TrustedLogos/TrustedLogos"
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs"
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import Statistics from '../components/Statistics/Statistics.jsx'

const Home =()=>{
    return (
        <div className="min-h-screen bg-background text-foreground">
         
          <Hero />
          <TrustedLogos />
          <About />
          <WhyChooseUs />
          <Statistics />
          <WhatWeDo />
          <GoogleAdsSection />
          <SeoServices />
          <SocialMedia />
          <ProvenStrategy />
          <MarketingStrategies />
          
          <Newsletter/>

        </div>
      )
}

export default Home;