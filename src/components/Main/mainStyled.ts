import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right, #635dc0,#3027ae);
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;

  p {
    font: 300 1.4em "Lucida Sans"
  }
  h1 {
    font: 600 2em "Roboto"
  }

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 30px;
    background-color: #fff;
    border: 1px solid #fff;
    cursor: pointer;

    &:hover {
      background-color: rgba(255,255,255,0);
      transition: 0.4s;
      color: #fff;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    height: 100%;
    width: 100%;
    clip-path: polygon(100% 68%, 0 100%, 100% 100%);
  }

`

export const ProductContainer = styled.div`
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;


  .product-header {
    height: 10px;
    width: 300px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #D2D1D3;
    h2 {
      color: #615756;
    }
  }
`

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 80px;
width: 100%;
justify-content: center;
align-items: center;
`