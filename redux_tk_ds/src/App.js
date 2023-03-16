import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import First from './First'
import Second from './Second'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/first' element= {<> <First  key={'route1'} /> </>} ></Route>
        <Route path='/second' element= {<><Second  key={'route2'} /></>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App