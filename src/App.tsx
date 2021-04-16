/* eslint-disable no-use-before-define */
import React from 'react'
import GlobalStyles from './styles/GlobalStyles'

import Login from './components/Login/login'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  )
}

export default App
