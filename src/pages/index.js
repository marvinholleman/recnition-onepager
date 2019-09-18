import React from "react"
import { Link } from "gatsby"

import { createGlobalStyle } from "styled-components"

import PageWrapper from "../components/common/pagewrapper"

import Loader from "../components/common/loader"

import About from "./about"
import AVG from "./AVG"
import Contact from "./Contact"
import Benefits from "./Benefits"
import Partners from "./Partners"

class IndexPage extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3200)
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <>
        <PageWrapper>
          <About />
          <Benefits />
          <Contact />
        </PageWrapper>
      </>
    )
  }
}

export default IndexPage
