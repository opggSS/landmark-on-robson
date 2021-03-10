import React, { useState } from 'react'
import Section1 from '../../components/homepage/Section1.component'
import Section2 from '../../components/homepage/Section2.component'
import Section3 from '../../components/homepage/Section3.component'
import Nav from '../../components/homepage/Nav.component'
import Menu from '../../components/homepage/Menu.component'
export default function HomePage() {

  const [MenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  return (
    <>
      {MenuOpen && <Menu />}
      <Nav toggleMenu={toggleMenu} />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}
