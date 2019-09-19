import React from "react"

import PageWrapper from "../components/common/pagewrapper"
import Loader from "../components/common/loader"
import "../theme/index.css"

import About from "./about"
import Contact from "./contact"
import Benefits from "./benefits"

class IndexPage extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ loading: false })
    // }, 3200)
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
