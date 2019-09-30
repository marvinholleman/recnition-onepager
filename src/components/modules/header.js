import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Button from "../common/button"
import backgroundImage from "../../images/background.jpg"
import LogoImage from "../../images/svg/logo_white.svg"

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
      top: window.innerHeight - 25,
    })
  }

  render() {
    return (
      <>
        <HeaderContainer>
          <HeroWrapper>
            <Hero backgroundImage={this.state.backgroundImage}>
              <LogoWrapper href="/">
                <Logo src={LogoImage} />
              </LogoWrapper>
              <HeroTextContainer
                animateIn="bounceInLeft"
                animateOnce={true}
                delay={1000}
              >
                <HeroText>{this.props.heroText}</HeroText>
                <ButtonContainer
                  animateIn="bounceInLeft"
                  animateOnce={true}
                  delay={1200}
                >
                  <MoreButton onClick={e => this.scrollTo()}>
                    {this.props.herobuttonText}
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

  @media (min-width: 480px) and (max-width: 1024px) {
    background-position-x: 60%;
  }
`

const LogoWrapper = styled.a``

const Logo = styled.img`
  height: 75px;
  top: 45px;
  left: 45px;
  position: relative;
`

const HeroTextContainer = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  right: 80px;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    right: 75px;
  }

  @media (min-width: 480px) and (max-width: 710px) {
    position: relative;
    right: 30px;
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

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 270px;
    font-size: 23px;
  }
`

const ButtonContainer = styled(ScrollAnimation)`
  position: relative;
  top: 280px;
`

const MoreButton = styled(Button)`
  background-color: white;
  color: black;
  position: relative;
  font-family: "Poppins";
  font-weight: 800;
  padding: 10px 50px;
`

Header.propTypes = {}

export default Header
