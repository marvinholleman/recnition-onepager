import React from "react"
import Link from "gatsby-link"

import styled from "styled-components"

import { slide as Menu } from "react-burger-menu"

const MenuContainer = styled.div``

const MenuItem = styled.a`
  cursor: pointer;
`

class sideBar extends React.Component {
  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  render() {
    return (
      <MenuContainer>
        <Menu id="menu" right>
          <MenuItem
            onClick={e => this._scrolltTo(700)}
            id="about"
            className="menu-item"
          >
            Wat wij doen
          </MenuItem>
          <MenuItem
            onClick={e => this._scrolltTo(1200)}
            id="projects"
            className="menu-item"
          >
            AVG
          </MenuItem>
          <MenuItem
            onClick={e => this._scrolltTo(3000)}
            id="contact"
            className="menu-item"
          >
            Video
          </MenuItem>
          <MenuItem
            onClick={e => this._scrolltTo(3000)}
            id="contact"
            className="menu-item"
          >
            Contact
          </MenuItem>
        </Menu>
      </MenuContainer>
    )
  }
}

export default sideBar
