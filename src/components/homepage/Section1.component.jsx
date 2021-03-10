import React from 'react'
import {
  Section1Container, BannerCenterContainer,
  SubtitleContainer, TitleContainer, BannerBottomContainer,
  ScrollDownContainer, ArrowDownContainer, DividerContainer,
} from './HomePage.component.styles'
import ArrowDown from '../../assets/img/arrowDown.png'
import { scroller } from 'react-scroll'

export default function Section1() {

  const scrollToSection2 = () => {
    scroller.scrollTo('section2', {
      duration: 800,
      delay: 0,
      offset: 400,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <Section1Container>
      <BannerCenterContainer>
        <SubtitleContainer>
          TRANSFORMING VANCOUVER'S
          </SubtitleContainer>
        <TitleContainer > SKYLINE</TitleContainer>
      </BannerCenterContainer>
      <a onClick={scrollToSection2} >
        <BannerBottomContainer >
          <DividerContainer />
          <ScrollDownContainer>
            SCROLL DOWN
        </ScrollDownContainer>
          <ArrowDownContainer src={ArrowDown} />
        </BannerBottomContainer>
      </a>

    </Section1Container>
  )
}
