import React from "react"
import { Helmet } from "react-helmet"

import PageWrapper from "../components/common/pagewrapper"
import Loader from "../components/common/loader"
import "../theme/index.css"

import Video from "./retail/video"
import About from "./retail/about"
import Contact from "./retail/contact"
import Benefits from "./retail/benefits"

class RetailPage extends React.Component {
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
        <PageWrapper type="retail">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Recnition - Retail</title>
            <link rel="canonical" href="http://recnition.com/retail" />
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

export default RetailPage
