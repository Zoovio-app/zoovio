/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const SliderContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      ${'' /* width: ${3080}px; */}
      width: 
      ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContent