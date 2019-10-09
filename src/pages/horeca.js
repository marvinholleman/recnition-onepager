import React from "react"
import { Helmet } from "react-helmet"

import PageWrapper from "../components/common/pagewrapper"
import Loader from "../components/common/loader"
import "../theme/index.css"

import Video from "./horeca/video"
import About from "./horeca/about"
import Contact from "./horeca/contact"
import Benefits from "./horeca/benefits"

class HorecaPage extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <>
        <PageWrapper type="horeca">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Recnition - Horeca</title>
            <link rel="canonical" href="http://recnition.com/horeca" />
          </Helmet>
          <Video />
          <About />
          <Benefits />
          <Contact />
        </PageWrapper>
      </>
    )
  }
}

export default HorecaPage
