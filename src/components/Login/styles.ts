import styled, { css } from 'styled-components'
import { Planet } from '@styled-icons/ionicons-outline/Planet'
import { ArrowRight } from '@styled-icons/feather'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`

export const WrapperMask = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;

  background: rgba(196, 196, 196, 0.03); 
  backdrop-filter: blur(50px);

  @media (max-width: 1002px) {
    flex-direction: column;

    width: 100%;
    height: 1024px;
  }
`

export const Background = styled.div`

  > img {
    width: 100%;
    height: 95vh;
  }

  @media (max-width: 1002px) {
    > img {
      width: 100vw;
      height: 1024px;
      
      transform: rotate(180deg);
    }
  } 
`

export const LeftSide = styled.div`
  width: 60%;
  height: 95vh;

  left: 0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  /* align-items: center; */

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

    @media (max-width: 425px) {
      margin: 10px 0 0 10px;
    }
  }

  @media (max-width: 1002px) {
    width: 100%;

    justify-content: center;
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

  @media (max-width: 1029px) {
    > h2 {
      font-size: 4rem;
    }

    > h2:first-child, h2:last-child {
      font-size: 4rem;
    }
  }

  @media (max-width: 515px) {
    > h2 {
      font-size: 3rem;
    }

    > h2:first-child, h2:last-child {
      font-size: 3rem;
    }
  }

  @media (max-width: 413px) {
    > h2 {
      font-size: 2rem;
    }

    > h2:first-child, h2:last-child {
      font-size: 2rem;
    }
  }

  @media (max-width: 310px) {
    > h2 {
      font-size: 1.5rem;
    }

    > h2:first-child, h2:last-child {
      font-size: 1.5rem;
    }
  }
`

export const RightSide = styled.div`
  width: 40%;
  height: 95vh;

  right: 0;
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;

  > .inputWrapper:first-child {
    margin-top: 100px;
  }

  > .inputWrapper {
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 100px;

    margin-top: 10px;
    padding: 5px;
  }

  > .inputWrapper > span {
    top: 0;

    color: #fff;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 0.75rem;
  }

  @media (max-width: 1002px) {
    width: 70%;

    justify-content: center;
    margin-left: 85px;

    > .inputWrapper:first-child {
      margin-top: 0px;
    }
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
    width: 50px;
    height: 50px;

    margin-top: 10px;
    margin-left: 5px;

    border-radius: 50%;
    border: 1px solid #fff;

    &:hover {
      cursor: pointer;
    }
`

export const ContinueIcon = styled(ArrowRight)`
  padding: 0;
  width: 30px;
  height: 30px;

  > polyline, line {
    color: white;
  }
`
