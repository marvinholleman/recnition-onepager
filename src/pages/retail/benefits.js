import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faIdBadge,
  faLock,
  faUserShield,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

class Benefits extends React.Component {
  render() {
    return (
      <BenefitsContainer>
        <ContentWrapper>
          <ContentContainer animateIn="fadeInUp" animateOnce={true}>
            <BenefitBlock>
              <BenefitIcon icon={faIdBadge} color="white" size="3x" />
              <BenefitTitle>Identificatie binnen 3 seconden.</BenefitTitle>
              <BenefitDescription>
                Door gebruik te maken van de beste gezichtsherkenning software
                worden betrokkenen binnen 3 seconden geïdentificeerd.
              </BenefitDescription>
            </BenefitBlock>
            <BenefitBlock>
              <BenefitIcon icon={faLock} color="white" size="3x" />
              <BenefitTitle>Minder diefstal en meer veiligheid.</BenefitTitle>
              <BenefitDescription>
                Het systeem herkent dieven en overlast plegers binnen een
                collectief.
              </BenefitDescription>
            </BenefitBlock>
          </ContentContainer>
          <ContentContainer animateIn="fadeInUp" animateOnce={true}>
            <BenefitBlock>
              <BenefitIcon icon={faUserShield} color="white" size="3x" />
              <BenefitTitle>Preventieve werking.</BenefitTitle>
              <BenefitDescription>
                Het collectief heeft een preventieve werking. Ons systeem
                versterkt een collectief en de hantering ervan.
              </BenefitDescription>
            </BenefitBlock>
            <BenefitBlock>
              <BenefitIcon icon={faMobileAlt} color="white" size="3x" />
              <BenefitTitle>Gebruiksvriendelijke app.</BenefitTitle>
              <BenefitDescription>
                Door een gebruiksvriendelijke applicatie wordt het personeel of
                de beveiliging direct op de hoogte gesteld van winkeldieven en
                overlast plegers.
              </BenefitDescription>
            </BenefitBlock>
          </ContentContainer>
        </ContentWrapper>
      </BenefitsContainer>
    )
  }
}

const BenefitsContainer = styled.div`
  display: flex;
  min-height: 600px;
  width: 100%;
  background-color: white;
  flex-direction: column;
  align-items: center;
`

const BenefitBlock = styled.div`
  background-color: #2c2d31;
  height: 350px;
  width: 325px;
  margin: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  transition: all 100ms ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 25px 0px;
  }
`

const BenefitIcon = styled(FontAwesomeIcon)`
  margin-bottom: 20px;
`

const BenefitTitle = styled.h2`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`

const BenefitDescription = styled.p`
  color: white;
  font-size: 14px;
  font-family: "Poppins";
  text-align: center;
`

const ContentWrapper = styled.div`
  margin: 50px 0;
`

const ContentContainer = styled(ScrollAnimation)`
  display: flex;
  justify-content: center;

  flex-flow: wrap;
  max-width: 1000px;
`

export default Benefits
