import React, { useState } from 'react'
import {
  NavContainer, NavRightContainer,
  LinkContainer, HamburgerMenuContainer,
  LogoContainer, LinkContainerCN
} from './HomePage.component.styles.jsx'
export default function Nav({toggleMenu}) {
  const [activePage, setActivePage] = useState(1)
  const [burgerOpen, setBurgerOpen] = useState(false)

  const burgerClicked = () =>{
    setBurgerOpen(!burgerOpen)
    toggleMenu()
  }
  return (
    <NavContainer>
      <LogoContainer />
      <NavRightContainer>
        <LinkContainer style={{ gridArea: "en" }} onClick={() => setActivePage(1)} to='/' active={activePage === 1 ? true : false}>en</LinkContainer>
        <LinkContainer style={{ gridArea: "tr" }} onClick={() => setActivePage(2)} to='/' active={activePage === 2 ? true : false}>繁体</LinkContainer>
        <LinkContainerCN style={{ gridArea: "cn" }} onClick={() => setActivePage(3)} active={activePage === 3 ? true : false}>简体</LinkContainerCN>
        <LinkContainer style={{ gridArea: "register" }} onClick={() => setActivePage(4)} active={activePage === 4 ? true : false}>Register</LinkContainer>
        <HamburgerMenuContainer
          isOpen={burgerOpen}
          menuClicked={burgerClicked}
          width={40}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </NavRightContainer>
     
    </NavContainer>
  )
}
