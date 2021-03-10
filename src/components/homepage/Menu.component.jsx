import React, { useState } from 'react'
import { MenuContainer, Overlay, MenuLeft, UlContainer, SpanContainer } from './HomePage.component.styles.jsx'
import Banner1 from '../../assets/img/banner1.jpg'
import Banner2 from '../../assets/img/banner2.jpg'
import Banner3 from '../../assets/img/banner3.jpg'

export default function Menu() {
  const [background, setBackground] = useState(Banner1);
  return (
    <>
      <Overlay />
      <MenuContainer background={background} />
      <MenuLeft>
        <UlContainer>
          <li onMouseEnter={() => setBackground(Banner1)}> <SpanContainer>Home</SpanContainer></li>
          <li onMouseEnter={() => setBackground(Banner2)}> <SpanContainer>Only One Robson</SpanContainer>  </li>
          <li onMouseEnter={() => setBackground(Banner3)}> <SpanContainer>270° Views</SpanContainer></li>
        </UlContainer>
      </MenuLeft>

    </>
  )
}
