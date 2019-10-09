import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Entry from "../../images/svg/horeca_cartoon01.svg"
import Save from "../../images/svg/horeca_cartoon02.svg"
import Gallery from "../../images/svg/horeca_cartoon03.svg"
import Match from "../../images/svg/horeca_cartoon04.svg"

class About extends React.Component {
  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  render() {
    return (
      <AboutContainer>
        <ContentContainer animateIn="fadeInRight" animateOnce={true}>
          <DescriptionContainer>
            <DescriptionImage src={Entry} />
            <Description>
              1. Bij betreden van de horecagelegenheidwordt er een foto gemaakt.
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <DescriptionImage src={Save} />
            <Description>
              2. Het gezicht wordt voor 12 uur opgeslagen.
            </Description>
          </DescriptionContainer>
        </ContentContainer>
        <ContentContainer animateIn="fadeInLeft" animateOnce={true}>
          <DescriptionContainer>
            <DescriptionImage src={Gallery} />
            <Description>
              3. Voeg ongewensten toe aan de collectie.
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <DescriptionImage src={Match} />
            <Description>
              4. Bij opnieuw betreden worden ongewensten direct herkend.
            </Description>
          </DescriptionContainer>
        </ContentContainer>
      </AboutContainer>
    )
  }
}

const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #2c2d31;
  flex-direction: column;
  align-items: center;
  padding: 75px 0;
`

const ContentContainer = styled(ScrollAnimation)`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-flow: wrap;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const DescriptionImage = styled.img`
  width: 275px;
  margin: 25px 50px;
`

const Description = styled.p`
  display: flex;
  max-width: 200px;
  color: white;
  font-family: "Poppins";
`

const ScrollAnimationContainer = styled(ScrollAnimation)`
  display: flex;
`

export default About
