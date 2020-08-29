import React from "react"
import styled from "@emotion/styled"

const ButtonPrimary = styled.button`
  height: 60px;
  min-width: 240px;
  border-radius: 30px;
  color: ${props => (props.alternative ? "#d4b254" : "#ffffff")};
  background-color: ${props => (props.alternative ? "transparent" : "#d4b254")};
  border: 1px solid #d4b254;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  &:hover {
    background-color: #c8a74b;
  }
`

export default ButtonPrimary
