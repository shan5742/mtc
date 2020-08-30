import React from "react"
import styled from "styled-components"
import bg from "../../images/footer.jpg"
import Logo from "../../images/logo.svg"
import "./icon.css"
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai"

export default function Footer() {
  return (
    <Container>
      <LogoRow>
        <Line />
        <img alt="logo" src={Logo} />
        <Line />
      </LogoRow>

      <Main>
        <MainCol>
          <ColHeader>About</ColHeader>
          <StyledLink>shop</StyledLink>
          <StyledLink>plan my kitchen</StyledLink>
          <StyledLink>about us</StyledLink>
          <StyledLink>gallery</StyledLink>
        </MainCol>
        <MainCol>
          <ColHeader>Service</ColHeader>
          <StyledLink>faq</StyledLink>
          <StyledLink>contact</StyledLink>
          <StyledLink>how to buy</StyledLink>
          <StyledLink>downloads</StyledLink>
        </MainCol>
        <MainCol>
          <ColHeader>Info</ColHeader>
          <StyledLink>delivery</StyledLink>
          <StyledLink>terms</StyledLink>
          <StyledLink>privacy</StyledLink>
        </MainCol>
        <MainCol>
          <ColHeader>Follow</ColHeader>
          <SocialRow>
            <AiFillFacebook className="icon" size={45} />
            <AiFillTwitterSquare className="icon" size={45} />
            <AiFillInstagram className="icon" size={45} />
          </SocialRow>
        </MainCol>
      </Main>
      <CopyrightRow>
        <CopyrightText>
          Copyright Online MTC Home Kitchens 2018- All rights reserved
        </CopyrightText>
        <CopyrightText>
          Responsive website design, Development & Hosting by mtc.
        </CopyrightText>
      </CopyrightRow>
      <Line />
    </Container>
  )
}

const Container = styled.div`
  background-image: url("${bg}");
  padding: 50px 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Line = styled.hr`
  color: white;
  width: 100%;
`

const LogoRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const MainCol = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled.a`
  color: white;
  font-size: 13px;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 10px;
  & :hover {
    text-decoration: underline;
  }
`

const CopyrightRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`

const CopyrightText = styled.p`
  font-size: 13px;
  color: white;
  margin: 2px;
  text-align: center;
`

const ColHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
`

const SocialRow = styled.div`
  display: flex;
`
