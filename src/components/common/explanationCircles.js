import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const ExplanationCircles = ({}) => (
  <>
    <CircleWrapper>
      <CircleSpacer margin={5} light />
      <CircleSpacer margin={5} />
      <CircleSpacer margin={5} light />
      <Circle></Circle>
      <CircleSpacer />
      <Circle></Circle>
      <CircleSpacer />
      <Circle></Circle>
      <CircleSpacer />
      <Circle></Circle>
      <CircleSpacer margin={5} light />
      <CircleSpacer margin={5} />
      <CircleSpacer margin={5} light />
    </CircleWrapper>
  </>
)

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Circle = styled.div`
  height: 150px;
  width: 150px;
  border: 3px solid #dda8a8;
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
`

const CircleSpacer = styled.span`
  height: 20px;
  width: 20px;
  background-color: #ec8484;
  ${props =>
    props.light &&
    css`
      background-color: #dda8a8;
    `};

  border-radius: 50%;
  display: inline-block;
  align-self: center;
  margin: ${props => props.margin}px;
`

ExplanationCircles.propTypes = {}

export default ExplanationCircles
