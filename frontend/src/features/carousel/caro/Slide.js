import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, width }) => (
  <div
    css={css`
      height: 100%;
      width: ${1025}px;
      ${'' /* width: ${1025}px; */}
      background-image: url('${content}');
      ${'' /* background-size: cover; */}
      background-repeat: no-repeat;
      ${'' /* background-position: center; */}
      background-position: right bottom;
      background-size: 750px 450px
    `}
  />
)

export default Slide