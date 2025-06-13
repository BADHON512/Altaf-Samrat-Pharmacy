import AboutUs from "./components/Home/AboutUs";
import BeComeMember from "./components/Home/BeComeMember";
import Blog from "./components/Home/Blog";
import Footer from "./components/Home/Footer";
import Gallery from "./components/Home/Gallery";
import Hero from "./components/Home/Hero";
import Map from "./components/Home/Map";
import OurTeam from "./components/Home/OurTeam";
import Testimonials from "./components/Home/Testimonials";
import WhatWeOffer from "./components/Home/WhatWeOffer";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import Header from "./components/layouts/Header";


export default function Home() {
  return (
    <div className="">

      <Header />
      <Hero />
      <WhatWeOffer />
      <AboutUs />
      <Gallery/>
      <BeComeMember />
      <WhyChooseUs />
      < Testimonials />
      <OurTeam />
      <Blog />
      <Map />
      < Footer />
    </div>
  );
}
