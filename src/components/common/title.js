import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const Title = props => (
  <>
    <TitleElement
      light={props.light}
      margin={props.nomargin}
      width={props.width}
    >
      {props.children}
    </TitleElement>
  </>
)

const TitleElement = styled.h1`
  font-family: Lato-italic, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1.2;
  color: #2c2d31;
  margin: 0 auto;
  width: ${props => props.width}
    ${props =>
      props.light &&
      css`
        color: white;
      `};
`

Title.propTypes = {}

export default Title
