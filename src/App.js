import { useState } from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import CarouselPage from './components/CarouselPage'
import CarouselSlides from './components/CarouselSlides'

function App() {
 //const [count, setCount] = useState(0)

  return (
    <>
    <p>Go to the /carouselpage page</p>
      <BrowserRouter>
    <Routes>
      <Route path='/carouselpage' element={<CarouselPage/>} />
      <Route path='/carouselslides' element={<CarouselSlides/>} />
      {/* <Route path='/login' element={<Login/>} /> */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
