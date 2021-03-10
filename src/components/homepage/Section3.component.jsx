import React, { useState, useEffect } from 'react'
import {
  Section3Container,
  Section3InnerContainer,
  ImgContainer,
  Section3TitleContainer,
  Section3ContentContainer,
  Section3TitleBotContainer,
  LandmarkContainer
} from './HomePage.component.styles'
import Building from '../../assets/img/building.jpg'

export default function Section3() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])
  return (
    <Section3Container>
      <Section3InnerContainer>
        <ImgContainer src={Building} alt="building" style={{transform: `translateY(${(1000-offsetY)*0.2}px)`}} />
        <Section3ContentContainer>
          <Section3TitleContainer>THIS IS</Section3TitleContainer>
          <LandmarkContainer  />
          <Section3TitleBotContainer>WATCH THE FILM ► </Section3TitleBotContainer>
        </Section3ContentContainer>
      </Section3InnerContainer>
    </Section3Container>
  )
}