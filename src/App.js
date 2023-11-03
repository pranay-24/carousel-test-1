import { useState } from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import CarouselPage from './components/CarouselPage'
import CarouselSlides from './components/CarouselSlides'
import Sidebar from './components/Sidebar'
import { CarouselState } from './components/carousel/CarouselState'

function App() {
 //const [count, setCount] = useState(0)

  return (
    <>
    <CarouselState>
    <p>Go to the /carouselpage page</p>
      <BrowserRouter>
    <Routes>
      <Route path='/carouselpage' element={<CarouselPage/>} />
      <Route path='/carouselslides' element={<CarouselSlides/>} />
      <Route path='/sidebar' element={<Sidebar/>} />
      {/* <Route path='/login' element={<Login/>} /> */}
    </Routes>
    </BrowserRouter>
    </CarouselState>
    </>
  )
}

export default App
