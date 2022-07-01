import styled, {keyframes} from 'styled-components'


export const loadingKeyframes = keyframes`
 to {
  transform: rotateZ(-360deg)
 }
`

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 10vmax;
    width: 10vmax;
    border-bottom: 5px solid rgba(110,110,110);
    border-radius: 50%;

    animation: ${loadingKeyframes} 800ms linear infinite;
  }
`