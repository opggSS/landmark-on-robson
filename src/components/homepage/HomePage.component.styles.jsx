import styled from 'styled-components'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/img/banner1.jpg'
import HamburgerMenu from 'react-hamburger-menu'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { Element } from 'react-scroll'
import { ReactComponent as Landmark } from '../../assets/svg/landmark.svg'

const transition = `
  transition: 0.5s ease-in;
`
export const NavContainer = styled.div`
  ${transition}
  position:fixed;
  width:100%;
  z-index:3;
  display:grid;
  background:linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 1%,rgba(0,0,0,.5) 61%,transparent);
  height: 120px;
  padding: 0 50px;
  align-content:center;
  justify-item:middle;
  grid-template-columns: 200px auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 90px;
    padding: 0 12px;
  }

`
export const NavRightContainer = styled.div`
  ${transition}
  display:grid;
  text-align:center;
  position:relative;
  align-content:center;
  padding: 1rem;
  line-height: 1rem;
  grid-template-areas: "en tr cn register burger";
  @media (max-width: 768px) {
    grid-template-areas:"burger" "en" "tr" "cn" "register" ;
    row-gap: 10px;
    position:absolute;
    right:0;
    top: 1rem;
    &:before{
      opacity:0;
    }
    padding: 0 1rem;
  }
  &:before{
    position: absolute;
    content: "";
    width: 1px;
    height: 47px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 75px;
    top: 28px;
    background:rgba(255,255,255,.5);
  }
`

const linkStyles = `
  font-size: 1rem;
  text-decoration: auto;
  text-transform:uppercase;
  font-weight: 600;
  color:white;
  letter-spacing: 2.29px;
  position: relative;
  opacity: ${props => props.active ? 1 : 0.5};
  margin: 0 .5rem;
 
`

export const LinkContainer = styled(Link)`
 ${linkStyles}
`

export const LinkContainerCN = styled(Link)`
  ${linkStyles}
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`
const backgroundStyles = `
  background-image : url(${banner1});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size:cover;
  background-repeat: no-repeat;
`

export const Section1Container = styled.div`
  ${backgroundStyles}
`

export const HamburgerMenuContainer = styled(HamburgerMenu)`
  ${transition}
  margin-left: 2rem;
  display:inline-block;
  gridArea:burger;
  @media (max-width: 768px) {
    margin-left: 0;
    text-align:center;
    margin: 1.5rem auto;
  }
`
export const LogoContainer = styled(Logo)`
  ${transition} 
  @media (max-width: 768px) {
    width: 160px;  
  }
`

export const BannerCenterContainer = styled.div`
  ${transition} 
  display:flex;
  flex-direction:column;
  justify-content:center;
  height: 100vh;
  padding-left:3rem;
  color:white;
  @media (max-width: 768px) {
    padding-left:1rem; 
  }
`
export const SubtitleContainer = styled.div`
  padding-top: 4rem;
  font-size: 1.2rem
`

export const TitleContainer = styled.div`
  ${transition} 
  font-size:5rem;
  font-weight:100;
  @media (max-width: 768px) {
    font-size:3rem;
  }
`

export const BannerBottomContainer = styled.div`
  position:absolute;
  ${transition} 
  bottom: 2rem;
  left: 3rem;
  @media (max-width: 768px) {
    left:1rem;
  }
`

export const DividerContainer = styled.div`
  border-bottom: 2px solid white;
  width: 2.5rem;
`

export const ArrowDownContainer = styled.img`
  width: 2rem;
`
export const ScrollDownContainer = styled.div`
  ${transition}
  margin: 1.5rem 0 2rem;
  color:white;
  font-size: 0.7rem;
  font-weight:bold;
  letter-spacing:2.3px;
  @media (max-width: 768px) {
    margin: 1rem 0 2rem;
  }
`
export const Section2Container = styled(Element)`
  padding:10rem 0;
  position:relative;
  background:#1c1c26;

`
export const Section2SubTitle = styled.div`
  color:#ceaf70;
  font-size:1rem;
  letter-spacing:.2rem;
  text-align:center;
`

export const Section2Title = styled.div`
  color:white;
  font-size:7rem;
  font-weight: 100;
  letter-spacing:3rem;
  text-align:center;
  padding-left:3rem;
`

export const Section3Container = styled.div`
  background:#1c1c26;
  padding: 5rem 0  ;

`

export const Section3InnerContainer = styled.div`
  max-width:1200px;
  margin: 0 auto;
  display:flex;
  align-items:center;
  @media (max-width: 1000px) {
    flex-direction:column;
  }

`

export const ImgContainer = styled.img`
  
  max-width: 650px;
  width: 100%;
  @media (max-width: 1200px) {
    width: 55vw;
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: initial;
  }
`
export const Section3ContentContainer = styled.div`
  margin-left:5%;
  @media (max-width: 1000px) {
    margin-top: 4rem;
    width: 100%;
    text-align:center;
  }
`
const section3TitleStyles = `
  font-size: 0.8rem;
  letter-spacing: 4.7px;
  text-align:center;
  margin-bottom: 1rem;
`

export const Section3TitleContainer = styled.div`
  ${section3TitleStyles}
  color: white;

`
export const Section3TitleBotContainer = styled.div`
  ${section3TitleStyles}
  color: #ceaf70;
  margin-top: 2rem;
  font-weight: 600;
`

export const LandmarkContainer = styled(Landmark)`

  @media (max-width: 1000px) {
    width: 250px;
  }
`

export const MenuContainer = styled.div`
  ${transition}
  ${backgroundStyles}
  position: fixed;
  z-index:1;
  background-image: url(${({background}) => background});
`

export const Overlay = styled.div`
  height:100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  background: rgba(0,0,0,.5);
  z-index:2
`
export const MenuLeft = styled.div`
  display:flex;
  position:fixed;
  height: 100vh;
  width: 100%;
  left:0;
  z-index:2;
  color: white;
  font-size:1.2rem;
  justify-content:flex-start;
  align-items:center;
  font-weight:200;
  line-height:3rem;
`
export const UlContainer = styled.ul`
  list-style: none;
`
export const SpanContainer = styled.span`

    background-image: linear-gradient(#d99a5a, #d99a5a);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 0%;
    background-repeat: no-repeat;
    padding: .2rem 0;
    ${transition}
  
  &:hover,&:focus,&:active {
    background-size: 100% 0.1em;
  }

`
