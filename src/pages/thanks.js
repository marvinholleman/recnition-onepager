import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"

import "../theme/index.css"

import Button from "../components/common/button"

class Thanks extends React.Component {
  render() {
    return (
      <>
        <ThanksContainer class="thanks-container">
          <TextContainer class="text-container">
            <ThanksIcon
              class="thanks-icon"
              icon={faThumbsUp}
              color="white"
              size="3x"
            />
            <HeaderText class="header-text">
              Bedankt voor het invullen van het formulier!
            </HeaderText>
            <UnderText class="under-text">
              We nemen zo spoedig mogelijk contact op.
            </UnderText>
            <GoBackButton
              class="back-button"
              onClick={() => (window.location = "/")}
            >
              Ga terug
            </GoBackButton>
          </TextContainer>
        </ThanksContainer>
      </>
    )
  }
}

const ThanksContainer = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 50px;
  width: 100%;
  background-color: #2c2d31;
  flex-direction: column;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`

const HeaderText = styled.h1`
  color: white;
  font-size: 24px;
  font-family: "Poppins";
  text-align: center;
`

const UnderText = styled.h2`
  color: white;
  font-size: 18px;
  font-family: "Poppins";
  text-align: center;
`

const ThanksIcon = styled(FontAwesomeIcon)`
  margin-bottom: 20px;
  max-width: 100px;
`

const GoBackButton = styled(Button)`
  background-color: white;
  color: #333;
`

export default Thanks
