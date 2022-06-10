import React from 'react'
import Provider from './Provider'
import Container from './components/Container'
import History from './components/History'

import {useMediaQueries} from './MediaQueries'

const App = () => {

  const SIZES = {
    mobile: '(min-width:425px)',
    tablet: '(min-width:768px)',
    laptop: '(min-width:1024px)',
  };
  

  return (
    <Provider>
      <div style={appStyles}>
        <Container>

        </Container>
        <History/>
      </div>
    </Provider>
  )
}

const appStyles = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#eaeaea'
}

export default App
