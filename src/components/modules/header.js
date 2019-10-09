import React, { Component } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Button from "../common/button"
import horecaHero from "../../images/horecaHero.jpg"
import retailHero from "../../images/retailHero.jpg"
import LogoImage from "../../images/svg/logo_white.svg"

class Header extends Component {
  state = {
    backgroundImage: "",
  }

  componentDidMount() {
    let bg = '';
    if (this.props.targetGroup == 'horeca') {
      bg = horecaHero;
    } else { bg = retailHero }

    this.setState({
      backgroundImage: (new Image().src = bg ),
    })
  }

  scrollTo() {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: window.innerHeight,
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
                delay={700}
              >
                <HeroText>{this.props.heroText}</HeroText>
                <ButtonContainer
                  animateIn="bounceInLeft"
                  animateOnce={true}
                  delay={900}
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
  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('${props => props.backgroundImage}');
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

const LogoWrapper = styled.a`
  position: absolute;
  top: 1em;
  left: 1em;
  padding: 2em;
  z-index: 1000;`

const Logo = styled.img`
  height: 4em;
  margin: 0;
`

const HeroTextContainer = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3em;

  @media (max-width: 480px) {
    padding: 1em;
  }
`

const HeroText = styled.h1`
  background: #00000069;
  padding: 20px;
  border-radius: 15px;
  color: #dfdfdf;
  font-family: "Poppins";
  top: 275px;
  position: relative;
  max-width: 675px;
  font-size: 26px;
  letter-spacing: 1.5px;
  line-height: 133%;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1.5em;
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
