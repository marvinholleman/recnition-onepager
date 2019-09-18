import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const Container = props => (
  <>
    <ContainerWrapper>{props.children}</ContainerWrapper>
  </>
)

const ContainerWrapper = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

Container.propTypes = {}

export default Container
