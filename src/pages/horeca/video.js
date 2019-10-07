import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Ban from "../../images/svg/ban.svg"
import Upload from "../../images/svg/upload.svg"
import Recognize from "../../images/svg/recognize.svg"
import Alert from "../../images/svg/alert.svg"
import { toHtml } from "@fortawesome/fontawesome-svg-core"

class Video extends React.Component {
  state = {
    source:
      "https://www.youtube.com/embed/EALBc_fpS4U?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1;vq=hd720;",
  }

  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  addAutoPlay() {
    this.setState({
      source:
        "https://www.youtube.com/embed/EALBc_fpS4U?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1;vq=hd720;autoplay=1;",
    })
  }

  render() {
    return (
      <VideoContainer>
        <ContentWrapper>
          <IframeWrapper>
            <Iframe
              width="560"
              height="315"
              src={this.state.source}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </IframeWrapper>
        </ContentWrapper>
      </VideoContainer>
    )
  }
}

const VideoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  padding: 100px 0;
`

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`

const DescriptionImage = styled.img`
  width: 275px;
  margin: 25px 50px;
`

const Description = styled.p`
  display: flex;
  max-width: 200px;
  color: white;
  font-family: "Poppins";
`

const ScrollAnimationContainer = styled(ScrollAnimation)`
  display: flex;
`

export default Video
