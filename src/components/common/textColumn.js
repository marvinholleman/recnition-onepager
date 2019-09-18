import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const TextColumn = props => (
  <>
    <TextWrapper left={props.left} light={props.light}>
      {props.children}
    </TextWrapper>
  </>
)

const TextWrapper = styled.p`
  font-family: Lato-italic, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1.4;
  color: #2c2d31;
  margin-top: 50px;
  max-width: 350px;

  ${props =>
    props.light &&
    css`
      color: white;
    `};

  ${props =>
    props.left &&
    css`
      align-self: left;
    `};

  ${props =>
    props.right &&
    css`
      align-self: right;
    `};
`

TextColumn.propTypes = {}

export default TextColumn
