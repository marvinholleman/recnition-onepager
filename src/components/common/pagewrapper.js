import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

import Header from "../modules/header"
import Footer from "../modules/footer"

const PageWrapper = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)

PageWrapper.propTypes = {}

export default PageWrapper
