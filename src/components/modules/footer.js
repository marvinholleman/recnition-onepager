import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import Container from "../common/container"

class Footer extends Component {
  scrollTo() {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    })
  }

  render() {
    return (
      <>
        <FooterContainer>
          <Container>
            <CopyrightText>
              Copyright Recnition 2019 | All rights reserved
            </CopyrightText>
          </Container>
          <ScrolltoTopButton onClick={e => this.scrollTo()}>
            <FontAwesomeIcon icon={faChevronUp} />
          </ScrolltoTopButton>
        </FooterContainer>
      </>
    )
  }
}

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #2c2d31;
  align-items: center;
  border: 2px solid #323235;
`

const CopyrightText = styled.p`
  color: white;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  font-family: "Poppins";
`

const ScrolltoTopButton = styled.a`
  width: 50px;
  height: 50px;
  background-color: #adadad;
  right: 50px;
  bottom: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    transform: translate(0, -10px);
  }
`

Footer.propTypes = {}

export default Footer
