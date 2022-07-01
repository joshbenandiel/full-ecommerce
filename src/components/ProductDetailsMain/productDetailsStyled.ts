import styled from 'styled-components'

export const ProductWrapper = styled.div`
`
export const ProductContainer = styled.div`
  height: auto;
  width: auto;
  background-color: #D7D6D7;
  border: 2px solid #fff;
  padding: 100px;


  .product-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
   
    .first-column{
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 50px;
     border: 2px solid #fff;
  
     img {
      height: 400px;
      margin-bottom: 10px;
     }
    }
  
    .second-column {
     display: flex;
     justify-content: center;
     align-items: flex-start;
     padding: 50px;
     border: 2px solid #fff;
     border-left: none;
     flex-direction: column;
     color: #454240;
   

     .first-child{
      border-bottom: 2px solid #C7C6C7;
      width: 100%;
      padding: 20px 20px 0px 0px;

      p {
        font-size: 12px;
      }
     }
     .second-child{
      display: flex;
      border-bottom: 2px solid #C7C6C7;
      width: 100%;
      padding: 15px 15px 15px 0px;
      gap: 10px;
      align-items: center;
      span {
        font-size: 12px;
      }
     } 
     .third-child{
      border-bottom: 2px solid #C7C6C7;
      width: 100%;
      padding: 20px 20px 20px 0px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .button-wrapper {
        display: flex;

        .add-minus-button {
          border: none;
          background-color: #525153;
          cursor: pointer;
          color: #fff;
        }

        input {
          outline: none;
          width: 30px;
          text-align: center;
        }
        div {
         margin-left: 10px;
        }
      }
      .orange-button {
        border-radius: 20px;
        background-color: #FB6349;
        color: #fff;
        border: none;
        padding: 10px 30px;
        cursor: pointer;
      }
     } 
     .fourth-child{
      border-bottom: 2px solid #C7C6C7;
      width: 100%;
      padding: 20px 20px 20px 0px;

      h3 > span {
        color: #528358; 
      }
     } 
     .fifth-child {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px 20px 20px 0px;
      .orange-button {
        border-radius: 20px;
        background-color: #FB6349;
        color: #fff;
        border: none;
        padding: 10px 30px;
        cursor: pointer;
      }
     }
    }

    
  }
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  div {
    text-align: center;
    width: 300px;
    padding: 10px;
    border-bottom: 2px solid #ECEBEC;

    p {
      font-size: 20px;
      color: #706C68;
    }
  }
`