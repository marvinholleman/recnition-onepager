import React from "react"

import PageWrapper from "../components/common/pagewrapper"
import Loader from "../components/common/loader"
import "../theme/index.css"

import About from "./about"
import Contact from "./Contact"
import Benefits from "./Benefits"

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
