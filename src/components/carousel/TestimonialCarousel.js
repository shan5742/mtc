import React from "react"
import Carousel, { consts } from "react-elastic-carousel"
import styled from "styled-components"
import ButtonPrimary from "../ButtonPrimary"
import items from "../../data/testimonial.json"
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"

export default function TestimonialCarousel() {
  const Arrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img alt="left-arrow" src={leftArrow} />
      ) : (
        <img alt="right-arrow" src={rightArrow} />
      )
    return (
      <ArrowContainer onClick={onClick} disabled={isEdge}>
        {pointer}
      </ArrowContainer>
    )
  }

  return (
    <Wrapper>
      <Carousel renderArrow={Arrow} pagination={false} itemsToShow={1}>
        {items.map(item => (
          <ContentContainer>
            <SlideSubheading>{item.subheading}</SlideSubheading>
            <SlideHeading>{item.heading}</SlideHeading>
            <SlideText>{item.text}</SlideText>
            <ButtonPrimary large>{item.buttonText}</ButtonPrimary>
          </ContentContainer>
        ))}
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 600px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15%;
  flex-direction: column;
`

const SlideHeading = styled.h1`
  font-size: 54px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
  @media (max-width: 950px) {
    font-size: 42px;
  }
  @media (max-width: 650px) {
    font-size: 34px;
  }
`

const SlideSubheading = styled.h2`
  font-size: 13px;
  color: #d4b254;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 11px;
  }
`

const SlideText = styled.p`
  font-size: 13px;
  color: #777777;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 40px;
  @media (max-width: 650px) {
    font-size: 11px;
  }
`

const ArrowContainer = styled.div`
  display: flex;
  margin: 0 10%;
  @media (max-width: 1200px) {
    margin: 0 20px;
  }
`
