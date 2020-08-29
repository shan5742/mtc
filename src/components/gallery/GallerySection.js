import React from "react"
import styled from "@emotion/styled"
import galleryKitchen1 from "../../images/galleryKitchen1.png"
import galleryKitchen2 from "../../images/galleryKitchen2.png"
import galleryKitchen3 from "../../images/galleryKitchen3.png"
import galleryKitchen4 from "../../images/galleryKitchen4.png"
import ButtonPrimary from "../ButtonPrimary"

export default function GallerySection() {
  return (
    <Container>
      <h1>Gallery</h1>
      <ImagesContainer>
        <Image src={galleryKitchen1} />
        <Image src={galleryKitchen2} />
        <Image src={galleryKitchen3} />
        <Image src={galleryKitchen4} />
      </ImagesContainer>
      <ButtonPrimary>View More</ButtonPrimary>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 25%;
  height: auto;
  margin: 1%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`
