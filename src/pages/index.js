import React from "react"
import styled from "styled-components"

import horecaImage from "../images/horecaBackground.jpg"
import retailImage from "../images/retailBackground.jpg"
import Loader from "../components/common/loader"

import HorecaLogo from "../images/svg/logo_black_horeca.svg"
import RetailLogo from "../images/svg/logo_black_detailhandel.svg"
import "../theme/index.css"

class IndexPage extends React.Component {
  state = {
    loading: true,
    loadedImagesCount: 0
  }

  constructor() {
    super();
    console.log('Initialising IndexPage');
  }

  imageLoaded() {
    const imageCount = 2; // Use array of images instead of hardcoding

    this.setState(prevState => {
       return {loadedImagesCount: prevState.loadedImagesCount + 1}
    }, () => { 
      if (this.state.loadedImagesCount >= imageCount) {
        this.setState({
          loading: false
        })
      }
      console.log('Loaded images count: ', this.state.loadedImagesCount);
    })
  }

  handleHorecaLoaded() {
    this.setState({
      horecaImage: (new Image().src = horecaImage)
    })
    console.log('Loaded horeca image');
    this.imageLoaded();
  }

  handleRetailLoaded() {
    this.setState({
      retailImage: (new Image().src = retailImage)
    })
    console.log('Loaded retail image');
    this.imageLoaded();
  }

  render() {
    return this.state.loading ? (
      <div>
        <Loader/>
        <img
          src={new Image().src = horecaImage}
          onLoad={this.handleHorecaLoaded.bind(this)}
        />
        <img
          src={new Image().src = retailImage}
          onLoad={this.handleRetailLoaded.bind(this)}
        />
      </div>
    ) : (
      <WelcomeWrapper>
        <SideWrapper href="/horeca">
          <HorecaBackground backgroundImage={this.state.horecaImage} />
          <DetailButtonWrapper>
            <DetailButton src={HorecaLogo} />
          </DetailButtonWrapper>
        </SideWrapper>
        <SideWrapper href="/retail">
          <RetailBackground backgroundImage={this.state.retailImage} />
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

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`

const SideWrapper = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`

const HorecaBackground = styled.div`
 background-image: url('${props => props.backgroundImage}');
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
    background-image: url('${props => props.backgroundImage}');
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`

const DetailButton = styled.img`
  position: absolute;
  width: 130px;
`

export default IndexPage
