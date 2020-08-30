import React from "react"
import styled from "styled-components"
import kitchen from "../images/discoverKitchen.png"
import ButtonPrimary from "./ButtonPrimary"

export default function ImageWithCTA() {
  return (
    <Container>
      <LeftSide />
      <RightSide>
        <Subheading>qualisty craftmanship from build to delivery</Subheading>
        <Heading>Discover the beauty of a handmade kitchen</Heading>
        <Blurb>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          at illo autem expedita deserunt distinctio iste iusto, quasi laborum
          consequuntur, officia delectus aut ea, odio sequi hic. Accusantium, id
          quia?
        </Blurb>
        <ButtonPrimary style={{ width: 240 }}>about us</ButtonPrimary>
      </RightSide>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
`

const LeftSide = styled.div`
  width: 50%;
  background-image: url("${kitchen}");
  background-size: cover;
  @media (max-width: 800px) {
    display: none;
  }
`

const RightSide = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
  @media (max-width: 1300px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Subheading = styled.h3`
  font-size: 13px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Roboto", sans-serif;
  color: #d4b254;
`

const Heading = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #222222;
  margin-top: 0;
`

const Blurb = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  color: #777777;
`
