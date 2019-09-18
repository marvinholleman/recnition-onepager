import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Button from "../common/button"
import backgroundImage from "../../images/background1.png"
import LogoImage from "../../images/logo_white.png"

class Header extends Component {
  state = {
    imageLoaded: false,
  }

  scrollTo() {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 800,
    })
  }

  render() {
    return (
      <>
        <HeaderContainer>
          <HeroWrapper>
            <Hero>
              <Logo
                src={LogoImage}
                onLoad={() => this.setState({ loaded: true })}
              />
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
                    Hoe werkt het ?
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
  background-image: url(${backgroundImage});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  background-position-y: 50%;
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