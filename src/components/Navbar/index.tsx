import { Link } from "react-router-dom"
import { NavbarContainer } from "./navbarStyled"
import logo from './images/logo.png'
import {FaUserAlt, FaSearch} from 'react-icons/fa'
import {FiShoppingBag} from 'react-icons/fi'
const {ReactNavbar} = require('overlay-navbar')

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ReactNavbar
       logo={logo}
       burgerColor="black"
       burgerColorHover="#00ff00"
       logoWidth="20vmax"
       link1ColorHover="#00ff00"
       navColor1="#fff"
       logoHoverSize="10px"
       link1Text="Home"
       link2Text="Products"
       link3Text="Contact"
       link4Text="About"
       link1Url="/"
       link2Url="/products"
       link3Url="/contact"
       link4Url="/about"
       link1Size="1.2em"
       link1Color="rgb(35,35,35,0.8)"
       link1Margin="20px"
       nav2justifyContent="flex-end"
       nav3justifyContent="flex-start"
       searchIcon={true} SearchIconElement={FaSearch}
       cartIcon={true} CartIconElement={FiShoppingBag}
       profileIcon={true} ProfileIconElement={FaUserAlt}
       searchIconColor="rgb(35,35,35,0.8)"
       cartIconColor="rgb(35,35,35,0.8)"
       profileIconColor="rgb(35,35,35,0.8)"
       searchIconColorHover="#00ff00"
       profileIconColorHover="#00ff00"
       cartIconColorHover="#00ff00"
       profileIconSize="25px"
       searchIconMargin="15px"
       cartIconMargin="15px"
       profileIconMargin="15px"
       />
    </NavbarContainer>
  )
}


