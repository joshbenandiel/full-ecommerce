import styled from 'styled-components'


export const FooterContainer = styled.div`
  height: 30vh;
  width: 100%;
  background-color: #232123;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  color: #fff;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  div:nth-child(1){
    h4,p {
      margin-bottom: 10px;
    }
    padding: 0px 30px;
    text-align: center;
    /* gap: 20px; */

    img {
      height: 50px;
      cursor: pointer;
    }
  }

  div:nth-child(2){
    img {
      height: 150px;
    }
    p:nth-child(3) {
      font-size: 15px;
      font-style: italic;
    }
  }

  div:nth-child(3){
    gap: 20px;
    h3 {
      text-decoration: underline;
    }
    h4:hover{
      color: #00ff00;
      cursor: pointer;
    }

    
  }
`
