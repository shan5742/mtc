import React from "react"
import { css, jsx } from "@emotion/core"

const Dot = ({ active }) => (
  <span
    css={css`
      margin-right: 5px;
      height: 5px;
      width: 40px;
      border-radius: 8px;
      background: ${active ? "#d4b254" : "#eeeeee"};
    `}
  />
)

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
)

export default Dots
