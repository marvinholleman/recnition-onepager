import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Button from "../common/button"
import backgroundImage from "../../images/background.jpg"
import LogoImage from "../../images/logo_white.png"

class Header extends Component {
  state = {
    backgroundImage: "",
  }

  componentDidMount() {
    this.setState({
      backgroundImage: (new Image().src = backgroundImage),
    })
  }

  scrollTo() {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 4300,
    })
  }

  render() {
    return (
      <>
        <HeaderContainer>
          <HeroWrapper>
            <Hero backgroundImage={this.state.backgroundImage}>
              <Logo src={LogoImage} />
              <HeroTextContainer
                animateIn="bounceInLeft"
                animateOnce={true}
                delay={1000}
              >
                <HeroText>
                  Direct op de hoogte van winkeldieven en overlastplegers.
                </HeroText>
                <ButtonContainer
                  animateIn="bounceInLeft"
                  animateOnce={true}
                  delay={1600}
                >
                  <MoreButton onClick={e => this.scrollTo()}>
                    Meer informatie?
                  </MoreButton>
                </ButtonContainer>
              </HeroTextContainer>
            </Hero>
          </HeroWrapper>
        </HeaderContainer>
      </>
    )
  }
}

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const Hero = styled.div`
  background-image: url('${props => props.backgroundImage}');
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  background-position-y: 50%;

  @media (min-width: 320px) and (max-width: 480px) {
    background-position-x: 60%;
  }
`

const Logo = styled.img`
  height: 75px;
  top: 45px;
  left: 45px;
  position: relative;
`

const HeroTextContainer = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    right: 80px;
  }
`

const HeroText = styled.h1`
  color: #dfdfdf;
  font-family: "Poppins";
  top: 275px;
  position: relative;
  max-width: 675px;
  font-size: 26px;
  letter-spacing: 1.5px;
  line-height: 133%;
  font-weight: 400;
`

const ButtonContainer = styled(ScrollAnimation)`
  position: relative;
  top: 280px;
`

const MoreButton = styled(Button)`
  background-color: white;
  color: black;
  position: relative;
`

Header.propTypes = {}

export default Header
