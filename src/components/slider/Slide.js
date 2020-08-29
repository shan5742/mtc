import React from "react"
import { css, jsx } from "@emotion/core"
import Banner from "../../images/banner.png"
import styled from "@emotion/styled"
import ButtonPrimary from "../ButtonPrimary"

const Slide = ({ content }) => {
  console.log("HELLO", content)
  return (
    <div
      css={css`
        height: 100;
        width: 100%;
        background-image: url("${Banner}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ContentContainer>
        <SlideSubheading>{content.subheading}</SlideSubheading>
        <SlideHeading>{content.heading}</SlideHeading>
        <ButtonPrimary>{content.buttonText}</ButtonPrimary>
      </ContentContainer>
    </div>
  )
}

export default Slide

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
`

const SlideHeading = styled.h1`
  font-size: 54px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
`

const SlideSubheading = styled.h2`
  font-size: 13px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
`
