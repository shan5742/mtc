import React from "react"
import Slider from "../components/slider/Slider"
import ButtonPrimary from "../components/ButtonPrimary"
import ButtonSecondary from "../components/ButtonSecondary"

const slides = [
  {
    subheading: "design and order your new kitchen online today",
    heading: "Bespoke & made to measure handmade kitchen design",
    buttonText: "order now",
  },
  {
    subheading: "design and order your new kitchen online today",
    heading: "Bespoke & made to measure handmade kitchen design",
    buttonText: "order now",
  },
  {
    subheading: "design and order your new kitchen online today",
    heading: "Bespoke & made to measure handmade kitchen design",
    buttonText: "order now",
  },
]

export default function Home() {
  return (
    <div>
      <div>Hello world!</div>
      <Slider slides={slides} />
      <ButtonPrimary>Hello</ButtonPrimary>
      <div style={{ height: 200, backgroundColor: "black" }}>
        <ButtonSecondary>goodbye</ButtonSecondary>
      </div>
    </div>
  )
}
