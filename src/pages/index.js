import React from "react"
import GallerySection from "../components/gallery/GallerySection"
import ImageWithCTA from "../components/ImageWithCTA"
import Footer from "../components/footer/Footer"
import Nav from "../components/nav/Nav"
import "../global/style.css"
import BannerCarousel from "../components/carousel/BannerCarousel"
import TestimonialCarousel from "../components/carousel/TestimonialCarousel"

export default function Index() {
  return (
    <div>
      <Nav />
      <BannerCarousel />
      <ImageWithCTA />
      <TestimonialCarousel />
      <GallerySection />
      <Footer />
    </div>
  )
}
