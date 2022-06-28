import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  padding-bottom: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #D2D1D3;
    transform: translateY(-20px);
    transition: 0.3s;
  }
  img {
    height: 250px;
  }
 .details-wrapper {
    padding-left: 10px;

    p:nth-child(1){
      font-weight: bold;
    }
    p:nth-child(3){
      font-weight: bold;
      color: #F26550;
    }

  
    .star-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
      span {
        font-size: 12px;
      }
    }
  }
`