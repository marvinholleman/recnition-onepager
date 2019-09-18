import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

import Header from "../modules/header"
import Footer from "../modules/footer"

const PageWrapper = props => (
  <PageWrapperContainer>
    <Header />
    {props.children}
    <Footer />
  </PageWrapperContainer>
)

const LoadAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const PageWrapperContainer = styled.div`
  animation: ${LoadAnimation} 1s linear;
`

PageWrapper.propTypes = {}

export default PageWrapper
