import React from "react"

import styled from "styled-components"

import Container from "../components/common/container"
import Title from "../components/common/title"
import TextColumn from "../components/common/textColumn"
import Button from "../components/common/button"

class AVG extends React.Component {
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
        <AVGContainer>
          <Container>
            <Title light>
              De Algemene Verordening Gegevensbescherming (AVG)
            </Title>
            <TextContainer>
              <TextColumn left light>
                Het gebruik van biometrische persoonsgegevens zoals
                gezichtsafbeeldingen voor toegangscontrole is niet per definitie
                verboden. Volgens de UAVG is toegangscontrole met behulp van
                biometrie toegestaan als het noodzakelijk is voor
                beveiligingsdoeleinden.
              </TextColumn>
              <TextColumn right light>
                Voor de werking van ons systeem is het verwerken van
                biometrische persoonsgegevens noodzakelijk. Doordat ons systeem
                ingezet wordt voor beveiligingsdoeleinden is dit toegestaan.
              </TextColumn>
            </TextContainer>
            <ReadMoreButton
              onClick={() =>
                window.open("https://autoriteitpersoonsgegevens.nl", "_blank")
              }
            >
              Klik hier voor meer informatie over de AVG
            </ReadMoreButton>
          </Container>
        </AVGContainer>
      </>
    )
  }
}

const AVGContainer = styled.div`
  display: flex;
  min-height: 600px;
  padding-bottom: 50px;
  width: 100%;
  background-color: #2c2d31;
  flex-direction: column;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ReadMoreButton = styled(Button)`
  margin: 20px auto;
`

export default AVG
