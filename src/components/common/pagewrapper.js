import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

import Header from "../modules/header"
import Footer from "../modules/footer"

const PageWrapper = props => (
  <>
    <Header
      heroText={
        props.type === "retail"
          ? "Direct op de hoogte van winkeldieven en overlastplegers."
          : "Verminder uitgaansgeweld en criminaliteit in je horecaonderneming"
      }
      herobuttonText={
        props.type === "retail" ? "Meer informatie" : "Bekijk de video"
      }
    />
    {props.children}
    <Footer />
  </>
)

PageWrapper.propTypes = {}

export default PageWrapper
