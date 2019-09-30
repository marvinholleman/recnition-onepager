import React from "react"
import styled from "styled-components"

import horecaImage from "../images/horecaBackground.jpg"
import retailImage from "../images/retailBackground.jpg"

import HorecaLogo from "../images/svg/logo_black_horeca.svg"
import RetailLogo from "../images/svg/logo_black_detailhandel.svg"
import "../theme/index.css"

class IndexPage extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    return (
      <WelcomeWrapper>
        <SideWrapper href="/horeca">
          <HorecaBackground />
          <DetailButtonWrapper>
            <DetailButton src={HorecaLogo} />
          </DetailButtonWrapper>
        </SideWrapper>
        <SideWrapper href="/retail">
          <RetailBackground />
          <DetailButtonWrapper>
            <DetailButton src={RetailLogo} />
          </DetailButtonWrapper>
        </SideWrapper>
      </WelcomeWrapper>
    )
  }
}

const WelcomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

const SideWrapper = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`

const HorecaBackground = styled.div`
    background-image: url('${horecaImage}');
    background-size: cover;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    width: 100%;
    transition: all 200ms ease-in-out;

    ${SideWrapper}:hover & {
      filter: grayscale(0%);
      transform: scale(1.01);
    }
`

const RetailBackground = styled.div`
    background-image: url('${retailImage}');
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    background-size: cover;
    width: 100%;
    transition: all 200ms ease-in-out;

    ${SideWrapper}:hover & {
         filter: grayscale(0%);
        transform: scale(1.01);
    }
`

const DetailButtonWrapper = styled.div`
  align-items: center;
  align-self: center;
  position: absolute;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  ${SideWrapper}:hover & {
    transform: scale(1.1);
  }
`

const DetailButton = styled.img`
  position: absolute;
  width: 130px;
`

export default IndexPage
