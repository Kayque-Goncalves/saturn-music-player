import styled, { css } from 'styled-components'
import { Planet } from '@styled-icons/ionicons-outline/Planet'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`

export const WrapperMask = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;

  position: absolute;
  top: 0;

  background: rgba(196, 196, 196, 0.03); 
  backdrop-filter: blur(50px);
`

export const Background = styled.div`

  > img {
    width: 100%;
    height: 95vh;
  }
`

export const LeftSide = styled.div`
  width: 50%;
  height: 95vh;

  left: 0;
  display: flex;
  flex-direction: column;

  > .brand {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: 200px;
    height: 60px;

    padding: 10px;
    margin: 75px 0 0 75px;

    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #fff;
  }
`

const iconCSS = css`
  width: 60px;
  height: 60px;
`

export const Logo = styled(Planet)`
  ${iconCSS}

  > path, circle {
    color: #fff;
  }
`

export const Messages = styled.div`
  padding: 20px;
  margin-top: 20px;
  margin-left: 65px;

  > h2:first-child, h2:last-child {
    height: 30%;

    font-size: 5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #fff;
  }

  > h2 {
    height: 27%;

    font-size: 5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    color: #f6f6f6;
  } 
`

export const RightSide = styled.div`
  width: 50%;
  height: 95vh;

  right: 0;
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  > div:first-child {
    margin-top: 5px;
  }

  > div {
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 100px;

    margin-top: 10px;
    padding: 20px;
  }

  > div > span {
    margin: 25px 0;

    color: #fff;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 0.75rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 160px;

  outline: 0;

  color: #fff;
  font-family: 'Poppins';
  font-weight: 100;
  font-size: 1.2rem;
  
  &::placeholder {
    color: #fff;
    font-family: 'Poppins';
    font-weight: 100;
    font-size: 1.2rem;
  }
`

export const ContinueButton = styled.button`

`

export const ArrowRight = styled.div`

`
