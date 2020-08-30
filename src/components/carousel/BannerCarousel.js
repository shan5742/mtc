import React from "react"
import Carousel from "react-elastic-carousel"
import styled from "styled-components"
import ButtonPrimary from "../ButtonPrimary"
import BannerNew from "../../images/bannerNew.jpg"
import "./style.css"
import items from "../../data/banner.json"

export default function BannerCarousel() {
  return (
    <Wrapper>
      <Carousel showArrows={false} itemsToShow={1}>
        {items.map(item => (
          <ContentContainer>
            <SlideSubheading>{item.subheading}</SlideSubheading>
            <SlideHeading>{item.heading}</SlideHeading>
            <ButtonPrimary
              onClick={console.log("hello")}
              style={{ marginBottom: 100 }}
            >
              {item.buttonText}
            </ButtonPrimary>
          </ContentContainer>
        ))}
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 40vh;
  padding-top: 100px;
  background-image: url("${BannerNew}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 15%;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 90%;
    padding: 0 5%5%;
  }
`

const SlideHeading = styled.h1`
  font-size: 54px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-top: 0;

  @media (max-width: 650px) {
    font-size: 42px;
  }
`

const SlideSubheading = styled.h2`
  font-size: 13px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
`
