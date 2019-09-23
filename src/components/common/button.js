import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const Button = props => (
  <ButtonElement light={props.light}>{props.children}</ButtonElement>
)

const ButtonElement = styled.button`
  background-color: #ff0000;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-family: Lato-italic, Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: #ec8484;
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #7b7b7b;

    &:hover {
      color: black;
    }
  }
`

Button.propTypes = {}

export default ButtonElement
