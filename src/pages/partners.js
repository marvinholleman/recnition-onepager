import React from "react"

import styled from "styled-components"

import Title from "../components/common/title"
import ExplanationCircles from "../components/common/explanationCircles"

class Partners extends React.Component {
  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  render() {
    return (
      <PartnersContainer>
        <ContentContainer></ContentContainer>
      </PartnersContainer>
    )
  }
}

const PartnersContainer = styled.div`
  display: flex;
  min-height: 600px;
  padding-bottom: 50px;
  width: 100%;
  background-color: white;
  flex-direction: column;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export default Partners
