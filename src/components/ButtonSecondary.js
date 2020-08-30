import styled from "styled-components"

const ButtonSecondary = styled.button`
  height: 60px;
  min-width: 240px;
  border-radius: 30px;
  color: ${props => (props.alternative ? "#000000" : "#ffffff")};
  background-color: ${props => (props.alternative ? "#ffffff" : "transparent")};
  border: 1px solid #ffffff;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`

export default ButtonSecondary
