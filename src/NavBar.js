import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function NavBar() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  const Nav = styled.div`
    height: 30px;
    display: flex;
    position: fixed;
    width: 100%;
    padding: 10px;
    top: 0;
    z-index: 10;
    justify-content: space-between;
    transition: all 0.5s ease-out;
    background-color: ${(p) => p.show && 'black'};
  `

  const Logo = styled.img`
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
  `

  const Avatar = styled.img`
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
  `

  return (
    <Nav show={show}>
      <Logo
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <Avatar
        className='nav_avatar'
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
      />
    </Nav>
  )
}

export default NavBar
