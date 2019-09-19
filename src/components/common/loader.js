import PropTypes from "prop-types"
import React from "react"
import styled, { css, keyframes } from "styled-components"
import { TweenMax, TimelineMax } from "gsap"

import Loading from "../../images/svg/loaderDot.svg"

import Logo from "../../images/svg/logo-without-dot.svg"

class Loader extends React.Component {
  componentDidMount() {
    // var tl = new TimelineMax({ repeat: 1 })
    // tl.to(this.loadingElement, 0.5, { alpha: 0 }).to(this.loadingElement, 0.5, {
    //   alpha: 1,
    // })
    // TweenMax.from(this.logo, 1, {
    //   opacity: 0,
    //   delay: 1.5,
    // })
    // TweenMax.to(this.loaderContainer, 1, {
    //   delay: 2,
    //   scale: 0.5,
    //   opacity: 0,
    // })
    var tl = new TimelineMax({ repeat: 3 })
    tl.to(this.loadingElement, 0.5, { alpha: 0 }).to(this.loadingElement, 0.5, {
      alpha: 1,
    })
  }

  render() {
    return (
      // <LoaderContainer ref={div => (this.loaderContainer = div)}>
      //   <LogoContainer ref={div => (this.logo = div)}>
      //     <LogoImage src={Logo} />
      //   </LogoContainer>
      //   <LoadingElement ref={div => (this.loadingElement = div)} />
      // </LoaderContainer>
      <LoaderContainer class="loader-container">
        <LoaderDot src={Loading} ref={img => (this.loadingElement = img)} />
      </LoaderContainer>
    )
  }
}

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingElement = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e94b3c;
  opacity: 1;
  position: relative;
  bottom: 45px;
  right: 440px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LogoImage = styled.img`
  width: 40%;
`

const LoaderDot = styled.img`
  width: 5%;
`

Loader.propTypes = {}

export default Loader
