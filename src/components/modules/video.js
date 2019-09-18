import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

import video from "../../images/video.png"

const Video = props => (
  <>
    <VideoContainer />
  </>
)

const VideoContainer = styled.div`
  background-image: url(${video});
  width: 100%;
  height: 100vh;
  background-size: cover;
`

Video.propTypes = {}

export default Video
