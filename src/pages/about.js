import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Ban from "../images/svg/ban.svg"
import Upload from "../images/svg/upload.svg"
import Recognize from "../images/svg/recognize.svg"
import Alert from "../images/svg/alert.svg"

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
            <DescriptionImage src={Ban} />
            <Description>
              1. Een winkeldief of overlastpleger krijgt een ontzegging.
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <DescriptionImage src={Upload} />
            <Description>
              2. Gezicht van betrokkene wordt opgeslagen in het collectief.
            </Description>
          </DescriptionContainer>
        </ContentContainer>
        <ContentContainer animateIn="fadeInLeft" animateOnce={true}>
          <DescriptionContainer>
            <DescriptionImage src={Recognize} />
            <Description>
              3. Bij binnenkomst zal de betrokkene automatisch herkent worden
              d.m.v. gezichtsherkenning software.
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <DescriptionImage src={Alert} />
            <Description>
              4. De beveiliging wordt direct op de hoogte gesteld door onze
              mobiele applicatie.
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
