import React from 'react'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'
import Blog from '../../components/blog/Blog'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Reviews from '../../components/reviews/Reviews'

const Home = () => {
  return (
    <>
        <Hero/>
        <Features/>
        <Blog/>
        <About/>
        <Reviews/>
        <Footer/>
    </>
    
  )
}

export default Home