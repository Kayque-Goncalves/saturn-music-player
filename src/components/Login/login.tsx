/* eslint-disable no-use-before-define */
import React from 'react'

import { Container, Background, LeftSide, Logo, Messages, RightSide, Input, ContinueButton, ArrowRight, WrapperMask } from './styles'
import background from '../../images/background.jpg'

const Login: React.FC = () => {
  return (
    <Container>

      <Background>
        <img src={ background } alt="Background image"/>
      </Background>

      <WrapperMask>

        <LeftSide>
          <div className="brand">
            <Logo />
            {/* <h1> Saturn </h1> */}
          </div>

          <Messages>
            <h2> The greatest </h2>
            <h2> music player </h2>
            <h2> ever. </h2>
          </Messages>

          <span> Sign up </span>
        </LeftSide>

        <RightSide>
          <div>
            <span> U S E R N A M E </span>
            <Input type="text" placeholder="Enter username" />
          </div>

          <div>
            <span> P A S S W O R D </span>
            <Input type="password" placeholder="Enter password" />
          </div>

          <ContinueButton>
              <ArrowRight />
          </ContinueButton>

        </RightSide>

      </WrapperMask>

    </Container>
  )
}

export default Login
