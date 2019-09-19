import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"

import Button from "../components/common/button"

class Thanks extends React.Component {
  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  render() {
    return (
      <>
        <ThanksContainer>
          <TextContainer>
            <ThanksIcon icon={faThumbsUp} color="white" size="3x" />
            <HeaderText>
              Bedankt voor het invullen van het formulier!
            </HeaderText>
            <UnderText>We nemen zo spoedig mogelijk contact op.</UnderText>
            <GoBackButton onClick={() => (window.location = "/")}>
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
`

const UnderText = styled.h2`
  color: white;
  font-size: 18px;
  font-family: "Poppins";
`

const ThanksIcon = styled(FontAwesomeIcon)`
  margin-bottom: 20px;
`

const GoBackButton = styled(Button)`
  background-color: white;
  color: #333;
`

export default Thanks
