import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
function Navbar({ isScrolled }) {
    const links = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
    ];
  return (
     <Container>
        <nav className={`flex ${isScrolled  ? "scrolled" : ""}`}>

            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={logo} alt="" />
                </div>
            </div>
        </nav>
     </Container>
  )
}

export default Navbar

const Container = styled.div``