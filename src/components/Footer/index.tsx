import { FooterContainer } from "./footerStyled"
import google from './images/google.png'
import apple from './images/app.png'
import logo from './images/logo.png'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={google} alt="google" />
        <img src={apple} alt="apple" />
      </div>
      <div>
        <img src={logo} alt="logo" />
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 © Joshua Jacinto</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <h4>Facebook</h4>
        <h4>Twitter</h4>
        <h4>Instagram</h4>
      </div>
    </FooterContainer>
  )
}
